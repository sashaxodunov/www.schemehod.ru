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
              Микросхемы К145ИК1807 по математическому обеспечению ориентирована
              на решение задач управления технологическими процессами,
              манипуляторами, электробытовыми приборами и т.п. Она выполняет
              следующие функции:
            </p>

            <ul className="ruMC--list">
              <li className="ruMC--list__item">
                прием программы управления и исходных данных о времени и
                состоянии датчиков управляемого объекта;
              </li>
              <li className="ruMC--list__item">
                временное хранение дополнительной информации во внутренней
                памяти микросхемы, организованной в виде стека,по схеме:
              </li>
              <ul className="ruMC--list-2">
                <li className="ruMC--list__item-2">регистр индикации РИ ➡️</li>
                <li className="ruMC--list__item-2">регистр памяти М2 ➡️</li>
                <li className="ruMC--list__item-2">регистр памяти М1 ➡️</li>
                <li className="ruMC--list__item-2">регистр индикации РИ.</li>
              </ul>
              <li className="ruMC--list__item">
                для запоминания кода управления имеется специальный регистр МКУ;
                обращение к внутренней памяти микросхемы осуществляется с
                клавиатуры и по программе;
              </li>
              <li className="ruMC--list__item">
                обращение к внутренней памяти микросхемы осуществляется с
                клавиатуры и по программе;
              </li>
              <li className="ruMC--list__item">работа в режиме таймера;</li>
              <li className="ruMC--list__item">
                обращение к внешнему запоминающему устройству и последовательную
                выборку команд ЗУ для их исполнения;
              </li>
              <li className="ruMC--list__item">
                автоматический поиск программы во внешнем У по номеру,
                набранному на клавиатуре;
              </li>
              <li className="ruMC--list__item">
                выполнение заданной программы.
              </li>
            </ul>

            <p className="ruMC--text">
              Для хранения программ управления используется внешнее ЗУ (ОЗУ,
              ППЗУ, ПЗУ), входящее в состав модуля управления.
            </p>
            <p className="ruMC--text">
              При длительном пользовании отлаженной программой управления в
              модуле применяется ПЗУ. На этапе отладки программы управления
              функции носителя информации может выполнять оперативное или
              полупостоянное ЗУ.
            </p>
            <p className="ruMC--text">
              Функциональные возможности микросхемы К145ИК1807 позволяют строить
              программы управления внешним объектом:
            </p>

            <ul className="ruMC--list">
              <li className="ruMC--list__item">
                с организацией множества циклов повторений тех или иных операций
                (блока операций);
              </li>
              <li className="ruMC--list__item">
                с остановом и возвратом на начало программы;
              </li>
              <li className="ruMC--list__item">
                с возможностью прерывания программы и выходом на программу
                продолжения или останова;
              </li>
              <li className="ruMC--list__item">
                с изменением управляющих воздействий по условию состояния
                датчиков внешних объектов;
              </li>
            </ul>
            <p className="ruMC--text">
              Минимальный период коммутации исполнительных устройств - 40 ± 2
              мс.
            </p>
            <p className="ruMC--text">
              Доступ пользователя к модулю управления осуществляется через
              устройство ввода/вывода, которое имеет в своем составе клавиатуру
              и индикаторные устройства.
            </p>
            <p className="ruMC--text">
              Условное графическое обозначение микросхемы К145ИК1807 приведено
              на рис.1, назначение выводов - в табл.1, временная диаграмма
              работы - на рис.2, структурная схема модуля управления на базе
              К145ИК1807 - на рис.3
            </p>

            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/К142/K142IK1807/pug.1.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 1. Условное графическое обозначение К145ИК1807.
              </div>
            </div>

            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/К142/K142IK1807/pug.2.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 2. Временная диаграмма работы К145ИК1807.
              </div>
            </div>

            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/К142/K142IK1807/pug.3.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 3. Структурная схема модули управления на базе К145ИК1807.
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
                <td className="ruMC--table__cell" colSpan={3}>
                  Фазы тактового питания динамических узлов микросхемы
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">7, 8, 10, 11</td>
                <td className="ruMC--table__cell">D0. 9 - D0. 12</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell" colSpan={3}>
                  Код операции. <br></br>
                  Десятки минут/секунд. <br></br>
                  Минуты. <br></br>
                  Число циклов повторения. <br></br>
                  Запоминаемый код (в М2/М1). <br></br>
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">D0. 5 - D0. 8</td>
                <td className="ruMC--table__cell">UC3, UC1, UC2, UC4</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell" colSpan={3}>
                  Приращение адреса ЗУ. <br></br>
                  Признак диапазона минуты/секунды. <br></br>
                  Минуты/секунды. <br></br>
                  Признак памяти М1/М2. <br></br>
                  Запоминаемый код (в М1/М2). <br></br>
                  Старший разряд адреса смещения (в цикле). <br></br>
                  Младший разряд адреса смещения (в цикле). <br></br>
                </td>
              </tr>
              <tr className="ruMC--table__line" colSpan={3}>
                <td className="ruMC--table__cell">14, 16, 17, 19</td>
                <td className="ruMC--table__cell">D0. 4 - D0. 1</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell" colSpan={3}>
                  Датчики внешних устройств
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">20</td>
                <td className="ruMC--table__cell">SYN</td>
                <td className="ruMC--table__cell">Вход</td>
                <td className="ruMC--table__cell" colSpan={3}>
                  Синхронизация (частота импульсов f=50 Гц)
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">21, 22</td>
                <td className="ruMC--table__cell">W11, W12</td>
                <td className="ruMC--table__cell">Входы</td>
                <td className="ruMC--table__cell" colSpan={3}>
                  Клавиатура
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">24</td>
                <td className="ruMC--table__cell">GND</td>
                <td className="ruMC--table__cell">Питание</td>
                <td className="ruMC--table__cell" colSpan={3}>
                  Общий
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">28, 31</td>
                <td className="ruMC--table__cell">C05 - C08</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell" colSpan={3}>
                  Управление внешним устройством
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">32 - 35</td>
                <td className="ruMC--table__cell">C09 - C012</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell" colSpan={3}>
                  Счетчик адреса с индикацией. <br></br>
                  Десятки секунд.
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">36 - 39</td>
                <td className="ruMC--table__cell">C013 - C016</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">
                  Старший шестнадцатеричный разряд адреса
                </td>
                <td className="ruMC--table__cell">-</td>
                <td className="ruMC--table__cell">-</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">40 - 43</td>
                <td className="ruMC--table__cell">C012 - C020</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">
                  Средний шестнадцатеричный разряд адреса
                </td>
                <td className="ruMC--table__cell">
                  Младший шестнадцатеричный разряд кода пороса датчиков
                </td>
                <td className="ruMC--table__cell">Десятки минут</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">44 - 47</td>
                <td className="ruMC--table__cell">C021 - C024</td>
                <td className="ruMC--table__cell">Выходы</td>
                <td className="ruMC--table__cell">
                  Младший шестнадцатеричный разряд адреса
                </td>
                <td className="ruMC--table__cell">
                  Старший шестнадцатеричный разряд кода опроса датчиков
                </td>
                <td className="ruMC--table__cell">Минуты</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">48</td>
                <td className="ruMC--table__cell">
                  U<sub>CC</sub>
                </td>
                <td className="ruMC--table__cell">Питание</td>
                <td className="ruMC--table__cell">Напряжение питания</td>
              </tr>
            </table>

            <div className="ruMC--table__note">
              <span className="ruMC--table__note--title">Примечание.</span>
              Выводы показаны в последовательности старший - младший разряд.
            </div>
            <p className="ruMC--text">
              В ходе выполнения программы микросхемой осуществляется опрос и
              анализ датчиков внешних устройств по входам D0.1-D0.4.
            </p>
            <p className="ruMC--text">
              Систему команд К145ИК1807 можно разделить на три группы:
            </p>
            <ol className="ruMC--listNumber">
              <li className="ruMC--listNumber__item">
                команды внешнего управления: КУ и выполняемые только после КУ -
                НВ, ВВ<sub>м</sub>, ВВ<sub>с</sub>, ПВ, ОД;
              </li>
              <li className="ruMC--listNumber__item">
                команды обращения к памяти: ЗК, МКУ, М1↑, М2↑, М1+;
              </li>
              <li className="ruMC--listNumber__item">
                команды управления программой: БП, Цикл, ПП, ВП, Стоп.
              </li>
            </ol>
            <p className="ruMC--text">
              Система команд приведена в таблице 2, структура команд - в таблице
              3. Время считывания однобайтовой команды 14мс, двухбайтовой 19мс.
              Временной интервал между опросами датчиков 20мс, длительность
              опроса датчиков 0,8мс.
            </p>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 2</caption>
              <th className="ruMC--table__title">Символ команды</th>
              <th className="ruMC--table__title">Название команды</th>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">НВ</td>
                <td className="ruMC--table__cell">
                  Занесение полного времени выполнения всей программы
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">
                  ВВ<sub>с</sub>
                </td>
                <td className="ruMC--table__cell">
                  Занесение времени выполнения операции в секундном интервале
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">
                  ВВ<sub>м</sub>
                </td>
                <td className="ruMC--table__cell">
                  Занесение времени выполнения операции в минутном интервале
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">КУ</td>
                <td className="ruMC--table__cell">
                  Управление исполнительными устройствами и переход по времени в
                  секундном интервале
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">ПВ</td>
                <td className="ruMC--table__cell">
                  Переход по окончании времени в минутном интервале
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">БП</td>
                <td className="ruMC--table__cell">
                  Безусловный переход на любого места программы по заданному
                  адресу
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">ПП</td>
                <td className="ruMC--table__cell">
                  Переход на подпрограмму по указанному адресу подпрограммы.
                  Глубина обращения к подпрограмме 2
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">ОД</td>
                <td className="ruMC--table__cell">
                  Опрос датчиков внешних устройств. Код, считываемый с датчиков,
                  сравнивается с заданным по программе. В соответствии с
                  результатом осуществляется переход по программе
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">ВП</td>
                <td className="ruMC--table__cell">
                  Выход из подпрограммы для выполнения основной программы
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">М1↑</td>
                <td className="ruMC--table__cell">
                  Обращение к внутренней памяти М1
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">М2↑</td>
                <td className="ruMC--table__cell">
                  Обращение к внутренней памяти М2
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">М1+</td>
                <td className="ruMC--table__cell">Сложение с памятью М1</td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">МКУ</td>
                <td className="ruMC--table__cell">
                  Обращение к памяти кода управления исполнительными
                  устройствами
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">Цикл</td>
                <td className="ruMC--table__cell">
                  Задание числа циклов повторения выполняемой операции (блока
                  операций). В команде указывается число циклов повторения и
                  смещения текущего адреса ЗУ, охватывающее повторяемый блок
                  операций
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">ЗК</td>
                <td className="ruMC--table__cell">
                  Занесение кода в память М2 или М1
                </td>
              </tr>
              <tr className="ruMC--table__line">
                <td className="ruMC--table__cell">Стоп</td>
                <td className="ruMC--table__cell">Останов программы</td>
              </tr>
            </table>

            <table className="ruMC--table">
              <caption className="ruMC--table__caption">Таблица 3</caption>

              <thead>
                <tr>
                  <th className="ruMC--table__title" rowSpan={2}>
                    Символ команды
                  </th>
                  <th className="ruMC--table__title" colSpan={2}>
                    1-й байт
                  </th>
                  <th className="ruMC--table__title" colSpan={2}>
                    2-й байт
                  </th>
                </tr>
                <tr>
                  <th className="ruMC--table__title columnXS">
                    Код операции шестнад- <br></br> цатерич- <br></br>ный
                  </th>
                  <th className="ruMC--table__title" colSpan={3}>
                    Информация
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">М1↑</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">ПВ</td>
                  <td className="ruMC--table__cell">1</td>
                  <td className="ruMC--table__cell">Приращение адреса ПЗУ</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">ОД</td>
                  <td className="ruMC--table__cell">2</td>
                  <td className="ruMC--table__cell">Контроль информации</td>
                  <td className="ruMC--table__cell" colSpan={2}>
                    Код опроса датчиков
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">ВВ</td>
                  <td className="ruMC--table__cell">3</td>
                  <td className="ruMC--table__cell">
                    0 - диапазон минут <br></br>1 - диапазон секунд
                  </td>
                  <td className="ruMC--table__cell">
                    Десятки минут <br></br>Десятки секунд
                  </td>
                  <td className="ruMC--table__cell">
                    Минуты <br></br>Секунды
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">БП</td>
                  <td className="ruMC--table__cell">4</td>
                  <td className="ruMC--table__cell" colSpan={3}>
                    Адрес безусловного перехода
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">ПП</td>
                  <td className="ruMC--table__cell">5</td>
                  <td className="ruMC--table__cell" colSpan={3}>
                    Адрес перехода на подпрограмму
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">МКУ</td>
                  <td className="ruMC--table__cell">6</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell" colSpan={2}>
                    Код управления
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">ЗК</td>
                  <td className="ruMC--table__cell">7</td>
                  <td className="ruMC--table__cell">
                    0 - обращение к М2 <br></br>1 - обращение к М1
                  </td>
                  <td className="ruMC--table__cell" colSpan={2}>
                    Заносивый код
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">М2↑</td>
                  <td className="ruMC--table__cell">8</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">Стоп</td>
                  <td className="ruMC--table__cell">9</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">НВ</td>
                  <td className="ruMC--table__cell">A</td>
                  <td className="ruMC--table__cell">Десятки секунд</td>
                  <td className="ruMC--table__cell">Минуты</td>
                  <td className="ruMC--table__cell">Десятки минут</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">Цикл</td>
                  <td className="ruMC--table__cell">B</td>
                  <td className="ruMC--table__cell">
                    Старшие разряды адреса смещения
                  </td>
                  <td className="ruMC--table__cell">Число циклов повторения</td>
                  <td className="ruMC--table__cell">
                    Младшие разряды адреса смещения
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">КУ</td>
                  <td className="ruMC--table__cell">C</td>
                  <td className="ruMC--table__cell">Приращение адреса ПЗУ</td>
                  <td className="ruMC--table__cell" colSpan={2}>
                    Код управления
                  </td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">ВП</td>
                  <td className="ruMC--table__cell">D</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
                <tr className="ruMC--table__line">
                  <td className="ruMC--table__cell">М1+</td>
                  <td className="ruMC--table__cell">E</td>
                  <td className="ruMC--table__cell">0</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                  <td className="ruMC--table__cell">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
