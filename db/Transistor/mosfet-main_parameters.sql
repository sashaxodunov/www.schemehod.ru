

CREATE TABLE IF NOT EXISTS `main_parameters` (
  `main_id` bigint NOT NULL COMMENT 'FK на main.id (компонент)',
  `parameter_id` bigint UNSIGNED NOT NULL,
  PRIMARY KEY (`main_id`,`parameter_id`),
  KEY `idx_main_parameters_parameter_id` (`parameter_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `main_parameters`
--

INSERT INTO `main_parameters` 
(`main_id`, `parameter_id`) 
VALUES

/*
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16);
(4, 17),
(4, 2),
(4, 18),
(4, 19),
(4, 20),
(4, 21),
(4, 22);
*/