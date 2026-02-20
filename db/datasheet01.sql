🧩 1. Общая архитектура

База разделена на логические слои:

categories — широкие классы компонентов

subcategories — подтипы (напр. “MOSFET”, “Operational Amplifier”, “Zener Diode”)

manufacturers — производители

packages — стандартизированные корпуса

components — конкретные позиции

parameters — набор характеристик (гибкий JSON-уровень или таблица)

🧱 2. Финальная SQL-структура

-- 1️⃣ Основные категории (высший уровень)
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

-- 2️⃣ Подкатегории (MOSFET, OpAmp, LDO, Diode и т.п.)
CREATE TABLE subcategories (
    subcategory_id SERIAL PRIMARY KEY,
    subcategory_name VARCHAR(100) NOT NULL UNIQUE,
    category_id INTEGER REFERENCES categories(category_id) ON DELETE CASCADE,
    description TEXT
);

-- 3️⃣ Производители
CREATE TABLE manufacturers (
    manufacturer_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL UNIQUE,
    country VARCHAR(100),
    website TEXT
);

-- 4️⃣ Корпуса и стандарты упаковки
CREATE TABLE packages (
    package_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    mounting_type VARCHAR(50), -- e.g. SMD, Through-Hole
    description TEXT
);

-- 5️⃣ Основная таблица компонентов
CREATE TABLE components (
    component_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    datasheet_url TEXT,
    lifecycle_status VARCHAR(50), -- Active / Obsolete / NRND
    manufacturer_id INTEGER REFERENCES manufacturers(manufacturer_id) ON DELETE SET NULL,
    subcategory_id INTEGER REFERENCES subcategories(subcategory_id) ON DELETE SET NULL,
    package_id INTEGER REFERENCES packages(package_id) ON DELETE SET NULL
);

-- 6️⃣ Параметры (гибкий механизм под любые характеристики)
CREATE TABLE parameters (
    parameter_id SERIAL PRIMARY KEY,
    component_id INTEGER REFERENCES components(component_id) ON DELETE CASCADE,
    parameter_name VARCHAR(150) NOT NULL,
    value VARCHAR(150),
    unit VARCHAR(30),
    min_value VARCHAR(50),
    max_value VARCHAR(50),
    notes TEXT
);

-- 7️⃣ Альтернативные ссылки или кросс-референсы
CREATE TABLE cross_references (
    cross_id SERIAL PRIMARY KEY,
    component_id INTEGER REFERENCES components(component_id) ON DELETE CASCADE,
    equivalent_part VARCHAR(100),
    note TEXT
);

-- 8️⃣ Вложения (даташиты, модели, рисунки)
CREATE TABLE attachments (
    attachment_id SERIAL PRIMARY KEY,
    component_id INTEGER REFERENCES components(component_id) ON DELETE CASCADE,
    file_type VARCHAR(50),       -- e.g. PDF, STEP, SPICE
    file_url TEXT,
    description TEXT
);

D:\YandexDisk\!www.reg.ru\schemexod.ru\www-v1.0.0\src\db\datasheet.sql

⚙️ 3. Пример заполнения

-- Категории
INSERT INTO categories (category_name) VALUES ('Semiconductors'), ('Passive Components');

-- Подкатегории
INSERT INTO subcategories (subcategory_name, category_id) 
VALUES ('Operational Amplifier', 1), ('NPN Transistor', 1), ('Ceramic Capacitor', 2);

-- Производитель
INSERT INTO manufacturers (name, country, website)
VALUES ('Texas Instruments', 'USA', 'https://www.ti.com');

-- Корпус
INSERT INTO packages (name, mounting_type, description)
VALUES ('DIP-8', 'Through-Hole', 'Dual inline 8-pin package');

-- Компонент
INSERT INTO components (name, description, datasheet_url, lifecycle_status, manufacturer_id, subcategory_id, package_id)
VALUES (
  'LM358N',
  'Dual low-power operational amplifier',
  'https://www.ti.com/lit/ds/symlink/lm358.pdf',
  'Active',
  1, 1, 1
);

-- Параметры
INSERT INTO parameters (component_id, parameter_name, value, unit)
VALUES
  (1, 'Supply Voltage', '3–32', 'V'),
  (1, 'Input Offset Voltage', '2', 'mV'),
  (1, 'Gain Bandwidth', '1', 'MHz');

🧠 4. Преимущества новой схемы

✅ Охватывает все типы компонентов — от микросхем до пассивных элементов.

✅ Расширяется без изменений структуры (новые подкатегории, параметры, корпуса).

✅ Поддерживает поиск по характеристикам (SQL-фильтры, JSON-хранение или индексы).

✅ Готова к интеграции с библиотеками CAD (KiCad, Altium, Fusion 360).