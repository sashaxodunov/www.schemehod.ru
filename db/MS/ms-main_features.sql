

CREATE TABLE IF NOT EXISTS `main_features` (
  `main_id` bigint NOT NULL,
  `feature_id` bigint NOT NULL,
  PRIMARY KEY (`main_id`,`feature_id`),
  KEY `idx_main_features_feature_id` (`feature_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `main_features`
--

INSERT INTO `main_features` 
(`main_id`, `feature_id`) 
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
(4, 9),
(4, 10),
(4, 11),
(4, 3),
(4, 7);
*/