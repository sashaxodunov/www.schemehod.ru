import './K145ik1801.scss'

export default () => {
  const title = 'Микросхема К145 ИК1801'

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="ruMC">
            <p className="ruMC--text">
              Микросхемы К145ИК1801 предназначена для управления обменом
              информацией между программируемым калькулятором типа "Электроника
              МК-54" и регистрами адресуемой памяти с произвольной выборкой.
            </p>
            <p className="ruMC--text">
              Микросхема обеспечивает обработку данных при обмене информацией по
              однобитовому каналу связи в режиме прямого доступа. Микросхема
              выпускается в бескорпусном исполнении.
            </p>

            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/К145/K145IK1801/pug.1.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 1. Условное графическое обозначение К145ИК1801
              </div>
            </div>

            <p className="ruMC--text">
              Условное графическое обозначение микросхемы приведено на рис. 1,
              название выводов - в таблице 1.
            </p>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 1</caption>
              <th className="ruMC--table__title">Вывод</th>
              <th className="ruMC--table__title">Обозначение</th>
              <th className="ruMC--table__title">Тип вывода</th>
              <th className="ruMC--table__title">
                Функциональное назначение вывода
              </th>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">1</td>
                <td className="ruMC--table__cell">А8</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адресный сигнал</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">2</td>
                <td className="ruMC--table__cell">
                  U<sub>CC</sub>
                </td>
                <td className="ruMC--table__cell">Питание</td>
                <td className="ruMC--table__cell">Напряжение питания - 15В</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">3 - 6</td>
                <td className="ruMC--table__cell">UC3, UC1, UC2, UC4</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">
                  Фазы тактового сигнала динамических узлов микросхемы
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">7</td>
                <td className="ruMC--table__cell">D0. 4</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Информация</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">8</td>
                <td className="ruMC--table__cell">BIT</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Дополнительная информация</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">9</td>
                <td className="ruMC--table__cell">SYN</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">
                  Сигнал стробирования микрокалькулятора D13
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">10 - 12</td>
                <td className="ruMC--table__cell">D0. 1, D0. 2, D0. 8</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">Информация</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">14</td>
                <td className="ruMC--table__cell">IRC</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Внешний регистр связи</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">15, 16</td>
                <td className="ruMC--table__cell">W11, W12</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">Клавиатура</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">17</td>
                <td className="ruMC--table__cell">ORG</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Внешний регистр связи</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">18</td>
                <td className="ruMC--table__cell">GND</td>
                <td className="ruMC--table__cell">Питание</td>
                <td className="ruMC--table__cell">Общий</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">19</td>
                <td className="ruMC--table__cell">RA</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">
                  Готовность к приему команд
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">20 - 23</td>
                <td className="ruMC--table__cell">D1, D2, D4, D8</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">
                  Информация, вывод данных на ППЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">24</td>
                <td className="ruMC--table__cell">CWR</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">
                  Стробирующий сигнал записи в ОЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">25</td>
                <td className="ruMC--table__cell">WRM</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Запись в ППЗУ</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">26 - 36</td>
                <td className="ruMC--table__cell">A3-A0, A7-A4, A11-A9</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">Адресные сигналы</td>
              </tr>
            </table>

            <div className="ruMC--table__note">
              <span className="ruMC--table__note--title">Примечание.</span>
              Вывод 13 не задействован.
            </div>

            <p className="ruMC--text">
              Типовая схема включения К145ИК1801 показана на рис. 2.
            </p>

            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/К145/K145IK1801/pug.2.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 2. Типовая схема включения К145ИК1801
              </div>
            </div>
            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/К145/K145IK1801/pug.3.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 3. Формат слова К145ИК1801
              </div>
            </div>
            <p className="ruMC--text">
              Управление микросхемой осуществляется при помощи двух клавиш и
              переключателя:
            </p>

            <ul className="ruMC--list">
              <li className="ruMC--list__item">
                установка адреса выбранного поля памяти и числа передаваемых
                байт информации - по содержимому регистра X (клавиша "УА" на
                рис. 2). Формат показан на рис. 3;
              </li>
              <li className="ruMC--list__item">
                выбор режима передачи данных или программы (переключатель в
                соответствующем положении);
              </li>
              <li className="ruMC--list__item">
                обмен данными между вычислительной системой и внешним ЗУ
                (клавиша "ОБ" на рис.2).
              </li>
            </ul>
            <p className="ruMC--text">
              Временная диаграмма сигналов обмена с внешним ЗУ приведена на рис.
              4.
            </p>
            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/К145/K145IK1801/pug.4.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 4. Временная диаграмма сигналов обмена между вычислительным
                устройством и внешним ЗУ.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
