

CREATE TABLE IF NOT EXISTS `parameters` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name_parameters` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Имя параметра',
  `measurement_conditions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Условия измерения параметров',
  `min_parameters` decimal(10,3) DEFAULT NULL COMMENT 'Минимальное значение параметра',
  `typ_parameters` decimal(10,3) DEFAULT NULL COMMENT 'Типовые значения параметра',
  `max_parameters` decimal(10,3) DEFAULT NULL COMMENT 'Максимальное значение параметра',
  `unit_parameters` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Обозначение параметра',
  `description_parameters_en` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT 'Описание параметра на английском',
  `description_parameters_ru` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT 'Описание параметра на русском',
  PRIMARY KEY (`id`),
  KEY `idx_parameters_name` (`name_parameters`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `parameters`
--

INSERT INTO `parameters` 
(`id`, `name_parameters`, `measurement_conditions`, `min_parameters`, `typ_parameters`, `max_parameters`, `unit_parameters`, `description_parameters_en`, `description_parameters_ru`) 
VALUES
(17, 'VDS', 'VGS = 0 V, ID = 250 μA', 55.000, NULL, NULL, 'V', 'Drain-source breakdown voltage', 'Сток-исток напряжение пробоя'),
(18, 'ID', NULL, NULL, 110.000, NULL, 'A', 'Continuous drain current', 'Постоянный ток стока'),
(19, 'IDM', NULL, NULL, 390.000, NULL, 'A', 'Pulsed drain current', 'Импульсный ток стока'),
(20, 'PD', NULL, NULL, 200.000, NULL, 'W', 'Total Dissipation @TC=25℃', 'Полная (суммарная) рассеиваемая мощность при температуре корпуса TC = 25 °C'),
(21, 'Tj', NULL, NULL, 175.000, NULL, '℃', 'Max. Operating Junction Temperature', 'Максимальная рабочая температура перехода (кристалла)'),
(22, 'Tstd', NULL, -55.000, NULL, 175, '℃', 'Storage Temperature', 'Температура хранения');
--(1, 'VDS', 'VGS = 0 V, ID = 250 μA', 60.000, NULL, NULL, 'V', 'Drain-source breakdown voltage', 'Сток-исток напряжение пробоя'),
--(2, 'VGS(th)', 'VDS = VGS, ID = 250 μA', 2.000, NULL, 4.000, 'V', 'Gate-source threshold voltage', 'Затвор-исток пороговое напряжение'),
--(3, 'VGS', NULL, NULL, 20.000, NULL, 'V', 'Gate-source voltage', 'Напряжение затвор-исток'),
--(4, 'ID', 'VGS at 10 V, TC = 25 °C', NULL, 70.000, NULL, 'A', 'Continuous drain current', 'Постоянный ток стока'),
--(5, 'IDM', NULL, NULL, 520.000, NULL, 'A', 'Pulsed drain current', 'Импульсный ток стока'),
--(6, 'EAS', NULL, NULL, 1000.000, NULL, 'mJ', 'Single pulse avalanche energy', NULL),
--(7, 'Qg', 'VGS = 10 V, ID = 130 A, VDS = 48 V', NULL, NULL, 190.000, 'nC', 'Total gate charge', 'Общий время заряда затвора'),
--(8, 'Qgs', 'VGS = 10 V, ID = 130 A, VDS = 48 V', NULL, NULL, 55.000, 'nC', 'Gate-source charge ', 'Время заряда затвор-исток'),
--(9, 'Qgd', 'VGS = 10 V, ID = 130 A, VDS = 48 V', NULL, NULL, 90.000, 'nC', 'Gate-drain charge', 'Общий время заряда затвор-сток'),
--(10, 'Ciss', 'VGS = 0 V, VDS = 25 A, f = 1.0 MHz', NULL, 7400.000, NULL, 'pF', 'Input capacitance', 'Входная емкость'),
--(11, 'Coss', 'VGS = 0 V, VDS = 25 A, f = 1.0 MHz', NULL, 3200.000, NULL, 'pF', 'Output capacitance', 'Выходная емкость'),
--(12, 'Crss', 'VGS = 0 V, VDS = 25 A, f = 1.0 MHz', NULL, 540.000, NULL, 'pF', 'Reverse transfer capacitance', 'Обратная передаточная емкость'),
--(13, 'td(on)', 'VDD = 30 V, ID = 130 A, Rg = 4.3 Ω, RD = 0.22 Ω', NULL, 21.000, NULL, 'ns', 'Turn-on delay time', 'Время задержки включения'),
--(14, 'tr', 'VDD = 30 V, ID = 130 A, Rg = 4.3 Ω, RD = 0.22 Ω', NULL, 190.000, NULL, 'ns', 'Rise time', 'Время роста'),
--(15, 'td(off)', 'VDD = 30 V, ID = 130 A, Rg = 4.3 Ω, RD = 0.22 Ω', NULL, 110.000, NULL, 'ns', 'Turn-off delay time', 'Время задержки выключения'),
--(16, 'tf', 'VDD = 30 V, ID = 130 A, Rg = 4.3 Ω, RD = 0.22 Ω', NULL, 190.000, NULL, 'ns', 'Fall time', 'Время снижения');