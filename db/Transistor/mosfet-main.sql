

CREATE TABLE IF NOT EXISTS `main` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id компонента',
  `part_number` varchar(64) NOT NULL COMMENT 'Наименование компонента',
  `type` enum('BJT','MOSFET','IGBT','JFET','Darlington','UJT','Other') NOT NULL COMMENT 'Тип компонента',
  `polarity` enum('NPN','PNP','N','P','N-channel','P-channel','NA') NOT NULL DEFAULT 'NA' COMMENT 'Полярность компонента',
  `monting` enum('THT','SMD','Other','') NOT NULL COMMENT 'Вид монтажа',
  `package` varchar(128) NOT NULL COMMENT 'Корпус компонента',
  `source_url` varchar(1024) DEFAULT NULL COMMENT 'Ссылка на PDF',
  `file_path` varchar(512) DEFAULT NULL COMMENT 'Ссылка на сервер',
  `description` varchar(3000) DEFAULT NULL COMMENT 'Описание компонента',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Транзисторы';

/**
* type     - (BJT, MOSFET, IGBT, JFET, Darlington, UJT, Other)
* polarity - (NPN, PNP, N, P, N-channel, P-channel, NA)
* monting  - (THT, SMD, Other)
*/
INSERT INTO `main` 
(`id`, `part_number`, `type`, `polarity`, `monting`, `package`, `source_url`, `file_path`, `description_en`, `description_ru`) 
VALUES 


/*
(1, 'IRFP064', 'MOSFET', 'N-channel', 'THT', 'TO-247AC', NULL, NULL, 'Third generation Power MOSFETs from Vishay provide the\r\ndesigner with the best combination of fast switching,\r\nruggedized device design, low on-resistance and\r\ncost-effectiveness.\r\nThe TO-247AC package is preferred for\r\ncommercial-industrial applications where higher power\r\nlevels preclude the use of TO-220AB devices. The\r\nTO-247AC is similar but superior to the earlier TO-218\r\npackage because its isolated mounting hole. It also provides\r\ngreater creepage distances between pins to meet the\r\nrequirements of most safety specifications.');
(4, 'IRFP064N', 'MOSFET', 'N-channel', 'THT', 'TO-247', 'https://disk.yandex.ru/i/HmD01rAPsgxEGg', NULL, NULL, NULL);
*/



