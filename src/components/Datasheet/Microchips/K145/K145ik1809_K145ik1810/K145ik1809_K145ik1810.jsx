import './K145ik1809_K145ik1810.scss'

export default () => {
  const title = 'МикросхемS К145 ИК1809 и К145 ИК1810'

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="ruMC">
            <p className="ruMC--text">
              Микросхемы К145ИК1809 и К145ИК1810 совместно выполняют функции
              центрального процессора микро-ЭВМ индивидуального пользования:
            </p>

            <ul className="ruMC--list">
              <li className="ruMC--list__item">
                К145ИК1809 - управляющий процессор;
              </li>
              <li className="ruMC--list__item">
                К145ИК1810 - сервисный процессор
              </li>
            </ul>

            <p className="ruMC--text">
              Микросхема К145ИК1810 выполняет опрос клавиатуры и стробирование
              разрядов и сегментов индикатора пультового отладочного терминала,
              а также вырабатывает младшие разряды адреса и четыре строба записи
              для внешних устройств.
            </p>

            <p className="ruMC--text">
              Условное графическое обозначение микросхемы К145ИК1809 показано на
              рис.1, К145ИК1810 - на рис.2, назначение выводов дано в таблице 1
              и 2 соответственно. Типовая схема включения обоих микросхем в
              процессоре микро-ЭВМ приведена на рис.3, временные диаграммы
              работы процессора - на рис.4.
            </p>
            <p className="ruMC--text">
              Временные диаграммы сигналов стробирования клавиатуры и индикатора
              показаны на рис.5, диаграммы сигналов записи и стирания в ППЗУ
              типа
              <a
                className="ruMC--link"
                href="@/pages/Datasheet/microchips/ruMC/K1601/k1601pp1.jsx"
              >
                {/*FIXME: нет материала на странице*/}
                К1601РР1
              </a>
              - на рис.5.
            </p>
            <p className="ruMC--text">
              Распределение поля памяти процессора показано на рис.6. Система
              команд процессора приведена в таблице 2.
            </p>

            <div className="ruMC--img__box--2">
              <div className="ruMC--img__box1">
                <img
                  className="ruMC--img"
                  src="/images/Datasheet/Microchips/ruMC/K145/K145IK1809/pug.1.png"
                  alt=""
                />
                <div className="ruMC--img__text">
                  Рис. 1. Условное графическое обозначение К145ИК1809.
                </div>
              </div>
              <div className="ruMC--img__box2">
                <img
                  className="ruMC--img"
                  src="/images/Datasheet/Microchips/ruMC/K145/K145IK1810/pug.1.png"
                  alt=""
                />
                <div className="ruMC--img__text">
                  Рис. 2. Условное графическое обозначение К145ИК1810.
                </div>
              </div>
            </div>
            <div className="ruMC--img__box width-size-70">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/K145/K145IK1809/pug.1_1.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 3. Типовая схема включения К145ИК1809 и К145ИК1810.
              </div>
            </div>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 1</caption>
              <th className="ruMC--table__title">Вывод</th>
              <th className="ruMC--table__title">Обозначение</th>
              <th className="ruMC--table__title">Тип вывода</th>
              <th className="ruMC--table__title" colSpan={3}>
                Функциональное назначение вывода
              </th>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">1 - 4</td>
                <td className="ruMC--table__cell">
                  U<sub>C3</sub>, U<sub>C1</sub>, U<sub>C2</sub>, U<sub>C4</sub>
                </td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">
                  Фазы тактовых сигналов импульсного питания динамических узлов
                  микросхемы
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">7, 8</td>
                <td className="ruMC--table__cell">D0. 1, D0. 2</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">Информация</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">10, 11</td>
                <td className="ruMC--table__cell">D0. 4, D0. 9</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">Информация</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">13, 14</td>
                <td className="ruMC--table__cell">INR2, INR1</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">Прерывание</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">16</td>
                <td className="ruMC--table__cell">DE</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Блокировка</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">19</td>
                <td className="ruMC--table__cell">IRG</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Внешний регистр связи</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">21</td>
                <td className="ruMC--table__cell">ORG</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Внешний регистр связи</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">24</td>
                <td className="ruMC--table__cell">GND</td>
                <td className="ruMC--table__cell">Питание</td>
                <td className="ruMC--table__cell">Общий</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">27</td>
                <td className="ruMC--table__cell">EWR</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">Разрешение записи</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">28 - 31</td>
                <td className="ruMC--table__cell">
                  D1. 8, D1. 4, D1. 2, D1. 1,
                </td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">Информация</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">32 - 47</td>
                <td className="ruMC--table__cell">
                  A5-A2, A9-A6, A13-A10, A17-A14
                </td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">Адресные сигналы</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">48</td>
                <td className="ruMC--table__cell">
                  U<sub>CC</sub>
                </td>
                <td className="ruMC--table__cell">Питание</td>
                <td className="ruMC--table__cell">Напряжение питания - 27В</td>
              </tr>
            </table>
            <div className="ruMC--table__note">
              <span className="ruMC--table__note--title">Примечание.</span>
              Выводы 5, 6, 9, 12, 15, 17, 18, 20, 22, 23, 25, 26 не
              задействованы.
            </div>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 2</caption>
              <th className="ruMC--table__title">Вывод</th>
              <th className="ruMC--table__title">Обозначение</th>
              <th className="ruMC--table__title">Тип вывода</th>
              <th className="ruMC--table__title" colSpan={3}>
                Функциональное назначение вывода
              </th>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">1 - 4</td>
                <td className="ruMC--table__cell">
                  U<sub>C3</sub>, U<sub>C1</sub>, U<sub>C2</sub>, U<sub>C4</sub>
                </td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">
                  Фазы тактовых сигналов импульсного питания динамических узлов
                  микросхемы
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">5</td>
                <td className="ruMC--table__cell">ORG</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Внешний регистр связи</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">6</td>
                <td className="ruMC--table__cell">IRG</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Внешний регистр связи</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">13, 14</td>
                <td className="ruMC--table__cell">D1, D2</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">Клавиатура</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">16, 17, 23, 27</td>
                <td className="ruMC--table__cell">D4, D8, A1, A0</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">Адрес</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">24</td>
                <td className="ruMC--table__cell">GND</td>
                <td className="ruMC--table__cell">Питание</td>
                <td className="ruMC--table__cell">Общий</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">29</td>
                <td className="ruMC--table__cell">CWR1</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Строб записи</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">31</td>
                <td className="ruMC--table__cell">CWR2</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Строб записи + 1 такт</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">32-35, 37-39</td>
                <td className="ruMC--table__cell">
                  COS3, COS2, COS1, COS4, COS6, COS5, COS7
                </td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">
                  Управление сегментами индикатора
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">40 - 43</td>
                <td className="ruMC--table__cell">COR4-COR1</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">
                  Управление разрядами индикатора и опрос клавиатуры
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">44</td>
                <td className="ruMC--table__cell">МК</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Маскирование индикатора</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">45</td>
                <td className="ruMC--table__cell">SRM</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">
                  Стирание содержимого памяти
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">46</td>
                <td className="ruMC--table__cell">WRM</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Запись в память</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">48</td>
                <td className="ruMC--table__cell">
                  U<sub>CC</sub>
                </td>
                <td className="ruMC--table__cell">Питание</td>
                <td className="ruMC--table__cell">Напряжение питания - 27В</td>
              </tr>
            </table>
            <div className="ruMC--table__note">
              <span className="ruMC--table__note--title">Примечание.</span>
              Выводы 7-12, 15, 18-22, 25, 26, 28, 30, 36, 47 не задействованы.
            </div>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 3</caption>

              <thead>
                <tr>
                  <th className="ruMC--table__title" colSpan={2}>
                    Команда процессора
                  </th>
                  <th className="ruMC--table__title" colSpan={4}>
                    Результат<br></br> выполнения<br></br> команды в<br></br>
                    регистре<br></br> состояния
                  </th>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Символ команды
                  </th>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Время исполнения команды, мс
                  </th>
                </tr>
                <tr>
                  <th className="ruMC--table__title">Код</th>
                  <th className="ruMC--table__title">Мнемоника</th>
                  <th className="ruMC--table__title">C</th>
                  <th className="ruMC--table__title">V</th>
                  <th className="ruMC--table__title">Z</th>
                  <th className="ruMC--table__title">N</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ruMC--table__line table__cubTitle">
                  <td className="ruMC--table__cell" colSpan={8}>
                    Одноадресные команды:
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">10dD</td>
                  <td className="ruMC--table__cell">JMP</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    (dst) &rArr; (PC). <br></br> Переход на подпрограмму или
                    возврат из подпрограммы
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">11dD</td>
                  <td className="ruMC--table__cell">CLR</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">
                    (0) &rArr; (dst). <br></br> Очистка
                  </td>
                  <td className="ruMC--table__cell">7</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">12dD</td>
                  <td className="ruMC--table__cell">INC</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (dst) + 1 &rArr; (dst). <br></br> Приращение
                  </td>
                  <td className="ruMC--table__cell">7</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">13dD</td>
                  <td className="ruMC--table__cell">DEC</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (dst) - 1 &rArr; (dst). <br></br> Уменьшение
                  </td>
                  <td className="ruMC--table__cell">7</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">14dD</td>
                  <td className="ruMC--table__cell">ADC</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (dst) + (с) &rArr; (dst). <br></br> Прибавить перенос
                  </td>
                  <td className="ruMC--table__cell">7</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">15dD</td>
                  <td className="ruMC--table__cell">SBC</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (dst) - (с) &rArr; (dst). <br></br> Вычесть перенос
                  </td>
                  <td className="ruMC--table__cell">7</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">16dD</td>
                  <td className="ruMC--table__cell">ROL</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    Вычесть перенос. (dst). <br></br> Циклический двоичный сдвиг
                    влево, включая (с)
                  </td>
                  <td className="ruMC--table__cell">7</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">17dD</td>
                  <td className="ruMC--table__cell">LSL</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    Логический двоичный сдвиг влево, включая (с)
                  </td>
                  <td className="ruMC--table__cell">7</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">18dD</td>
                  <td className="ruMC--table__cell">COM</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    <span className="ruMC--table__not">(dst)</span> &rArr;
                    (dst). <br></br> Инверсия
                  </td>
                  <td className="ruMC--table__cell">11</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">19dD</td>
                  <td className="ruMC--table__cell">HRR</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    Шестнадцатеричный циклический сдвиг вправо, включая R
                    <sub>
                      доп<sub>2</sub>
                    </sub>
                  </td>
                  <td className="ruMC--table__cell">11</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">1BdD</td>
                  <td className="ruMC--table__cell">HAR</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    Шестнадцатеричный арифметический сдвиг вправо, включая R
                    <sub>
                      доп<sub>2</sub>
                    </sub>
                  </td>
                  <td className="ruMC--table__cell">11</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">1AdD</td>
                  <td className="ruMC--table__cell">HRL</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    Шестнадцатеричный циклический сдвиг влево, включая R
                    <sub>
                      доп<sub>2</sub>
                    </sub>
                  </td>
                  <td className="ruMC--table__cell">11</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">1CdD</td>
                  <td className="ruMC--table__cell">HLL</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    Шестнадцатеричный логический сдвиг влево, включая R
                    <sub>
                      доп<sub>2</sub>
                    </sub>
                  </td>
                  <td className="ruMC--table__cell">11</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">1DdD</td>
                  <td className="ruMC--table__cell">SW</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (R
                    <sub>
                      доп<sub>2</sub>
                    </sub>
                    ) &hArr; (dst)
                  </td>
                  <td className="ruMC--table__cell">11</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">1EdD</td>
                  <td className="ruMC--table__cell">CLM</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">
                    Обмен<br></br> 0 &rArr; (ППЗУ)
                  </td>
                  <td className="ruMC--table__cell">110</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">1FdD</td>
                  <td className="ruMC--table__cell">CLL</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">
                    Общее стирание<br></br> 0 &rArr; [dst (ППЗУ)]. <br></br>
                    Стирание строки
                  </td>
                  <td className="ruMC--table__cell">110</td>
                </tr>
                <tr className="ruMC--table__line table__cubTitle">
                  <td className="ruMC--table__cell" colSpan={8}>
                    Двухадресные команды:
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">2sSdD</td>
                  <td className="ruMC--table__cell">JSR</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    (PC) &rArr; (dst). <br></br> (src) &rArr; (PC). <br></br>
                    Переход к подпрограмме
                  </td>
                  <td className="ruMC--table__cell">8</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">3sSdD</td>
                  <td className="ruMC--table__cell">MOV</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (srs) &rArr; (dst). <br></br>
                    Пересылка
                  </td>
                  <td className="ruMC--table__cell">8</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">4sSdD</td>
                  <td className="ruMC--table__cell">ADD</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (srs) + (dst) &rArr; (dst). <br></br>
                    Сложение
                  </td>
                  <td className="ruMC--table__cell">8</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">5sSdD</td>
                  <td className="ruMC--table__cell">SUB</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (dst) - (srs) &rArr; (dst). <br></br>
                    Вычитание
                  </td>
                  <td className="ruMC--table__cell">8</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">6sSdD</td>
                  <td className="ruMC--table__cell">CMP</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (dst) - (srs). <br></br>
                    Сравнение
                  </td>
                  <td className="ruMC--table__cell">9</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">7sSdD</td>
                  <td className="ruMC--table__cell">DADC</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (dst) + (srs) + (с) &rArr; (dst). <br></br>
                    Десятичное сложение
                  </td>
                  <td className="ruMC--table__cell">9</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">8sSdD</td>
                  <td className="ruMC--table__cell">SUBC</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (dst) - (srs) + (с) &rArr; (dst). <br></br>
                    Десятичное вычитание
                  </td>
                  <td className="ruMC--table__cell">13</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">9sSdD</td>
                  <td className="ruMC--table__cell">DIV</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (R
                    <sub>
                      доп<sub>1</sub>
                    </sub>
                    , dst ): (srs) &hArr; (dst) <br></br> Остаток &hArr;(R
                    <sub>
                      доп<sub>1</sub>
                    </sub>
                    ). Десятичное деление
                  </td>
                  <td className="ruMC--table__cell">38-74</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">AsSdD</td>
                  <td className="ruMC--table__cell">MULA</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (srs) &middot; (dst) &hArr; (R
                    <sub>
                      доп<sub>1</sub>
                    </sub>
                    , dst ) <br></br>Десятичное умножение
                  </td>
                  <td className="ruMC--table__cell">42-78</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">BsSdD</td>
                  <td className="ruMC--table__cell">MULA</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    [(src) &middot; (dst) + R
                    <sub>
                      доп<sub>1</sub>
                    </sub>
                    ] &hArr; (R
                    <sub>
                      доп<sub>1</sub>
                    </sub>
                    , dst ) <br></br>Десятичное умножение со сложение
                  </td>
                  <td className="ruMC--table__cell">42-48</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">CsSdD</td>
                  <td className="ruMC--table__cell">BIC</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    [(srs) &and; (dst)] &rArr; (dst). <br></br>
                    Очистка разрядов
                  </td>
                  <td className="ruMC--table__cell">13</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">DsSdD</td>
                  <td className="ruMC--table__cell">BIS</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    [(srs) &or; (dst)] &rArr; (dst). <br></br>
                    Логическое сложение
                  </td>
                  <td className="ruMC--table__cell">13</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">EsSdD</td>
                  <td className="ruMC--table__cell">BIT</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    [(srs) &and; (dst)] &rArr; (dst). <br></br>
                    Проверка разрядов
                  </td>
                  <td className="ruMC--table__cell">12</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">FsSdD</td>
                  <td className="ruMC--table__cell">MOVM</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (src) &rArr; [dst(ППЗУ)] <br></br>
                    Запись в ППЗУ
                  </td>
                  <td className="ruMC--table__cell">56</td>
                </tr>
                <tr className="ruMC--table__line table__cubTitle">
                  <td className="ruMC--table__cell" colSpan={8}>
                    Команды условных переходов:
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">01XX</td>
                  <td className="ruMC--table__cell">BCC</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    XX &rArr; (PC), иначе, PC : = (PC) + 1. <br></br>
                    Переход, если С=0
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">02XX</td>
                  <td className="ruMC--table__cell">BCS</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    XX &rArr; (PC), иначе, PC : = (PC) + 1. <br></br>
                    Переход, если С=1
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">03XX</td>
                  <td className="ruMC--table__cell">BVC</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    XX &rArr; (PC), иначе, PC : = (PC) + 1. <br></br>
                    Переход, если V=0
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">04XX</td>
                  <td className="ruMC--table__cell">BVS</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    XX &rArr; (PC), иначе, PC : = (PC) + 1. <br></br>
                    Переход, если V=1
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">05XX</td>
                  <td className="ruMC--table__cell">BEQ</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    XX &rArr; (PC), иначе, PC : = (PC) + 1. <br></br>
                    Переход, если Z=0
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">06XX</td>
                  <td className="ruMC--table__cell">BNE</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    XX &rArr; (PC), иначе, PC : = (PC) + 1. <br></br>
                    Переход, если Z=1
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">07XX</td>
                  <td className="ruMC--table__cell">BPL</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    XX &rArr; (PC), иначе, PC : = (PC) + 1. <br></br>
                    Переход, если N=0
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">08XX</td>
                  <td className="ruMC--table__cell">BMI</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    XX &rArr; (PC), иначе, PC : = (PC) + 1. <br></br>
                    Переход, если N=1
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">09XX</td>
                  <td className="ruMC--table__cell">BR</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    XX &rArr; (PC). <br></br>
                    Безусловный переход
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr className="ruMC--table__line table__cubTitle">
                  <td className="ruMC--table__cell" colSpan={8}>
                    Специальные команды:
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">000X</td>
                  <td className="ruMC--table__cell">HALT</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    Стоп. <br></br>
                    Останов процессора
                  </td>
                  <td className="ruMC--table__cell"></td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">001X</td>
                  <td className="ruMC--table__cell">BPT</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (РКС) &dArr; (РС) &dArr; (1) &rArr; (РС), (3) &rArr; (РКС).
                    <br></br>
                    Командное прерывание для отладки
                  </td>
                  <td className="ruMC--table__cell">20</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">002X</td>
                  <td className="ruMC--table__cell">WALT</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    Ожидание <br></br>
                    Процессор ждет внешних прерываний
                  </td>
                  <td className="ruMC--table__cell">6</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">003X</td>
                  <td className="ruMC--table__cell">INIT</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (РКС) &dArr;, (РС) &dArr;, (5) &rArr; (РС), (7) &rArr;
                    (РКС).
                    <br></br>
                    Внешние или командное прерывание
                  </td>
                  <td className="ruMC--table__cell">20</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">004X</td>
                  <td className="ruMC--table__cell">RT1</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    &dArr; (РС), &dArr; (РКС), <br></br>
                    Возврат после прерывания
                  </td>
                  <td className="ruMC--table__cell">16</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">005X</td>
                  <td className="ruMC--table__cell">ENT</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (РКС) &dArr;, (РС) &dArr;, (9) &rArr; (РС), (B) &rArr;
                    (РКС).
                    <br></br>
                    Командное прерывание
                  </td>
                  <td className="ruMC--table__cell">20</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">006X</td>
                  <td className="ruMC--table__cell">SET</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">
                    Установка признаков в регистре состояния
                  </td>
                  <td className="ruMC--table__cell">6</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">007X</td>
                  <td className="ruMC--table__cell">INT2</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    (РКС) &dArr;, (РС) &dArr;, (D) &rArr; (РС), (F) &rArr;
                    (РКС). <br></br>
                    Внешние или (командное) прерывание
                  </td>
                  <td className="ruMC--table__cell">6</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">008X</td>
                  <td className="ruMC--table__cell">RTT</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">*</td>
                  <td className="ruMC--table__cell">
                    &uArr; (PC), &uArr; (РКС). <br></br>
                    Возврат после прерывания. Выполнение одной команды основной
                    программы переход ВРТ
                  </td>
                  <td className="ruMC--table__cell">17</td>
                </tr>
              </tbody>
            </table>
            <div className="ruMC--table__note">
              <span className="ruMC--table__note--title">Примечание.</span>
              (src) - содержание ячейки источника; (dst) - содержание ячейки
              приемника; sS, dD - адрес ячеек источника и приемника; XX - восемь
              младших двоичных разрядов адреса; X - разряды не задействованы в
              командах; &dArr; - занесение в стек; &uArr; - извлечение из стека;
              * - бит может изменить свое состояние в процессе выполнения
              команды; 0 и 1 - бит может устанавливаться в соответствии с низким
              или высоким уровнем напряжения; С - перенос; &laquo;&mdash;&raquo;
              - бит не изменяет своего состояния; РС - программный счетчик; РКС
              - регистр состояния процессора; R
              <sub>
                доп<sub>1</sub>
              </sub>
              - дополнительный 16-разрядный регистр для выполнения операций
              умножения и деления, расположенный в регистре связи; R
              <sub>
                доп<sub>1</sub>
              </sub>
              - дополнительный 4-разрядный регистр.
            </div>

            <div className="ruMC--img__box width-size-70">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/K145/K145IK1809/pug.3.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 4. Временные диаграммы работы процессора на базе К145ИК1809
                и К145ИК1810.
              </div>
            </div>
            <div className="ruMC--img__box width-size-70">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/K145/K145IK1809/pug.4.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 5. Временные диаграммы сигналов стробирования клавиатуры и
                индикатора.
              </div>
            </div>
            <div className="ruMC--img__box width-size-70">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/K145/K145IK1809/pug.5.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 6. Временные диаграммы сигналов записи и стирания в ППЗУ.
              </div>
            </div>

            <p className="ruMC--text">
              В центральном процессоре используется три типа команд,
              безадресные, одно- и двух-адресные. В безадресных командах
              содержится только код операции. Формат одноадресной команды
              показан на рис. 7а, двух-адресное - на рис.7б.
            </p>

            <div className="ruMC--img__box--2">
              <div className="ruMC--img__box1">
                <img
                  className="ruMC--img"
                  src="/images/Datasheet/Microchips/ruMC/K145/K145IK1809/pug.6.png"
                  alt=""
                />
                <div className="ruMC--img__text">
                  Рис. 7. Распределение поля памяти процессора на базе
                  К145ИК1809 и К145ИК1810.
                </div>
              </div>
              <div className="ruMC--img__box2">
                <img
                  className="ruMC--img"
                  src="/images/Datasheet/Microchips/ruMC/K145/K145IK1809/pug.7.png"
                  alt=""
                />
                <div className="ruMC--img__text">
                  Рис. 7. Форматы одноадресной (а)и двух-адресной (б) команд
                  процессора.
                </div>
              </div>
            </div>
            <p className="ruMC--text">Содержание информации в разрядах:</p>

            <ul className="ruMC--list">
              <li className="ruMC--list__item">на рис.7,а;</li>
              <ul className="ruMC--list-2">
                <li className="ruMC--list__item-2">
                  15-8 - код операции (OPR);
                </li>
                <li className="ruMC--list__item-2">
                  5-0 - адресное поле операнда приемника;
                </li>
                <li className="ruMC--list__item-2">
                  5,4 - метод адресации (d);
                </li>
                <li className="ruMC--list__item-2">
                  3 - признак прямой или косвенной адресации (d');
                </li>
                <li className="ruMC--list__item-2">
                  2-0 - номер регистра (D);
                </li>
                <li className="ruMC--list__item-2">7,6 - не используются;</li>
              </ul>
              <li className="ruMC--list__item">на рис. 2.17,б:</li>
              <ul className="ruMC--list-2">
                <li className="ruMC--list__item-2">
                  15-12 - код операции (OPR);
                </li>
                <li className="ruMC--list__item-2">
                  11-0 - адресное поле операндов источника и приемника;
                </li>
                <li className="ruMC--list__item-2">
                  11,10 - метод адресации для операнда источника (S);
                </li>
                <li className="ruMC--list__item-2">
                  9,8 - метод адресации для операнда-приемника (d);
                </li>
                <li className="ruMC--list__item-2">
                  7 - признак прямой и косвенной адресации для
                  операнда-источника (S');
                </li>
                <li className="ruMC--list__item-2">
                  3 - признак прямой и косвенной адресации для
                  операнда-приемника (d');
                </li>
                <li className="ruMC--list__item-2">
                  6-4 - номер регистра для операнда-источника (S);
                </li>
                <li className="ruMC--list__item-2">
                  2-0 - номер регистра для операнда-приемника (D).
                </li>
              </ul>
            </ul>
            <p className="ruMC--text">
              Используется 12 методов адресации (см. таблица 4). Признаки
              косвенности для соответствующих методов адресации показаны в
              таблице 5.
            </p>
            <p className="ruMC--text">
              Связь микросхем выполнена через последовательный однобитовый канал
              связи
            </p>
            <p className="ruMC--text">
              После включения источника питания или подачи сигнала "Сброс"
              процессор входит в режим работы пультового отладочного терминала.
              Микросхема К145ИК1809 готова к выполнению команд управления,
              приведенных в таблице 6.
            </p>
            <p className="ruMC--text">
              При нажатии клавиши "Пуск" или подаче в канал связи кода 0000
              <sub>2</sub> в момент времени Д11Е1 центральный процессор
              переводится в режим работы по программе с начального адреса или с
              адреса, введенного с клавиатуры пультового терминала. Имеется
              возможность прерывания работы процессора по программе.
            </p>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 4</caption>

              <thead>
                <tr>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Метод адресации
                  </th>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Обозначение
                  </th>
                  <th className="ruMC--table__title" colSpan={2}>
                    Код метода шестнадцатеричный
                  </th>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Описание способа обращения к операнду
                  </th>
                </tr>
                <tr>
                  <th className="ruMC--table__title">для источника</th>
                  <th className="ruMC--table__title">для приемника</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ruMC--table__line table__cubTitle">
                  <td className="ruMC--table__cell">Прямой</td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Регистровый
                  </td>
                  <td className="ruMC--table__cell">R</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адресом операнда является номер одного из выбранных РОН
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Автоинкрементный
                  </td>
                  <td className="ruMC--table__cell">(R)+</td>
                  <td className="ruMC--table__cell">4</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адресом операнда является содержимое одного из выбранных
                    РОН, которое автоматически наращивается на +1, создавая
                    возможность перебора последовательности ячеек по возрастанию
                    адресов
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Автодекрементный
                  </td>
                  <td className="ruMC--table__cell">-(R)</td>
                  <td className="ruMC--table__cell">8</td>
                  <td className="ruMC--table__cell">2</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адресом операнда является содержимое одного из выбранных
                    РОН, которое автоматически уменьшается на -1, создавая
                    возможность перебора послеовательности ячеек по убыванию
                    адресов
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Индексный
                  </td>
                  <td className="ruMC--table__cell">A(R)</td>
                  <td className="ruMC--table__cell">C</td>
                  <td className="ruMC--table__cell">3</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адрес операнда определяется как сумма содержимого выбранного
                    РОН с индексным словом, расположенным в ячейке памяти сразу
                    же за командным словом
                  </td>
                </tr>
                <tr className="ruMC--table__line table__cubTitle">
                  <td className="ruMC--table__cell">Косвенный</td>
                  <td className="ruMC--table__cell">@</td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Косвенно-регистровый
                  </td>
                  <td className="ruMC--table__cell">@R</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адрес операнда является содержимое одного из выбранных РОН
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Косвенно-автоинкрементный
                  </td>
                  <td className="ruMC--table__cell">@(R)+</td>
                  <td className="ruMC--table__cell">4</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адрес операнда определяется косвенно, через дополнительный
                    адрес, указанный в выбранном РОН. При этом адрес адреса
                    операнда автоматически наращивается на +1, создавая
                    возможность перебора последовательности адресов операнда по
                    возрастанию
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Косвенно-автодекрементный
                  </td>
                  <td className="ruMC--table__cell">@-(R)</td>
                  <td className="ruMC--table__cell">8</td>
                  <td className="ruMC--table__cell">2</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адрес операнда определяется косвенно, через дополнительный
                    адрес, указанный в выбранном РОН. Адрес адреса автоматически
                    уменьшается на -1, создавая возможность перебора
                    последовательности адресов операндов по убыванию
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Косвенно-индексный
                  </td>
                  <td className="ruMC--table__cell">@A(R)</td>
                  <td className="ruMC--table__cell">C</td>
                  <td className="ruMC--table__cell">3</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адрес операнда определяется косвенно, по адресу адреса
                    операнда, который получается суммированием содержимого
                    выбранного РОН с индексным словом, расположенным в ячейке
                    памяти, следующей за командным словом
                  </td>
                </tr>
                <tr className="ruMC--table__line table__cubTitle">
                  <td className="ruMC--table__cell">Специальный</td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Непосредственный
                  </td>
                  <td className="ruMC--table__cell">#A</td>
                  <td className="ruMC--table__cell">4</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Операнд находится в следующей за командным словом ячейке
                    памяти. После выполнения операции содержимое счетчика команд
                    увеличивается на +1
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Абсолютный
                  </td>
                  <td className="ruMC--table__cell">@#A</td>
                  <td className="ruMC--table__cell">4</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Полный адрес операнда находится в ячейке памяти,
                    расположенной сразу же за командным словом. Поле выполнения
                    команды содержимое счетчика команд увеличивается на +1
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Относительный
                  </td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">C</td>
                  <td className="ruMC--table__cell">3</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адрес операнда определяется как сумма содержимого счетчика
                    команд и содержимого ячейки памяти, расположенной сразу же
                    за командным словом{' '}
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Косвенно-относительный
                  </td>
                  <td className="ruMC--table__cell">@A</td>
                  <td className="ruMC--table__cell">C</td>
                  <td className="ruMC--table__cell">3</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Адрес операнда определяется косвенно, через дополнительный
                    адрес, равный сумме содержимого счетчика команд и ячейки
                    памяти, следующей за командным словом
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 5</caption>

              <thead>
                <tr>
                  <th className="ruMC--table__title" rowSpan={3}>
                    Обозначение метода адресации
                  </th>
                  <th className="ruMC--table__title" colSpan={6}>
                    Состояния разрядов в слове команды
                  </th>
                </tr>
                <tr>
                  <th className="ruMC--table__title" colSpan={3}>
                    источника
                  </th>
                  <th className="ruMC--table__title" colSpan={3}>
                    приемника
                  </th>
                </tr>
                <tr>
                  <th className="ruMC--table__title">11</th>
                  <th className="ruMC--table__title">10</th>
                  <th className="ruMC--table__title">7</th>
                  <th className="ruMC--table__title">9</th>
                  <th className="ruMC--table__title">8</th>
                  <th className="ruMC--table__title">3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">@ R</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">@ (R) +</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">@ - (R)</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">@ A(R)</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">@ # R</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">@ A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                </tr>
              </tbody>
            </table>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 6</caption>

              <thead>
                <tr>
                  <th className="ruMC--table__title">Символ клавиши</th>
                  <th className="ruMC--table__title">
                    Функциональное назначение
                  </th>
                  <th className="ruMC--table__title" colSpan={2}>
                    Коммутируемые выходы/входы микросхемы
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">Ш</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Пошаговый пуск программы
                  </td>
                  <td className="ruMC--table__cell">
                    <span className="ruMC--table__no">COR3</span>
                  </td>
                  <td className="ruMC--table__cell">D1</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">П</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Пуск программы
                  </td>
                  <td className="ruMC--table__cell">
                    <span className="ruMC--table__no">COR4</span>
                  </td>
                  <td className="ruMC--table__cell">D8 &and; D4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">Точка</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Переслать содержимое РгМ в память по адресу (РС)
                    (РгМ)&rarr;(ОЗУ); (РС) := (РС)+1
                  </td>
                  <td className="ruMC--table__cell">
                    <span className="ruMC--table__no">COR1</span>
                  </td>
                  <td className="ruMC--table__cell">D1</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Запятая
                  </td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Переслать содержимое РгМ в регистр кода состояния (РКС)
                  </td>
                  <td className="ruMC--table__cell">
                    <span className="ruMC--table__no">COR1</span>
                  </td>
                  <td className="ruMC--table__cell">D8 &and; D4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Двоеточие
                  </td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Переслать содержимое РгМ в программный счетчик (РС)
                  </td>
                  <td className="ruMC--table__cell">
                    <span className="ruMC--table__no">COR3</span>
                  </td>
                  <td className="ruMC--table__cell">D8 &and; D4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">
                    Косая линия
                  </td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Вызвать содержимое памяти по адресу (РС) (ОЗУ)&rarr; (РгМ){' '}
                    <br></br> (РС) : (РС)+1
                  </td>
                  <td className="ruMC--table__cell">
                    <span className="ruMC--table__no">COR2</span>
                  </td>
                  <td className="ruMC--table__cell">D8 &and; D4</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell ruMC--table__left">Тире</td>
                  <td className="ruMC--table__cell ruMC--table__left">
                    Вызвать содержимое памяти по адресу (РС) (ОЗУ)&rarr; (РгМ){' '}
                    <br></br> (РС) : (РС)-1
                  </td>
                  <td className="ruMC--table__cell">
                    <span className="ruMC--table__no">COR4</span>
                  </td>
                  <td className="ruMC--table__cell">D1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
