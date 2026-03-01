CREATE OR REPLACE FUNCTION add_component(
    /* =====================================================
       1. Базовые данные компонента
       ===================================================== */
    p_part_number            VARCHAR,        -- Номер детали производителя
    p_product_name           VARCHAR,        -- Маркетинговое / продуктовое название
    p_manufacturer_id        BIGINT,          -- ID производителя
    p_category_id            BIGINT,          -- Категория компонента
    p_component_type_id      BIGINT,          -- Тип компонента (MCU, IC, Passive и т.д.)
    p_status                 VARCHAR DEFAULT 'active', -- Статус компонента
    p_main_parameters        JSONB DEFAULT NULL,        -- Основные параметры в JSON

    /* =====================================================
       2. Описания
       ===================================================== */
    p_desc_one_ru             TEXT DEFAULT NULL, -- Краткое описание (RU)
    p_desc_one_en             TEXT DEFAULT NULL, -- Краткое описание (EN)
    p_desc_two_ru             TEXT DEFAULT NULL, -- Расширенное описание (RU)
    p_desc_two_en             TEXT DEFAULT NULL, -- Расширенное описание (EN)
    p_desc_three_ru           TEXT DEFAULT NULL, -- Доп. описание (RU)
    p_desc_three_en           TEXT DEFAULT NULL, -- Доп. описание (EN)
    p_app_notes_ru            TEXT DEFAULT NULL, -- Примечания по применению (RU)
    p_app_notes_en            TEXT DEFAULT NULL, -- Примечания по применению (EN)

    /* =====================================================
       2a. Источник описаний (если variant)
       ===================================================== */
    p_description_source_part_number VARCHAR DEFAULT NULL,
	
    /* =====================================================
       3. Features
       ===================================================== */
    p_features_ru             TEXT[] DEFAULT ARRAY[]::TEXT[], -- Список особенностей (RU)
    p_features_en             TEXT[] DEFAULT ARRAY[]::TEXT[], -- Список особенностей (EN)

    /* =====================================================
       4. Packages
       ===================================================== */
    p_package_ids             BIGINT[] DEFAULT ARRAY[]::BIGINT[], -- ID корпусов

    /* =====================================================
       5. Pins / Parameters / Datasheets (JSON API)
       ===================================================== */
    p_pins                    JSONB[] DEFAULT ARRAY[]::JSONB[], -- Массив JSON pin-ов
    p_parameters              JSONB[] DEFAULT ARRAY[]::JSONB[], -- Массив параметров
    p_datasheets              JSONB[] DEFAULT ARRAY[]::JSONB[]  -- Массив datasheet-ов
)
RETURNS BIGINT
LANGUAGE plpgsql
AS $$
DECLARE
    v_component_id BIGINT;   -- ID компонента
    v_pin_id       BIGINT;   -- ID pin (необязательно используется)
    v_datasheet_id BIGINT;   -- ID datasheet
BEGIN
    /* =====================================================
       Проверка согласованности features RU/EN
       ===================================================== */
    IF array_length(p_features_ru, 1) <> array_length(p_features_en, 1) THEN -- Запрещаем рассинхронизацию языков
        RAISE EXCEPTION 'Features RU/EN length mismatch';
    END IF;

	    /* =====================================================
       Если задан источник описаний — находим его ID
       ===================================================== */
    IF p_description_source_part_number IS NOT NULL THEN
        SELECT id
        INTO v_description_src_id
        FROM components
        WHERE manufacturer_id = p_manufacturer_id
          AND part_number = p_description_source_part_number;

        IF v_description_src_id IS NULL THEN
            RAISE EXCEPTION
              'Description source component % not found',
              p_description_source_part_number;
        END IF;
    END IF;

   /* =====================================================
       Вставка компонента
       ===================================================== */
    INSERT INTO components (
        part_number,
        product_name,
        manufacturer_id,
        category_id,
        component_type_id,
        status,
        main_parameters,
        description_source_id,
        search_vector
    )
    VALUES (
        p_part_number,
        p_product_name,
        p_manufacturer_id,
        p_category_id,
        p_component_type_id,
        p_status,
        p_main_parameters,
        v_description_src_id,
        to_tsvector(
            'simple',
            concat_ws(' ',
                p_part_number,
                p_product_name,
                p_desc_one_ru,
                p_desc_one_en
            )
        )
    )
    ON CONFLICT (manufacturer_id, part_number) DO NOTHING
    RETURNING id INTO v_component_id;

    IF v_component_id IS NULL THEN
        SELECT id
        INTO v_component_id
        FROM components
        WHERE manufacturer_id = p_manufacturer_id
          AND part_number = p_part_number;
    END IF;

    /* =====================================================
       Описания: только если компонент — источник
       ===================================================== */
    IF v_description_src_id IS NULL THEN
        INSERT INTO component_descriptions (
            component_id,
            description_one_ru,
            description_one_en,
            description_two_ru,
            description_two_en,
            description_three_ru,
            description_three_en,
            application_notes_ru,
            application_notes_en
        )
        VALUES (
            v_component_id,
            p_desc_one_ru,
            p_desc_one_en,
            p_desc_two_ru,
            p_desc_two_en,
            p_desc_three_ru,
            p_desc_three_en,
            p_app_notes_ru,
            p_app_notes_en
        )
        ON CONFLICT (component_id) DO NOTHING;
    END IF;

    /* =====================================================
       Features
       ===================================================== */
    INSERT INTO component_unique_features (
        component_id,
        feature_description_ru,
        feature_description_en
    )
    SELECT v_component_id, ru, en
    FROM unnest(p_features_ru, p_features_en) AS t(ru, en)
    ON CONFLICT DO NOTHING;

    /* =====================================================
       Packages
       ===================================================== */
    INSERT INTO component_packages (component_id, package_id)
    SELECT v_component_id, pkg_id
    FROM unnest(p_package_ids) AS pkg_id
    ON CONFLICT DO NOTHING;

    /* =====================================================
       Datasheets (без изменений)
       ===================================================== */
    IF p_datasheets IS NOT NULL AND array_length(p_datasheets, 1) > 0 THEN
        FOR i IN 1..array_length(p_datasheets, 1) LOOP
            INSERT INTO datasheets (
                component_id,
                revision,
                release_date,
                is_primary,
                notes
            )
            VALUES (
                v_component_id,
                p_datasheets[i]->>'revision',
                (p_datasheets[i]->>'release_date')::DATE,
                COALESCE((p_datasheets[i]->>'is_primary')::BOOLEAN, false),
                p_datasheets[i]->>'notes'
            )
            RETURNING id INTO v_datasheet_id;

            INSERT INTO datasheet_files (
                datasheet_id,
                file_name,
                file_url,
                file_type,
                checksum
            )
            SELECT
                v_datasheet_id,
                f->>'file_name',
                f->>'file_url',
                f->>'file_type',
                f->>'checksum'
            FROM jsonb_array_elements(
                COALESCE(p_datasheets[i]->'files', '[]'::jsonb)
            ) AS f;
        END LOOP;
    END IF;

    RETURN v_component_id;
END;
$$;

-- Вызов функции для MAX5048AAUT-T
SELECT add_component(
    /* =====================================================
       1. Базовые данные
       ===================================================== */
    p_part_number       => 'MAX5048AAUT-T',
    p_product_name      => 'Step-Down DC-DC Converter',
    p_manufacturer_id   => 2,
    p_category_id       => 20,
    p_component_type_id => 5,
    p_status            => 'active',
    p_main_parameters   => '{
        "topology": "buck",
        "input_voltage_v": "4.5–28",
        "output_voltage_v": "fixed",
        "output_current_a": 0.1,
        "frequency_khz": 300
    }'::jsonb,

    /* =====================================================
       2. Описания (эталон)
       ===================================================== */
    p_desc_one_ru   => 'Импульсный понижающий DC-DC преобразователь',
    p_desc_one_en   => 'Step-down switching DC-DC converter',
    p_desc_two_ru   => 'Фиксированное выходное напряжение, вариант A',
    p_desc_two_en   => 'Fixed output voltage, A version',
    p_app_notes_ru  => 'Подходит для питания маломощных нагрузок',
    p_app_notes_en  => 'Suitable for low-power supply rails',

    /* =====================================================
       2a. Источник описаний
       ===================================================== */
    p_description_source_part_number => NULL,  -- эталон, источник описаний

    /* =====================================================
       3. Features
       ===================================================== */
    p_features_ru => ARRAY[
        'Широкий диапазон входного напряжения',
        'Высокий КПД',
        'Минимум внешних компонентов'
    ],
    p_features_en => ARRAY[
        'Wide input voltage range',
        'High efficiency',
        'Minimal external components'
    ],

    /* =====================================================
       4. Packages
       ===================================================== */
    p_package_ids => ARRAY[12], -- SOT-23-6
       
    /* =====================================================
       5. Pins
       ===================================================== */
    p_pins => ARRAY[
        '{
            "pin_number": "1",
            "name": "VIN",
            "direction": "power",
            "pin_group": "power",
            "comment": "Input supply voltage"
        }'::jsonb,
        '{
            "pin_number": "2",
            "name": "GND",
            "direction": "power",
            "pin_group": "ground",
            "comment": "Ground"
        }'::jsonb,
        '{
            "pin_number": "3",
            "name": "OUT",
            "direction": "power",
            "pin_group": "power",
            "comment": "Regulated output voltage"
        }'::jsonb
    ],

    /* =====================================================
       6. Parameters
       ===================================================== */
    p_parameters => ARRAY[
        '{
            "parameter_id": 10,
            "value_min": 4.5,
            "value_max": 28,
            "notes": "Input voltage range"
        }'::jsonb,
        '{
            "parameter_id": 11,
            "value_typ": 100,
            "value_text": "mA",
            "notes": "Output current"
        }'::jsonb
    ],

    /* =====================================================
       7. Datasheets
       ===================================================== */
    p_datasheets => ARRAY[
        '{
            "revision": "Rev 2",
            "release_date": "2019-03-01",
            "is_primary": true,
            "notes": "MAX5048A datasheet",
            "files": [
                {
                    "file_name": "MAX5048A.pdf",
                    "file_url": "https://www.analog.com/media/en/technical-documentation/data-sheets/MAX5048A.pdf",
                    "file_type": "pdf",
                    "checksum": "max5048a_rev2"
                }
            ]
        }'::jsonb
    ]
);



-- Вызов функции для MAX5048BAUT-T
SELECT add_component(
    /* =====================================================
       1. Базовые данные
       ===================================================== */
    p_part_number       => 'MAX5048BAUT-T',
    p_product_name      => 'Step-Down DC-DC Converter',
    p_manufacturer_id   => 2,
    p_category_id       => 20,
    p_component_type_id => 5,
    p_status            => 'active',
    p_main_parameters   => '{
        "topology": "buck",
        "input_voltage_v": "4.5–28",
        "output_voltage_v": "adjustable",
        "output_current_a": 0.1,
        "frequency_khz": 300
    }'::jsonb,

    /* =====================================================
       2. Описания
       -----------------------------------------------------
       НЕ передаём, наследуем от эталона
       ===================================================== */
    p_desc_one_ru   => NULL,
    p_desc_one_en   => NULL,
    p_desc_two_ru   => NULL,
    p_desc_two_en   => NULL,
    p_app_notes_ru  => NULL,
    p_app_notes_en  => NULL,

    /* =====================================================
       2a. Источник описаний
       ===================================================== */
    p_description_source_part_number => 'MAX5048AAUT-T', -- ссылка на эталон

    /* =====================================================
       3. Features (вариант B)
       ===================================================== */
    p_features_ru => ARRAY[
        'Регулируемое выходное напряжение',
        'Высокий КПД',
        'Широкий диапазон входного напряжения'
    ],
    p_features_en => ARRAY[
        'Adjustable output voltage',
        'High efficiency',
        'Wide input voltage range'
    ],

    /* =====================================================
       4. Packages
       ===================================================== */
    p_package_ids => ARRAY[12], -- SOT-23-6

    /* =====================================================
       5. Pins
       ===================================================== */
    p_pins => ARRAY[
        '{
            "pin_number": "1",
            "name": "VIN",
            "direction": "power",
            "pin_group": "power",
            "comment": "Input supply voltage"
        }'::jsonb,
        '{
            "pin_number": "2",
            "name": "FB",
            "direction": "input",
            "pin_group": "feedback",
            "comment": "Feedback input"
        }'::jsonb,
        '{
            "pin_number": "3",
            "name": "OUT",
            "direction": "power",
            "pin_group": "power",
            "comment": "Regulated output voltage"
        }'::jsonb
    ],

    /* =====================================================
       6. Parameters
       ===================================================== */
    p_parameters => ARRAY[
        '{
            "parameter_id": 10,
            "value_min": 4.5,
            "value_max": 28,
            "notes": "Input voltage range"
        }'::jsonb,
        '{
            "parameter_id": 12,
            "value_text": "External resistors",
            "notes": "Output voltage set by feedback divider"
        }'::jsonb
    ],

    /* =====================================================
       7. Datasheets
       ===================================================== */
    p_datasheets => ARRAY[
        '{
            "revision": "Rev 2",
            "release_date": "2019-03-01",
            "is_primary": true,
            "notes": "MAX5048B datasheet",
            "files": [
                {
                    "file_name": "MAX5048B.pdf",
                    "file_url": "https://www.analog.com/media/en/technical-documentation/data-sheets/MAX5048B.pdf",
                    "file_type": "pdf",
                    "checksum": "max5048b_rev2"
                }
            ]
        }'::jsonb
    ]
);

