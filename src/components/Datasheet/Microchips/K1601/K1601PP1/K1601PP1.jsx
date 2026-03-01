import './K1601PP1.scss'

export default () => {
  const title = 'Микросхема К1601 РР1'
  const titleH3 = 'КР1601 РР1, К1601 РР11, КР1601 РР11, К1601 РР12, КР1601 РР12'

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <p className="section-datasheet--title-h3">Модельный ряд</p>
          <h3 className="section-datasheet-titleH3">{titleH3}</h3>
          <div className="ruMC">
            <p className="ruMC--text">
              Микросхемы представляют собой репрограммируемое запоминающее
              устройство (матрицу-накопитель запоминающего устройства со схемами
              управления, дешифраторами адреса и усилителями считывания с
              электрической перезаписью и сохранением информации при отключенных
              напряжениях питания) емкостью 4 кбит (1кх4) для К1601РР1,
              КР1601РР1 и модификации емкостью 2 кбит (512х4) для КР1601РР11,
              КР1601РР12. В ИС предусмотрены 4 режима: общее стирание,
              избирательное стирание, запись и считывание. Содержат 14832
              интегральных элемента. Корпус типа
              <a
                className="ruMC--body"
                href="@/pages/Datasheet/microchips/ruMC/K1601/k1601pp1.jsx"
              >
                {/*FIXME: нет материала на странице*/}
                405.24-2
              </a>
              масса не более 2,5г и{' '}
              <a
                className="ruMC--body"
                href="@/pages/Datasheet/microchips/ruMC/K1601/k1601pp1.jsx"
              >
                {/*FIXME: нет материала на странице*/}
                2120.24-3
              </a>
              , масса не более 5г.
            </p>

            <p className="ruMC--text">
              Назначение выводов: 1 - адрес X6; 2 - выбор ИС; 3 - вход/выход
              первого разряда; 4 - корпус; 5 - вход/выход первого разряда; 6...9
              - адресы Y1, Y2, Y3, Y4; 10 - вход/выход третьего разряда; 11 -
              вход/выхода четвертого разряда; 12 - напряжение питания (-U
              <sub>n1</sub>); 13 - считывание; 14 - запись; 15 - напряжение
              сигнала разрешение Up; 16,17 - свободные; 18 - стирание; 19...23 -
              адресы X1...X5; 24 - напряжение питания (U<sub>n2</sub>).
            </p>
            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/K1601/K1601PP1/pug.1.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 1. Условное графическое обозначение K1601РР1, KР1601РР1.
              </div>
            </div>
            <div className="ruMC--img__box">
              <img
                className="ruMC--img"
                src="/images/Datasheet/Microchips/ruMC/K1601/K1601PP1/pug.2.png"
                alt=""
              />
              <div className="ruMC--img__text">
                Рис. 2. Структурная схема KР1601РР1: I - усилители-формирователи
                адресных сигналов; II - усилители-формирователи управляющих
                сигналов; III - дешифраторы; V - мультиплексоры; VI - выходные
                усилители-формирователи, усилители записи
              </div>
            </div>
            <p className="ruMC--text">
              Примечание. Для К1601РР11 и КР1601РР11 вывод 1 не используется и
              соединен с выводом 4; для К1601РР12, КР1601РР12 вывод 1 не
              используется и соединен с выводом 24.
            </p>

            <div className="specs">
              <div className="specs__title">Электрические параметры</div>
              <div className="title">Номинальное напряжение питания:</div>

              <div className="row indent">
                <div className="label">- Uп1</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">-12 В ± 5%</div>
              </div>

              <div className="row indent">
                <div className="label">- Uп2</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">5 В ± 5%</div>
              </div>

              <div className="row">
                <div className="label">Выходное напряжение высокого уровня</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&ge; 3,2 В</div>
              </div>

              <div className="row">
                <div className="label">Выходное напряжение низкого уровня</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 0,36 В</div>
              </div>

              <div className="title">
                Ток потребления при U<sub>п1</sub> = -12В:
              </div>

              <div className="row indent">
                <div className="label">
                  - в режиме &laquo;Не выбор ИС&raquo; К1601РР1, КР1601РР1
                </div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 15мА</div>
              </div>

              <div className="row indent">
                <div className="label">
                  - в режиме &laquo;Выбор ИС&raquo; К1601РР1, КР1601РР1
                </div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 30мА</div>
              </div>

              <div className="row">
                <div className="label">
                  Ток потребления по выводу Up К1601РР1, КР1601РР1
                </div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 8,5 В</div>
              </div>

              <div className="title">Ток потребления К1601РР1, КР1601РР1:</div>

              <div className="row indent">
                <div className="label">- в режиме считывания</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 28мА</div>
              </div>

              <div className="row indent">
                <div className="label">- в режиме записи</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 30мА</div>
              </div>

              <div className="row">
                <div className="label">
                  Ток утечки на адресных и управляющих входах
                </div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 7,5 В</div>
              </div>

              <div className="title">
                Ток утечки на адресных и управляющих входах
              </div>

              <div className="row ">
                <div className="label">
                  закрытой схемы в режиме &laquo;Не выбор ИС&raquo;
                </div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 30мА</div>
              </div>

              <div className="row ">
                <div className="label">Удельная потребляемая мощность</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">0,14 мВт/бит</div>
              </div>

              <div className="row ">
                <div className="label">Время выборки считывания</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 0,8мА</div>
              </div>
              <div className="title">
                Врем сохранения выходного сигнала после подачи
              </div>

              <div className="row ">
                <div className="label">сигнала считывания</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&re; 0,1мкс</div>
              </div>

              <div className="row ">
                <div className="label">
                  Количество циклов перезаписи информации по строке
                </div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">
                  &le; 10<sup>4</sup>
                </div>
              </div>
              <div className="title">Время хранения информации:</div>

              <div className="row indent">
                <div className="label">- КР1601РР1</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">5000ч</div>
              </div>

              <div className="row indent">
                <div className="label">- КР1601РР11, КР1601РР12</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">250ч</div>
              </div>
            </div>

            <div className="specs">
              <div className="specs__title">
                Предельно допустимые режимы эксплуатации
              </div>
              <div className="title">Максимальное напряжение питания:</div>

              <div className="row indent">
                <div className="label">- Uп1</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">-12,6 В</div>
              </div>

              <div className="row indent">
                <div className="label">- Uп2</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">5,25 В</div>
              </div>

              <div className="row">
                <div className="label">
                  Максимальное входное напряжение низкого уровня
                </div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">0,4 В</div>
              </div>

              <div className="row">
                <div className="label">Входное напряжение высокого уровня</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 3,5...5,25 В</div>
              </div>

              <div className="row">
                <div className="label">
                  Максимальный выходной ток низкого уровня
                </div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">&le; 1,8 мА</div>
              </div>

              <div className="row">
                <div className="label">Максимальное время спада</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">50 нс</div>
              </div>

              <div className="row">
                <div className="label">Максимальное время нарастания</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">50 нс</div>
              </div>

              <div className="row">
                <div className="label">Максимальная емкость нагрузки</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">200 пФ</div>
              </div>

              <div className="row">
                <div className="label">Температура окружающей среды</div>
                <div className="dots" aria-hidden="true"></div>
                <div className="value">-10...+70&deg;С</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
