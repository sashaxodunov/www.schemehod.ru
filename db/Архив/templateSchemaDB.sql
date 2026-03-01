-- ========================
-- 1. Устройства (devices)

-- 'notebook', 'desktop', 'motherboard', 'monitor', 'tv', 'tablet', 'smartphone', 'printer', 'projector', 'power_supply',
-- ========================
INSERT INTO devices (brand, model, platform_code, board_code, board_pn, board_assy, series, generation, device_type, cpu_family, gpu, soc, memory_type, firmware_type, bios_vendor, superio, main_chipset, notes) VALUES
('Samsung', 'TACOMA13‑SKL', 'SKL', 'TACOMA13‑SKL', 'BA92‑15596B', 'BA41‑02466A', 'TACOMA13', '6th Gen', 'Notebook', 'Intel Core i5/i7 6xxx', 'Intel HD Graphics 520/530', 'Intel Skylake‑SoC', 'DDR4', 'UEFI', 'Samsung', 'ITE IT8620E', 'Intel HM170', 'Samsung notebook motherboard SKL platform');

-- ========================
-- 2. Документы (documents)
-- 'schematic', 'boardview', 'service_manual', 'datasheet', 'firmware', 'training_doc', 'block_diagram', 'user_manual'
-- ========================
INSERT INTO documents (device_id, doc_type, filename, file_format, file_size, version, verified, language, source, description, url) VALUES
(1, 'boardview', 'TACOMA13-SKL BA92-15596B BA41-02466A.cad', 'CAD', 1769150, 'v1.0', 1, 'EN', 'Samsung official', 'Boardview материнской платы', 'https://disk.yandex.ru/d/HIb_lurJO1WXwg');


-- ========================
-- 3. Компоненты (components)
-- ========================
INSERT INTO components (device_id, name, part_number, manufacturer, description, datasheet_url, local_url, location) VALUES
(1, 'Keyboard Controller', 'KB9010QF', 'Ene technology INC', 'Мультиконтроллер', '', '', 'U9278'),
(1, 'SPI-Flash', 'GD25B64CSIG', 'GigaDevice Semiconductor (Beijing) Inc.', 'Энергонезависимая память', 'https://www.alldatasheet.es/datasheet-pdf/pdf/1150073/GIGADEVICE/GD25B64CSIG.html', 'https://disk.yandex.ru/i/c2xwU4G5tpjCsA', 'USP1'),
(1, 'DC/DC buck converter', 'AOZ1237QI-02', 'Alpha & Omega Semiconductors', '24V/8A синхронный понижающий импульсный стабилизатор напряжения', 'https://www.alldatasheet.es/datasheet-pdf/pdf/559657/AOSMD/AOZ1237QI-02.html', '', 'U10019'),
(1, 'VRM', 'ISL95857HRTZ-T', 'Renesas Technology Corp', 'Многофазный контроллер питания', 'https://www.alldatasheet.es/datasheet-pdf/pdf/1052654/RENESAS/ISL95857.html', 'https://disk.yandex.ru/i/B8Wld0FBVWs6Yw', 'U9299'),
(1, 'RPM Fan Controller', 'EMC2112-BP-TR', 'SMSC Corporation', 'Аналоговый контроллер вентилятора', 'https://www.alldatasheet.es/datasheet-pdf/pdf/885736/SMSC/EMC2112-BP-TR.html', 'https://disk.yandex.ru/i/ef_nv-rZ2OSfvg', 'U516'),
(1, 'LPDDR3 SDRAM', 'K4E6E304EE-EGCE', 'Samsung semiconductor', 'Низковольтная динамическая память', 'https://www.alldatasheet.es/datasheet-pdf/pdf/1425733/SAMSUNG/K4E6E304EE-EGCE.html', 'https://disk.yandex.ru/i/31IROCdMxEOMFQ', 'UME1'),
(1, 'Power Controller', 'RT8207LZQW', 'Richtek Technology Corporation', 'Контроллер питания', 'https://www.alldatasheet.es/datasheet-pdf/pdf/1179110/RICHTEK/RT8207LZQW.html', 'https://disk.yandex.ru/i/xmF0f0Oe2ONujQ', 'U505'),
(1, 'Battery Charge Controller', 'BQ24780P', 'Texas Instruments', 'Интеллектуальный контроллер зарядки аккумуляторов', 'https://www.alldatasheet.es/datasheet-pdf/pdf/732614/TI/BQ24780S.html', 'https://disk.yandex.ru/i/xTEhWY_oXYUazQ', 'U24'),
(1, 'HD Audio', 'ALC256-CGT', 'Realtek Semiconductor Corp', 'Аудиокодек', '', '', 'U10005'),
(1, 'Ethernet PHY + MAC', 'RTL8111HS-CG', 'Realtek Semiconductor Corp', 'Сетевой контроллер', 'https://www.alldatasheet.es/datasheet-pdf/pdf/2138014/REALTEK/RTL8111HS-CG.html', '', 'U22');

