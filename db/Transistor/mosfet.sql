



--
-- Ограничения внешнего ключа таблицы `main_features`
--
ALTER TABLE `main_features`
  ADD CONSTRAINT `fk_main_features_feature` FOREIGN KEY (`feature_id`) REFERENCES `features` (`id_feature`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_main_features_main` FOREIGN KEY (`main_id`) REFERENCES `main` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;



--
-- Ограничения внешнего ключа таблицы `main_parameters`
--
ALTER TABLE `main_parameters`
  ADD CONSTRAINT `fk_main_parameters_main` FOREIGN KEY (`main_id`) REFERENCES `main` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_main_parameters_parameter` FOREIGN KEY (`parameter_id`) REFERENCES `parameters` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;