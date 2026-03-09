import './K145ik1812.scss'

export default () => {
  const title = 'Микросхема К145 ИК1812'

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="ruMC">
            <p className="ruMC--text">
              Микросхемы К145ИК1812 имеет назначение сервисного устройства к
              микрокалькуляторам типа &laquo;Электроника Б3-34&raquo;,
              &laquo;Электроника МК-49&raquo; и др. (на базе микросхемы
              К145ИК13). Микросхема управляет узлами минитермопринтера при
              приеме информации от калькулятора. Тип печатающей головки
              2ФВ2.000-Т001 (Т002, Т003).
            </p>
            <p className="ruMC--text">
              Микросхема обеспечивает три режима печати, устанавливаемые
              соответствующими клавишами: печать содержимого индикационного
              регистра РгX калькулятора (клавиша Х); печать содержимого числовых
              регистров калькулятора (клавиша Рг); распечатка программы (98
              шагов) с указанием адреса команд (клавиша П). Скорость печати
              содержимого индикационного и числовых регистров 1 строка/с, а
              программы 2 строка/с. Формат строки в первых двух случаях
              соответствует информации, отображаемой на дисплее калькулятора.
              Формат слова, принимаемого от микрокалькулятора, показан на рис
              .1. Признак положительного значения мантиссы (порядка) - 0,
              признак отрицательного значения - 9. Имеется возможность
              прерывания печати (клавиша СТП).
            </p>

            {/**Рисунок 1*/}
            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/K145/K145IK1812/pug.2.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 1. Формат слова, принимаемого микросхемой К145ИК1812 от
                калькулятора:.
              </div>
              <div className="ruMC--img__text-inner"></div>
            </div>

            <p className="ruMC--text">
              Условное графическое обозначение микросхемы приведено на рис. 2,
              название выводов - в таблице 1, типовая схема включения рис. 3.
            </p>

            {/**Рисунок 2*/}
            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/K145/K145IK1812/pug.1.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 2. Условное графическое обозначение К145ИК1807.
              </div>
            </div>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 1</caption>
              <th className="ruMC--table__title">Вывод</th>
              <th className="ruMC--table__title">Обозначение</th>
              <th className="ruMC--table__title">Тип вывода</th>
              <th className="ruMC--table__title">
                Функциональное назначение вывода
              </th>
              <th className="ruMC--table__title">Примечание</th>

              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">1 - 4</td>
                <td className="ruMC--table__cell">UC3, UC1, UC2, UC4</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">
                  Фазы тактовых сигналы импульсного питания динамических узлов
                  микросхемы
                </td>
                <td className="ruMC--table__cell"></td>
              </tr>

              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">5</td>
                <td className="ruMC--table__cell">ORG</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Регистр связи</td>
                <td className="ruMC--table__cell"></td>
              </tr>

              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">14</td>
                <td className="ruMC--table__cell">D0.5</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Знакогенератор</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 6 ПЗУ
                </td>
              </tr>

              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">16</td>
                <td className="ruMC--table__cell">D0.4</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Знакогенератор</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 11 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">17</td>
                <td className="ruMC--table__cell">D0.3</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Знакогенератор</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 10 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">18</td>
                <td className="ruMC--table__cell">D0.1</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell">Знакогенератор</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 7 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">19</td>
                <td className="ruMC--table__cell">SYN</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Синхроимпульс</td>
                <td className="ruMC--table__cell">
                  Подключается к общему выводу
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">20</td>
                <td className="ruMC--table__cell">D0.2</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Знакогенератор</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 9 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">21</td>
                <td className="ruMC--table__cell">D1</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell">Калькулятор</td>
                <td className="ruMC--table__cell">
                  Подключается к любой точке регистра калькулятора
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">22, 23</td>
                <td className="ruMC--table__cell">W12, W11</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">Клавиатура</td>
                <td className="ruMC--table__cell"></td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">24</td>
                <td className="ruMC--table__cell">GND</td>
                <td className="ruMC--table__cell">Питание</td>
                <td className="ruMC--table__cell">Общий</td>
                <td className="ruMC--table__cell"></td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">27</td>
                <td className="ruMC--table__cell">D2.1</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">
                  Опрос клавиш СТП и выбор ПЗУ знакогенератора
                </td>
                <td className="ruMC--table__cell"></td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">28</td>
                <td className="ruMC--table__cell">D2.2</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Опрос клавиш: Х, Рг, П</td>
                <td className="ruMC--table__cell"></td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">29</td>
                <td className="ruMC--table__cell">A10</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 8 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">30</td>
                <td className="ruMC--table__cell">A9</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 3 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">31</td>
                <td className="ruMC--table__cell">A8</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 2 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">32</td>
                <td className="ruMC--table__cell">A7</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 1 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">34</td>
                <td className="ruMC--table__cell">CE</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">
                  Сигнал, разрешающий формирование синхроимпульсов для ТПГ
                </td>{' '}
                <td className="ruMC--table__cell"></td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">35</td>
                <td className="ruMC--table__cell">CO2.1</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">
                  Управление печатью символов
                </td>
                <td className="ruMC--table__cell">I группа символов</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">36</td>
                <td className="ruMC--table__cell">CO2.2</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">
                  Управление печатью символов
                </td>
                <td className="ruMC--table__cell">II группа символов</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">37</td>
                <td className="ruMC--table__cell">CO2.3</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">
                  Управление печатью символов
                </td>
                <td className="ruMC--table__cell">III группа символов</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">38</td>
                <td className="ruMC--table__cell">CO2.4</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">
                  Управление печатью символов
                </td>
                <td className="ruMC--table__cell">IV группа символов</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">39</td>
                <td className="ruMC--table__cell">A6</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 28 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">40</td>
                <td className="ruMC--table__cell">A5</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 27 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">41</td>
                <td className="ruMC--table__cell">A4</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 26 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">42</td>
                <td className="ruMC--table__cell">A3</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 19 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">43</td>
                <td className="ruMC--table__cell">C01</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">
                  Управление пьезодвигателем
                </td>
                <td className="ruMC--table__cell"></td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">44</td>
                <td className="ruMC--table__cell">A2</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 20 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">45</td>
                <td className="ruMC--table__cell">A1</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 21 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">46</td>
                <td className="ruMC--table__cell">A0</td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Адрес</td>
                <td className="ruMC--table__cell">
                  Подключается к выводу 22 ПЗУ
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">48</td>
                <td className="ruMC--table__cell">
                  U<sub>CC</sub>
                </td>
                <td className="ruMC--table__cell">Выход</td>
                <td className="ruMC--table__cell">Напряжение питания - 27 В</td>
              </tr>
            </table>
            <div className="ruMC--table__note">
              <span className="ruMC--table__note--title">Примечание.</span>
              Выводы 6-13, 15, 25, 26, 33, 47 не задействованы.
            </div>

            <p className="ruMC--text">
              В режиме распечатки информация предварительно преобразуется в
              соответствии с законом управления термопечатающей головкой (ТПГ).
              Число выводов в строке 16. Символы изображаются в виде точек в
              поле матрицы 5&times;7. Растровая развертка символа осуществляется
              с помощью ПЗУ знакогенератора (микросхема К145РЕ2П13).
            </p>
            <p className="ruMC--text">
              После печати одной горизонтальной строки бумага протягивается на
              один шаг, после печати полного символа - га 3 шага. После
              распечатки индикационного или всех числовых регистров либо 98
              шагов программы микросхема возвращается в исходное состояние,
              ожидая нажатия одной из клавиш: Х, Рг, П.
            </p>
            <p className="ruMC--text">
              Информация о сигналах на входа и выходах микросхемы с привязкой к
              временной координате в режиме печати индикационного регистра
              показаны в таблице 2. В режиме печати информация числовых
              регистров на входе <span className="italic">W11</span> и
              <span className="italic">W12</span> подаются сигналы 0 и 1
              соответственно. Временные параметры приема информации из числовых
              регистров приведены в таблице 3. Каждое из чисел, находящихся в
              числовых регистрах <span className="italic">Рг1-Рг14</span>
              калькулятора, при передаче из микросхемы К145ИК1812 располагается
              в виде массива <span className="italic">I</span> в формате,
              показанном на рис. 1. Все цифровые расположены в регистре по
              моменту времени <span className="italic">Е1</span>. Каждая
              последующая цифра массива располагается по соответствующему
              моменту времена <span className="italic">Дк</span>. Например, для
              нулевого числового регистра по моменту
              <span className="italic">Д4</span> находится младший разряд
              мантиссы
              <span className="italic">
                m<sub>0</sub>
              </span>
              , по <span className="italic">Д5</span> -{' '}
              <span className="italic">
                m<sub>1</sub>
              </span>
              . Знак порядка числа (ЗП) находится по моменту времени{' '}
              <span className="italic">
                n<sub>9</sub>Д3
              </span>
              .
            </p>

            <p className="ruMC--text">
              Временные параметры приема программы приведены в таблице 4. При
              передаче программы из микрокалькулятора микросхема К145ИК1812
              запоминает по семь шагов программы, расположенных в регистре в
              виде массива <span className="italic">J</span>:
            </p>

            <div className="ruMC__formula">
              J &ni; &alpha;<sub>1</sub>, b<sub>1</sub>, &alpha;<sub>2</sub>, b
              <sub>2</sub>, &alpha;<sub>3</sub>, b<sub>3</sub>, &alpha;
              <sub>4</sub>, b<sub>4</sub>,<br></br> &alpha;<sub>5</sub>, b
              <sub>5</sub>, &alpha;<sub>0</sub>, b<sub>0</sub>,
            </div>

            <p className="ruMC--text">
              где{' '}
              <span className="italic">
                a<sub>i</sub>
              </span>{' '}
              - младшая цифра шага;{' '}
              <span className="italic">
                b<sub>j</sub>
              </span>{' '}
              - старшая цифра шага. Все{' '}
              <span className="italic">
                a<sub>i</sub>
              </span>{' '}
              ,{' '}
              <span className="italic">
                b<sub>j</sub>
              </span>{' '}
              расположены в регистре по моменту времени{' '}
              <span className="italic">Е3</span> Каждая последующая цифра
              массива <span className="italic">J</span> располагается по
              соответствующему моменту времени{' '}
              <span className="italic">
                Д<sub>к</sub>
              </span>{' '}
              . Например, для шагов программы 0-6{' '}
              <span className="italic">
                a<sub>1</sub>
              </span>{' '}
              находятся по{' '}
              <span className="italic">
                n<sub>8</sub>Д4
              </span>{' '}
              после приема метки,{' '}
              <span className="italic">
                b<sub>1</sub>
              </span>{' '}
              - по{' '}
              <span className="italic">
                n<sub>8</sub>Д5
              </span>{' '}
              и т.д.;{' '}
              <span className="italic">
                a<sub>0</sub>
              </span>{' '}
              и{' '}
              <span className="italic">
                b<sub>0</sub>
              </span>{' '}
              находятся по{' '}
              <span className="italic">
                n<sub>9</sub>Д4
              </span>{' '}
              и{' '}
              <span className="italic">
                n<sub>9</sub>Д5
              </span>{' '}
              соответственно.
            </p>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 2</caption>
              <thead>
                <tr>
                  <th
                    className="ruMC--table__title"
                    style={{ minWidth: '280px' }}
                    rowSpan={4}
                  >
                    Решим
                  </th>
                </tr>
                <tr>
                  <th className="ruMC--table__title" colSpan={16}>
                    Сигналы
                  </th>
                  <th className="ruMC--table__title" colSpan={4}>
                    Время появления сигналов
                  </th>
                </tr>
                <tr>
                  <th className="ruMC--table__title" colSpan={4}>
                    На входах
                  </th>
                  <th className="ruMC--table__title" colSpan={12}>
                    на выходах
                  </th>
                  <th className="ruMC--table__title" rowSpan={2}>
                    n
                  </th>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Д
                  </th>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Е
                  </th>
                  <th className="ruMC--table__title" rowSpan={2}>
                    В
                  </th>
                </tr>
                <tr style={{ height: '100px' }}>
                  <th className="ruMC--table__title rotate">W11</th>
                  <th className="ruMC--table__title rotate">W12</th>
                  <th className="ruMC--table__title rotate">D1</th>
                  <th className="ruMC--table__title rotate">D0.1-D0.4</th>
                  <th className="ruMC--table__title rotate">ORG</th>
                  <th className="ruMC--table__title rotate">CE</th>
                  <th className="ruMC--table__title rotate">A0</th>
                  <th className="ruMC--table__title rotate">A1</th>
                  <th className="ruMC--table__title rotate">A2</th>
                  <th className="ruMC--table__title rotate">A3-A10</th>
                  <th className="ruMC--table__title rotate">D3.2</th>
                  <th className="ruMC--table__title rotate">CO2.1</th>
                  <th className="ruMC--table__title rotate">CO2.2</th>
                  <th className="ruMC--table__title rotate">CO2.3</th>
                  <th className="ruMC--table__title rotate">CO2.4</th>
                  <th className="ruMC--table__title rotate">CO1</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ruMC--table__line">
                  <td
                    className="ruMC--table__cell"
                    style={{ textAlign: 'left' }}
                  >
                    1. Прием кода клавиши Х
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td
                    className="ruMC--table__cell"
                    style={{ textAlign: 'left' }}
                  >
                    2. Прием маркера во входном массиве информации
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>

                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ textAlign: 'left' }}
                  >
                    3. Прием информации индикационного регистра<sub>*</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+3<br></br>i+4
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    8-12<br></br>1-7
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2<br></br>2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>

                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ textAlign: 'left' }}
                  ></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell" colSpan={4}>
                    Не ранее чем через <br></br>
                    120 оборотов (△&asymp;120)
                  </td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top', borderBottom: '0' }}
                >
                  <td
                    className="ruMC--table__cell"
                    rowSpan={18}
                    style={{ textAlign: 'left' }}
                  >
                    4. Обращение к знакогенератору, проем растра символа и
                    выдача его в регистр ТПГ
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    8
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    &mdash;
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ verticalAlign: 'top' }}
                  >
                    0
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    0+△
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    0+△
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">1</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    0+△
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">2</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    0+△
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">3</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    0+△
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+1
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">1</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+3
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+3
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">1</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+3
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">2</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+3
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">3</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+3
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    0+△
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+4
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+5
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    &mdash;
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    &mdash;
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+6
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    &mdash;
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+9
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">4</td>
                </tr>

                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top', borderBottom: '0' }}
                >
                  <td
                    className="ruMC--table__cell"
                    rowSpan={3}
                    style={{ textAlign: 'left' }}
                  >
                    5. Выдача импульса печати I группы символов
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+10
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    11
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ verticalAlign: 'top' }}
                  >
                    0
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+△+15
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  ></td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>

                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ textAlign: 'left' }}
                  ></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell" colSpan={4}>
                    Примерно через 12 <br></br>
                    оборотов S&asymp;△+15+2
                  </td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top', borderBottom: '0' }}
                >
                  <td
                    className="ruMC--table__cell"
                    rowSpan={3}
                    style={{ textAlign: 'left' }}
                  >
                    6. Выдача импульса печати II группы символов. Перед режимом
                    6 повторяется режим 4. После окончания режима 6 следуют еще
                    два импульса печати III и IV групп символов на выходах СО2.3
                    и СО2.4; перед каждым из этих импульсов повторяется режим 4
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+S
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    11
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ verticalAlign: 'top' }}
                  >
                    0
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+S+5
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+S+5
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>

                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ textAlign: 'left' }}
                  ></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell" colSpan={4}>
                    Примерно через <br></br>
                    25 оборотов
                  </td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top', borderBottom: '0' }}
                >
                  <td
                    className="ruMC--table__cell"
                    rowSpan={3}
                    style={{ textAlign: 'left' }}
                  >
                    7. Выдача импульса протяжки бумаги на один шаг
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+S+30
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    3
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ verticalAlign: 'top' }}
                  >
                    0
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+S+31
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    10
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+S+31
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    10
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>

                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ textAlign: 'left' }}
                  >
                    8. Переустановка адреса номера строки растра символов. Далее
                    6 раз повторяется цикл от режима 4 до режима 7. Перед каждым
                    из них адрес строки растра на выходах А0, А1, А2
                    увеличивается на 1 (до 111)
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+S+30
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    3
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>

                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ textAlign: 'left' }}
                  ></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell"></td>
                  <td className="ruMC--table__cell" colSpan={4}>
                    Примерно через <br></br>
                    680 оборотов<br></br>
                    после режима 2:
                  </td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top', borderBottom: '0' }}
                >
                  <td
                    className="ruMC--table__cell"
                    rowSpan={10}
                    style={{ textAlign: 'left' }}
                  >
                    9. Выдача импульсов на двигатель для протяжки бумаги на три
                    шага. После окончания режима 9 микросхема переходит в режим
                    опроса клавиш
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+680
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ verticalAlign: 'top' }}
                  >
                    0
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+680
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+681
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    10
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ verticalAlign: 'top' }}
                  >
                    0
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+681
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    10
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+689
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    3
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ verticalAlign: 'top' }}
                  >
                    0
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+690
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    10
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+690
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    10
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ verticalAlign: 'top' }}
                  >
                    0
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+698
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    3
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{ verticalAlign: 'top' }}
                >
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">1</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+999
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    10
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    1
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr
                  className="ruMC--table__line"
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  <td
                    className="ruMC--table__cell"
                    style={{ verticalAlign: 'top' }}
                  >
                    0
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">
                    P<sub>1</sub>
                  </td>
                  <td className="ruMC--table__cell">
                    P<sub>2</sub>
                  </td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    i+999
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    12
                  </td>
                  <td
                    className="ruMC--table__cell"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    2
                  </td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
              </tbody>
            </table>
            <div className="ruMC--table__note">
              <span className="ruMC--table__note--title">Примечания.</span>
              <p style={{ marginBottom: '-5px' }}>
                n<sub>l</sub> - номер цикла; А - адрес растра символа в поле
                памяти знакогенератора; P<sub>1</sub> - 5 бит растра символа (в
                параллельном коде); P<sub>2</sub> - растр символа в
                последовательном коде.
              </p>
              <p>
                <sup>*</sup> Если знак порядка (ЗП) равен 9, то порядок
                принимается в дополнительном коде. Первым на вход D1 поступает
                младший разряд мантиссы.
              </p>
            </div>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 3</caption>

              <thead>
                <tr>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Номер<br></br> числового<br></br> регистра
                  </th>
                  <th className="ruMC--table__title" colSpan={2}>
                    Временные параметры
                  </th>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Номер<br></br> числового<br></br> регистра
                  </th>
                  <th className="ruMC--table__title" colSpan={2}>
                    Временные параметры
                  </th>
                </tr>
                <tr>
                  <th className="ruMC--table__title columnXS">
                    Номер оборота регистра (после метки), соответст- вующий
                    началу массива
                  </th>
                  <th className="ruMC--table__title">
                    Временные<br></br> интервалы
                  </th>
                  <th className="ruMC--table__title columnXS">
                    Номер оборота регистра (после метки), соответст- вующий
                    началу массива
                  </th>
                  <th className="ruMC--table__title">
                    Временные<br></br> интервалы
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">
                    n<sub>8</sub>
                  </td>
                  <td className="ruMC--table__cell">Д4, Е1</td>
                  <td className="ruMC--table__cell">7</td>
                  <td className="ruMC--table__cell">
                    n<sub>16</sub>
                  </td>
                  <td className="ruMC--table__cell">Д6, Е1</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">
                    n<sub>9</sub>
                  </td>
                  <td className="ruMC--table__cell">Д6, Е1</td>
                  <td className="ruMC--table__cell">8</td>
                  <td className="ruMC--table__cell">
                    n<sub>17</sub>
                  </td>
                  <td className="ruMC--table__cell">Д8, Е1</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">2</td>
                  <td className="ruMC--table__cell">
                    n<sub>10</sub>
                  </td>
                  <td className="ruMC--table__cell">Д8, Д1</td>
                  <td className="ruMC--table__cell">9</td>
                  <td className="ruMC--table__cell">
                    n<sub>18</sub>
                  </td>
                  <td className="ruMC--table__cell">Д10, Е1</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">3</td>
                  <td className="ruMC--table__cell">
                    n<sub>11</sub>
                  </td>
                  <td className="ruMC--table__cell">Д10, Е1</td>
                  <td className="ruMC--table__cell">10</td>
                  <td className="ruMC--table__cell">
                    n<sub>19</sub>
                  </td>
                  <td className="ruMC--table__cell">Д12, Е1</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">4</td>
                  <td className="ruMC--table__cell">
                    n<sub>12</sub>
                  </td>
                  <td className="ruMC--table__cell">Д12, Е1</td>
                  <td className="ruMC--table__cell">11</td>
                  <td className="ruMC--table__cell">
                    n<sub>21</sub>
                  </td>
                  <td className="ruMC--table__cell">Д2, Е1</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">5</td>
                  <td className="ruMC--table__cell">
                    n<sub>14</sub>
                  </td>
                  <td className="ruMC--table__cell">Д2, Е1</td>
                  <td className="ruMC--table__cell">12</td>
                  <td className="ruMC--table__cell">
                    n<sub>22</sub>
                  </td>
                  <td className="ruMC--table__cell">Д4, Е1</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">6</td>
                  <td className="ruMC--table__cell">
                    n<sub>15</sub>
                  </td>
                  <td className="ruMC--table__cell">Д4, Е1</td>
                  <td className="ruMC--table__cell">13</td>
                  <td className="ruMC--table__cell">
                    n<sub>23</sub>
                  </td>
                  <td className="ruMC--table__cell">Д6, Е1</td>
                </tr>
              </tbody>
            </table>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 4</caption>

              <thead>
                <tr>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Шаги<br></br> программы<br></br>
                  </th>
                  <th className="ruMC--table__title" colSpan={2}>
                    Временные параметры
                  </th>
                </tr>
                <tr>
                  <th className="ruMC--table__title columnXS">
                    Номер оборота регистра (после метки), соответствущий началу
                    массива
                  </th>
                  <th className="ruMC--table__title">
                    Временные<br></br> интервалы
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">0-6</td>
                  <td className="ruMC--table__cell">
                    n<sub>8</sub>
                  </td>
                  <td className="ruMC--table__cell">Д4, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">7-13</td>
                  <td className="ruMC--table__cell">
                    n<sub>9</sub>
                  </td>
                  <td className="ruMC--table__cell">Д6, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">14-20</td>
                  <td className="ruMC--table__cell">
                    n<sub>10</sub>
                  </td>
                  <td className="ruMC--table__cell">Д8, Д3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">21-27</td>
                  <td className="ruMC--table__cell">
                    n<sub>11</sub>
                  </td>
                  <td className="ruMC--table__cell">Д10, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">28-34</td>
                  <td className="ruMC--table__cell">
                    n<sub>12</sub>
                  </td>
                  <td className="ruMC--table__cell">Д12, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">35-41</td>
                  <td className="ruMC--table__cell">
                    n<sub>14</sub>
                  </td>
                  <td className="ruMC--table__cell">Д2, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">42-48</td>
                  <td className="ruMC--table__cell">
                    n<sub>15</sub>
                  </td>
                  <td className="ruMC--table__cell">Д4, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">49-55</td>
                  <td className="ruMC--table__cell">
                    n<sub>16</sub>
                  </td>
                  <td className="ruMC--table__cell">Д6, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">56-62</td>
                  <td className="ruMC--table__cell">
                    n<sub>17</sub>
                  </td>
                  <td className="ruMC--table__cell">Д8, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">63-69</td>
                  <td className="ruMC--table__cell">
                    n<sub>18</sub>
                  </td>
                  <td className="ruMC--table__cell">Д10, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">70-76</td>
                  <td className="ruMC--table__cell">
                    n<sub>19</sub>
                  </td>
                  <td className="ruMC--table__cell">Д12, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">77-83</td>
                  <td className="ruMC--table__cell">
                    n<sub>21</sub>
                  </td>
                  <td className="ruMC--table__cell">Д2, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">84-90</td>
                  <td className="ruMC--table__cell">
                    n<sub>22</sub>
                  </td>
                  <td className="ruMC--table__cell">Д4, Е3</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">91-97</td>
                  <td className="ruMC--table__cell">
                    n<sub>23</sub>
                  </td>
                  <td className="ruMC--table__cell">Д6, Е3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
