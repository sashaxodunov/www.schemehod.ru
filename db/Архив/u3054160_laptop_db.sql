-- phpMyAdmin SQL Dump
-- version 5.2.1-1.el8
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Ноя 03 2025 г., 23:46
-- Версия сервера: 8.0.25-15
-- Версия PHP: 8.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `u3054160_laptop_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `components`
--

CREATE TABLE `components` (
  `id` int NOT NULL,
  `device_id` int NOT NULL,
  `name` varchar(64) NOT NULL,
  `part_number` varchar(64) DEFAULT NULL,
  `description` text,
  `datasheet_url` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `components`
--

INSERT INTO `components` (`id`, `device_id`, `name`, `part_number`, `description`, `datasheet_url`) VALUES
(1, 1, 'Microcontroller', 'KB9010QF', 'Keyboard Controller', NULL),
(2, 1, 'PWM', 'ISL95857HRTZ', '1+2+1 Voltage Regulator for Intel IMVP8™ CPUs', NULL),
(3, 1, 'PWM', 'AOZ1237QI-02', '24V/8A Synchronous EZBuckTM Regulator', NULL),
(4, 1, 'PWMDDR', 'RT8207LZQW', 'Complete DDRII/DDRIII/Low-Power DDRIII/DDRIV Memory Power Supply Controller', NULL),
(5, 1, 'PWM', 'TPS51225BRUKR', 'Dual Synchronous, Step-Down Controller with 5-V and 3.3-V LDOs', NULL),
(6, 1, 'audioCodec', 'ALC256-CGT', 'Ultra-Low Power Two-Channel Audio CODEC', NULL),
(7, 1, 'ethernetController', 'RTL8111HS', 'Integrated 10/100/1000M', NULL),
(8, 1, 'LPDDR3', 'K4E6E304EE-EGCE', '16Gb QDP LPDDR3 SDRAM', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `crosslinks`
--

CREATE TABLE `crosslinks` (
  `id` int NOT NULL,
  `from_device_id` int NOT NULL,
  `to_device_id` int NOT NULL,
  `relation` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `devices`
--

CREATE TABLE `devices` (
  `id` int NOT NULL,
  `brand` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Фирма производитель ',
  `model` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Модель ',
  `board_code` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Название платы',
  `board_pn` varchar(64) DEFAULT NULL,
  `board_assy` varchar(64) DEFAULT NULL,
  `series` varchar(128) DEFAULT NULL,
  `generation` varchar(128) DEFAULT NULL,
  `type` varchar(64) DEFAULT NULL,
  `cpu_family` varchar(128) DEFAULT NULL,
  `gpu` varchar(128) DEFAULT NULL,
  `memory_type` varchar(64) DEFAULT NULL,
  `bios_vendor` varchar(64) DEFAULT NULL,
  `superio` varchar(64) DEFAULT NULL,
  `notes` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `devices`
--

INSERT INTO `devices` (`id`, `brand`, `model`, `board_code`, `board_pn`, `board_assy`, `series`, `generation`, `type`, `cpu_family`, `gpu`, `memory_type`, `bios_vendor`, `superio`, `notes`, `created_at`) VALUES
(1, 'Samsung', 'Notebook 9 NP900X5L', 'TACOMA13-SKL', 'BA92-15596B', 'BA41-02466A', NULL, 'Intel Skylake', NULL, 'i7-6500U', NULL, NULL, 'Insyde', 'IT8995E', NULL, '2025-11-03 15:50:27');

-- --------------------------------------------------------

--
-- Структура таблицы `documents`
--

CREATE TABLE `documents` (
  `id` int NOT NULL,
  `device_id` int NOT NULL,
  `doc_type` enum('schematic','boardview','service_manual','datasheet') NOT NULL,
  `filename` varchar(255) NOT NULL,
  `file_format` varchar(16) DEFAULT NULL,
  `file_size` int DEFAULT NULL,
  `version` varchar(32) DEFAULT NULL,
  `verified` tinyint(1) DEFAULT '0',
  `source` varchar(64) DEFAULT NULL,
  `description` text,
  `url` text,
  `upload_date` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `documents`
--

INSERT INTO `documents` (`id`, `device_id`, `doc_type`, `filename`, `file_format`, `file_size`, `version`, `verified`, `source`, `description`, `url`, `upload_date`) VALUES
(1, 1, 'schematic', 'TACOMA13-SKL_Schematic.pdf', 'PDF', NULL, NULL, 1, NULL, 'Полная схема платы BA92-15596B', NULL, '2025-11-03 18:50:27'),
(2, 1, 'boardview', 'BA41-02466A.cad', 'CAD', NULL, NULL, 1, NULL, 'Boardview под OpenBoardView/Allegro', NULL, '2025-11-03 18:50:27');

-- --------------------------------------------------------

--
-- Структура таблицы `document_tags`
--

CREATE TABLE `document_tags` (
  `document_id` int NOT NULL,
  `tag_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `notes`
--

CREATE TABLE `notes` (
  `id` int NOT NULL,
  `device_id` int NOT NULL,
  `user_name` varchar(64) DEFAULT NULL,
  `note` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `tags`
--

CREATE TABLE `tags` (
  `id` int NOT NULL,
  `tag_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `components`
--
ALTER TABLE `components`
  ADD PRIMARY KEY (`id`),
  ADD KEY `device_id` (`device_id`);

--
-- Индексы таблицы `crosslinks`
--
ALTER TABLE `crosslinks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `from_device_id` (`from_device_id`),
  ADD KEY `to_device_id` (`to_device_id`);

--
-- Индексы таблицы `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uniq_board` (`brand`,`board_code`);

--
-- Индексы таблицы `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `device_id` (`device_id`);

--
-- Индексы таблицы `document_tags`
--
ALTER TABLE `document_tags`
  ADD PRIMARY KEY (`document_id`,`tag_id`),
  ADD KEY `tag_id` (`tag_id`);

--
-- Индексы таблицы `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `device_id` (`device_id`);

--
-- Индексы таблицы `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tag_name` (`tag_name`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `components`
--
ALTER TABLE `components`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `crosslinks`
--
ALTER TABLE `crosslinks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `devices`
--
ALTER TABLE `devices`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `components`
--
ALTER TABLE `components`
  ADD CONSTRAINT `components_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `crosslinks`
--
ALTER TABLE `crosslinks`
  ADD CONSTRAINT `crosslinks_ibfk_1` FOREIGN KEY (`from_device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `crosslinks_ibfk_2` FOREIGN KEY (`to_device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `document_tags`
--
ALTER TABLE `document_tags`
  ADD CONSTRAINT `document_tags_ibfk_1` FOREIGN KEY (`document_id`) REFERENCES `documents` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `document_tags_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
