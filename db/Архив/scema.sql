
-- ========================
-- 1. Устройства (devices)
-- ========================
INSERT INTO devices (category, brand, model, platform_code, board_code, board_pn, board_assy, series, generation, device_type, cpu_family, gpu, soc, memory_type, firmware_type, bios_vendor, superio, main_chipset, notes) VALUES
('notebook', 'Dell', 'XPS 15 9500', 'TACOMA13-SKL', 'DELL-1234', '0X12345', '123-ABC', 'XPS', '10th Gen', 'MainBoard', 'Intel Core i7', 'NVIDIA GTX 1650', 'Intel Comet Lake', 'DDR4', 'BIOS', 'American Megatrends', 'ITE IT8788', 'Intel HM470', 'Первое устройство в серии XPS'),
('notebook', 'HP', 'Spectre x360', 'HP360-2020', 'HP-5678', '1Y2345', '456-DEF', 'Spectre', '11th Gen', 'MainBoard', 'Intel Core i5', 'Intel Iris Xe', 'Intel Tiger Lake', 'LPDDR4x', 'BIOS', 'Phoenix', 'ITE IT8665', 'Intel Tiger Lake Chipset', 'Премиум ультрабук HP'),
('smartphone', 'Samsung', 'Galaxy S21', 'SMG21', 'SAM-9012', 'G1234', '789-GHI', 'Galaxy', 'Exynos 2100', 'MainBoard', 'Exynos', 'Mali-G78', 'Exynos 2100', 'LPDDR5', 'Android', NULL, NULL, 'Samsung SoC', 'Флагманский смартфон Samsung');

-- ========================
-- 2. Документы (documents)
-- ========================
INSERT INTO documents (device_id, doc_type, filename, file_format, file_size, version, verified, language, source, description, url) VALUES
(1, 'schematic', 'XPS15_SCH.pdf', 'PDF', 204800, 'v1.0', 1, 'EN', 'Dell official', 'Схема материнской платы', 'https://example.com/sch.pdf'),
(2, 'service_manual', 'Spectre_Service.pdf', 'PDF', 512000, 'v2.1', 1, 'EN', 'HP official', 'Сервисное руководство', 'https://example.com/spectre_manual.pdf'),
(3, 'datasheet', 'GalaxyS21_CPU.pdf', 'PDF', 102400, 'v1.5', 1, 'EN', 'Samsung', 'Datasheet процессора', 'https://example.com/galaxys21_cpu.pdf');

-- ========================
-- 3. Компоненты (components)
-- ========================
INSERT INTO components (device_id, name, part_number, manufacturer, description, datasheet_url, location) VALUES
(1, 'Main CPU', 'BQ24780S', 'Texas Instruments', 'Основной процессор', 'https://example.com/datasheet.pdf', 'U301'),
(2, 'Power IC', 'RT9455', 'Richtek', 'Регулятор питания', 'https://example.com/rt9455.pdf', 'U502'),
(3, 'Display Driver', 'S6E3HC3', 'Samsung', 'Драйвер дисплея AMOLED', 'https://example.com/s6e3hc3.pdf', 'U120');

-- ========================
-- 4. Теги (tags)
-- ========================
INSERT INTO tags (tag_name) VALUES
('power_management'),
('display'),
('network');

-- ========================
-- 5. Связь документов с тегами (document_tags)
-- ========================
INSERT INTO document_tags (document_id, tag_id) VALUES
(1, 1),  -- XPS schematic -> power_management
(1, 2),  -- XPS schematic -> display
(2, 1),  -- HP service manual -> power_management
(3, 2);  -- Galaxy datasheet -> display

-- ========================
-- 6. Заметки (notes)
-- ========================
INSERT INTO notes (device_id, user_name, note) VALUES
(1, 'Ivan', 'При обновлении BIOS возможен сброс настроек'),
(2, 'Olga', 'Проверить напряжение на конденсаторах питания'),
(3, 'Sergey', 'Прошивка Exynos может быть обновлена только через Odin');

-- ========================
-- 7. Кросс-связи (crosslinks)
-- ========================
INSERT INTO crosslinks (from_device_id, to_device_id, relation) VALUES
(1, 2, 'аналогичная плата для другой модели'),
(3, 1, 'использует похожий блок питания');

-- ========================
-- 8. Прошивки (firmware)
-- ========================
INSERT INTO firmware (device_id, fw_type, version, region, file_url, notes) VALUES
(1, 'BIOS', '1.2.3', 'EU', 'https://example.com/bios.bin', 'Обновление исправляет ошибки ACPI'),
(2, 'BIOS', '2.0.1', 'US', 'https://example.com/hp_bios.bin', 'Добавлена поддержка новых процессоров'),
(3, 'Android', '11.0', 'Global', 'https://example.com/galaxy_s21_fw.zip', 'Стабильная прошивка для Galaxy S21');


1. Устройство (devices)
Поле	Пример заполнения	Описание
brand	Dell	Производитель
model	XPS 15 9500	Модель
platform_code	TACOMA13-SKL	Код платформы / платы
board_code	DELL-1234	Код платы
board_pn	0X12345	PN платы
board_assy	123-ABC	Ассамблировочный код
series	XPS	Серия устройства
generation	10th Gen	Поколение процессора/устройства
device_type	MainBoard	Тип устройства на плате
cpu_family	Intel Core i7	Семейство CPU
gpu	NVIDIA GTX 1650	Графика
memory_gpu	Intel Comet Lake	Память видео
memory_type	DDR4	Тип памяти
bios_vendor	American Megatrends	Вендор BIOS
superio	ITE IT8788	Контроллер SuperIO
main_chipset	Intel HM470	Основной чипсет
notes	Первое устройство в серии XPS	Любые дополнительные заметки
2. Документы (documents)
Поле	Пример заполнения	Описание
device_id	1	ID устройства из таблицы devices
doc_type	schematic	Тип документа (ENUM)
filename	XPS15_SCH.pdf	Название файла
file_format	PDF	Формат файла
file_size	204800	Размер файла в байтах
version	v1.0	Версия документа
verified	1	Проверен ли документ
language	EN	Язык документа
source	Dell official	Источник документа
description	Схема материнской платы	Краткое описание
url	https://example.com/sch.pdf
	Ссылка на документ
3. Компоненты (components)
Поле	Пример заполнения	Описание
device_id	1	ID устройства
name	Main CPU	Название компонента
part_number	BQ24780S	Артикул/номер детали
manufacturer	Texas Instruments	Производитель
description	Основной процессор	Описание
datasheet_url	https://example.com/datasheet.pdf
	Ссылка на datasheet
location	U301	Расположение на плате
4. Теги (tags) и связь с документами (document_tags)
Поле	Пример заполнения	Описание
tag_name	power_management	Название тега
document_id	1	ID документа
tag_id	1	ID тега
5. Заметки (notes)
Поле	Пример заполнения	Описание
device_id	1	ID устройства
user_name	Ivan	Автор заметки
note	При обновлении BIOS возможен сброс настроек	Содержание заметки
6. Кросс-связи (crosslinks)
Поле	Пример заполнения	Описание
from_device_id	1	ID устройства-источника
to_device_id	2	ID связанного устройства
relation	аналогичная плата для другой модели	Тип связи
7. Прошивки (firmware)
Поле	Пример заполнения	Описание
device_id	1	ID устройства
fw_type	BIOS	Тип прошивки (ENUM)
version	1.2.3	Версия прошивки
region	EU	Регион (если применимо)
file_url	https://example.com/bios.bin
	Ссылка на прошивку
notes	Обновление исправляет ошибки ACPI	Комментарии















🧱 1. Таблица devices

Главная сущность, описывающая любое устройство или плату.

CREATE TABLE devices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM(
        'notebook', 'desktop', 'motherboard', 'monitor', 'tv',
        'tablet', 'smartphone', 'printer', 'projector', 'power_supply',  -- категория устройства
        'audio', 'network', 'other'
    ) NOT NULL DEFAULT 'other',
    brand VARCHAR(64) NOT NULL,     -- производитель
    model VARCHAR(128) NOT NULL,       
    platform_code VARCHAR(64),      -- Например, TACOMA13-SKL, MTK1234 и т.д.
    board_code VARCHAR(64),
    board_pn VARCHAR(64),
    board_assy VARCHAR(64),
    series VARCHAR(128),
    generation VARCHAR(128),
    device_type VARCHAR(64),        -- Например, "MainBoard", "PowerBoard", "T-CON"
    cpu_family VARCHAR(128),
    gpu VARCHAR(128),
    soc VARCHAR(128),
    memory_type VARCHAR(64),
    firmware_type VARCHAR(64),      -- BIOS, UEFI, Android, Linux и т.д.
    bios_vendor VARCHAR(64),
    superio VARCHAR(64),
    main_chipset VARCHAR(128),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uniq_device (brand, model, platform_code, board_code)
);


📘 Пример:
brand='Samsung', category='tv', model='UE43TU7000', board_code='BN41-02635B', device_type='MainBoard'

📄 2. Таблица documents

Для схем, бордвью, прошивок, сервисных мануалов и прочих файлов.

CREATE TABLE documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    device_id INT NOT NULL,
    doc_type ENUM(
        'schematic', 'boardview', 'service_manual', 'datasheet',
        'firmware', 'training_doc', 'block_diagram', 'user_manual'
    ) NOT NULL,
    filename VARCHAR(255) NOT NULL,
    file_format VARCHAR(16),
    file_size INT,
    version VARCHAR(32),
    verified BOOLEAN DEFAULT 0,
    language VARCHAR(32),
    source VARCHAR(128),
    description TEXT,
    url TEXT,
    upload_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (device_id) REFERENCES devices(id) ON DELETE CASCADE
);

🔩 3. Таблица components

Микросхемы, модули и контроллеры, встречающиеся в оборудовании.

CREATE TABLE components (
    id INT AUTO_INCREMENT PRIMARY KEY,
    device_id INT NOT NULL,
    name VARCHAR(64) NOT NULL,        -- например, "Main CPU", "PMIC", "T-CON"
    part_number VARCHAR(64),          -- BQ24780S, MT5895, LAE1234 и т.д.
    manufacturer VARCHAR(64),
    description TEXT,
    datasheet_url TEXT,
    location VARCHAR(32),             -- позиция на плате (U301, IC102)
    FOREIGN KEY (device_id) REFERENCES devices(id) ON DELETE CASCADE
);

🏷 4. Таблица tags и document_tags

Теги: "power", "charging", "display", "HDMI", "boot", и т. д.

CREATE TABLE tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(64) UNIQUE NOT NULL
);

CREATE TABLE document_tags (
    document_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (document_id, tag_id),
    FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

🧠 5. Таблица notes

Сервисные заметки, результаты ремонта, комментарии мастеров.

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    device_id INT NOT NULL,
    user_name VARCHAR(64),
    note TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (device_id) REFERENCES devices(id) ON DELETE CASCADE
);

🔗 6. Таблица crosslinks

Связи между платформами — например, одна и та же плата используется в разных моделях.

CREATE TABLE crosslinks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    from_device_id INT NOT NULL,
    to_device_id INT NOT NULL,
    relation VARCHAR(128),
    FOREIGN KEY (from_device_id) REFERENCES devices(id) ON DELETE CASCADE,
    FOREIGN KEY (to_device_id) REFERENCES devices(id) ON DELETE CASCADE
);

💡 7. Таблица firmware (специализация под прошивки)
CREATE TABLE firmware (
    id INT AUTO_INCREMENT PRIMARY KEY,
    device_id INT NOT NULL,
    fw_type ENUM('BIOS', 'EC', 'MCU', 'SmartTV', 'Android', 'Other') NOT NULL,
    version VARCHAR(64),
    region VARCHAR(64),
    file_url TEXT,
    notes TEXT,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (device_id) REFERENCES devices(id) ON DELETE CASCADE
);

⚙️ 8. Индексы и оптимизация
CREATE INDEX idx_brand_model ON devices(brand, model);
CREATE INDEX idx_board_code ON devices(board_code);
CREATE INDEX idx_platform_code ON devices(platform_code);
CREATE INDEX idx_component_part ON components(part_number);
CREATE FULLTEXT INDEX idx_notes_text ON notes(note);
CREATE INDEX idx_doc_type ON documents(doc_type);

🧾 9. Примеры вставки
INSERT INTO devices
(brand, category, model, board_code, platform_code, device_type, cpu_family, main_chipset, bios_vendor)
VALUES
('Samsung', 'notebook', 'Notebook 9 NP900X5L', 'BA92-15596B', 'TACOMA13-SKL', 'MainBoard', 'Intel Skylake', 'HM170', 'Insyde'),
('LG', 'tv', '43UK6300', 'EAX67872806', 'MT58xx', 'MainBoard', NULL, 'MT5895', 'LG');

🧩 10. Расширение под модульные устройства

Для техники, где есть несколько плат в одном устройстве (например, PSU + T-CON + MainBoard в телевизоре), можно добавить:

CREATE TABLE subboards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_device_id INT NOT NULL,
    board_code VARCHAR(64),
    board_type VARCHAR(64),
    description TEXT,
    FOREIGN KEY (parent_device_id) REFERENCES devices(id) ON DELETE CASCADE
);

📘 Итого

Эта структура:

Подходит для всех категорий электроники (ноутбуки, ТВ, мониторы, принтеры, аудио, блоки питания).

Поддерживает схемы, бордвью, прошивки, мануалы, блок-диаграммы.

Позволяет вести поиск по коду платы, компоненту, тегу, типу устройства, модели.

Готова к подключению REST API или web-интерфейса.

-- пример

INSERT INTO devices (
    category,
    brand,
    model,
    platform_code,
    board_code,
    board_pn,
    board_assy,
    series,
    generation,
    device_type,
    cpu_family,
    gpu,
    soc,
    memory_type,
    firmware_type,
    bios_vendor,
    superio,
    main_chipset,
    notes
) VALUES (
    'notebook',                     -- категория устройства
    'Samsung',                      -- производитель
    'Notebook 9 NP900X5L',          -- модель
    'TACOMA13-SKL',                 -- код платформы
    'BA92-15596B',                  -- код платы (mainboard)
    'BA41-02466A',                  -- PBA/ASSY номер
    'BA41-02466A',                  -- запасной номер (может совпадать)
    'Notebook 9 Series',            -- серия продукта
    'Intel Skylake',                -- поколение CPU
    'MainBoard',                    -- тип платы
    'Intel Core i7-6500U',          -- CPU
    'Intel HD Graphics 520',        -- GPU (встроенный)
    NULL,                           -- SoC (не используется)
    'DDR3L',                        -- тип памяти
    'BIOS/UEFI',                    -- тип прошивки
    'Insyde',                       -- BIOS вендор
    'ITE IT8995E',                  -- SuperIO/EC
    'Intel HM170',                  -- чипсет
    'Плата используется в моделях Samsung NP900X5L/NP900X5M, ревизия 1.0; питание 19В, схема BA92-15596B, Boardview BA41-02466A.'
);
