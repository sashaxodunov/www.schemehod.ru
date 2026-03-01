-- =========================
-- Таблица производителей
-- =========================

CREATE TABLE manufacturers (
    id INT AUTO_INCREMENT PRIMARY KEY,   -- Уникальный идентификатор производителя
    name VARCHAR(100) NOT NULL,           -- Название производителя
    country VARCHAR(50),                  -- Страна производителя
    website VARCHAR(255)                  -- Официальный сайт
);

-- =========================
-- Типы компонентов
-- =========================

CREATE TABLE component_types (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Уникальный идентификатор типа компонента
    name VARCHAR(50) NOT NULL,             -- Название типа (резистор, конденсатор и т.д.)
    description TEXT                      -- Описание или пояснение типа
);

-- =========================
-- Корпуса компонентов
-- =========================

CREATE TABLE packages (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Уникальный идентификатор корпуса
    name VARCHAR(50) NOT NULL,             -- Обозначение корпуса (SMD, DIP-8, TO-220)
    description TEXT                      -- Дополнительное описание корпуса
);

-- =========================
-- Основная таблица компонентов
-- =========================

CREATE TABLE components (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Уникальный идентификатор компонента
    part_number VARCHAR(100) NOT NULL,     -- Обозначение/артикул компонента
    component_type_id INT NOT NULL,        -- Ссылка на тип компонента
    manufacturer_id INT,                  -- Ссылка на производителя
    package_id INT,                       -- Ссылка на корпус
    polarity VARCHAR(20),                 -- Полярность (polarized / non-polarized)
    description TEXT,                     -- Текстовое описание компонента

    FOREIGN KEY (component_type_id) REFERENCES component_types(id), -- Связь с типом компонента
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id),     -- Связь с производителем
    FOREIGN KEY (package_id) REFERENCES packages(id)                -- Связь с корпусом
);

-- =========================
-- Справочник параметров
-- =========================

CREATE TABLE parameters (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Уникальный идентификатор параметра
    name VARCHAR(100) NOT NULL,            -- Название параметра (сопротивление, ёмкость)
    unit VARCHAR(20),                     -- Единица измерения (Ом, Ф, В)
    description TEXT                      -- Описание параметра
);

-- =========================
-- Значения параметров компонентов
-- =========================

CREATE TABLE component_parameters (
    component_id INT NOT NULL,            -- Ссылка на компонент
    parameter_id INT NOT NULL,            -- Ссылка на параметр
    value_min DECIMAL(10,3),              -- Минимальное значение параметра
    value_max DECIMAL(10,3),              -- Максимальное значение параметра
    value_typ DECIMAL(10,3),              -- Типичное (номинальное) значение

    PRIMARY KEY (component_id, parameter_id), -- Составной ключ (один параметр на компонент)
    FOREIGN KEY (component_id) REFERENCES components(id), -- Связь с компонентом
    FOREIGN KEY (parameter_id) REFERENCES parameters(id)  -- Связь с параметром
);

-- =========================
-- Даташиты компонентов
-- =========================

CREATE TABLE datasheets (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Уникальный идентификатор даташита
    component_id INT NOT NULL,             -- Ссылка на компонент
    url VARCHAR(255) NOT NULL,             -- Ссылка на файл или страницу даташита
    language VARCHAR(20),                  -- Язык даташита
    revision VARCHAR(20),                  -- Ревизия документа

    FOREIGN KEY (component_id) REFERENCES components(id) -- Связь с компонентом
);
