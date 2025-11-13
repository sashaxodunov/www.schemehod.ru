
-- Пример заполнение таблиц ноутбуков в базе u3054160_laptop_db

INSERT INTO devices (brand, model, board_code, board_pn, board_assy, generation, cpu_family, bios_vendor, superio)
VALUES ('Samsung', 'Notebook 9 NP900X5L', 'TACOMA13-SKL', 'BA92-15596B', 'BA41-02466A', 'Intel Skylake', 'i7-6500U', 'Insyde', 'IT8995E');

INSERT INTO components (device_id, name, part_number, description, datasheet_url)
VALUES 
(1, 'Charger', 'BQ24780S', 'Battery charger controller', 'ссылка на страницу компонент в моей базе'),
(1, 'EC', 'IT8995E', 'Embedded Controller'),
(1, 'PowerController', 'TPS51225C', '3V/5V VRM');

INSERT INTO documents (device_id, doc_type, filename, file_format, verified, description)
VALUES
(1, 'schematic', 'TACOMA13-SKL_Schematic.pdf', 'PDF', 1, 'Полная схема платы BA92-15596B'),
(1, 'boardview', 'BA41-02466A.cad', 'CAD', 1, 'Boardview под OpenBoardView/Allegro');
