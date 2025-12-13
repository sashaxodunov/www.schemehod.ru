import './Datasheet.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Datasheet'

  return (
    <>
      <section className="section section__datasheet">

        <header className="datasheet__header">
          <h2 className="datasheet__title">{title}</h2>
          <p>
            Документ, который объединяет в себе технические характеристики продукта, материала, компонента (например,
            электронного) или подсистемы. Техническая спецификация, карта данных — документ, который объединяет в себе
            технические характеристики электронного компонента
          </p>
        </header>

        <div className="datasheet__grid">
          <a href="/Datasheet/resistor" className="datasheet__card">
            <h3 className="datasheet__card-name">Резисторы</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/resistor.jpg"
              alt="Резистор"
              width={260}
              height={350}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/capacitor"} className="datasheet__card">
            <h3 className="datasheet__card-name">Конденсаторы</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/capacitor.jpg"
              alt="Конденсаторы"
              width={260}
              height={350}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/inductance"} className="datasheet__card">
            <h3 className="datasheet__card-name">Индуктивности</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/inductance.jpg"
              alt="Индуктивности"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/diodes"} className="datasheet__card">
            <h3 className="datasheet__card-name">Диоды</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/diode.jpg"
              alt="Диоды"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/thyristors"} className="datasheet__card">
            <h3 className="datasheet__card-name">Тиристоры</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/thyristors.jpg"
              alt="Тиристоры"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/transistors"} className="datasheet__card">
            <h3 className="datasheet__card-name">Транзисторы</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/transistor.jpg"
              alt="Транзисторы"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/optoelectronic"} className="datasheet__card">
            <h3 className="datasheet__card-name">Опто- электронные</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/optoelectronic.jpg"
              alt="Оптоэлектронные"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/microchips"} className="datasheet__card">
            <h3 className="datasheet__card-name">Микросхемы</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/microcircuits.jpg"
              alt="Микросхемы"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/sensor"} className="datasheet__card">
          <h3 className="datasheet__card-name">Датчики</h3>
          <img
            className="datasheet__card-img"
            src="/images/Datasheet/sensor.jpg"
            alt="Датчики"
            width={260}
            height={300}
            loading={loading}
          />
        </a>
          <a href={"/Datasheet/electromechanical"} className="datasheet__card">
          <h3 className="datasheet__card-name">Электро- механические</h3>
          <img
            className="datasheet__card-img"
            src="/images/Datasheet/electomechanical.jpg"
            alt="Электомеханические"
            width={260}
            height={300}
            loading={loading}
          />
        </a>

          <a href={"/Datasheet/antennas"} className="datasheet__card">
            <h3 className="datasheet__card-name">Антенны</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/antenna.jpg"
              alt="Антенны"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/protective"} className="datasheet__card">
            <h3 className="datasheet__card-name">Защитные устройства</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/fuses.jpg"
              alt="Предохранители"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/quartz"} className="datasheet__card">
            <h3 className="datasheet__card-name">Кварцевые и частотные элементы</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/quartz.jpg"
              alt="Кварцевые и частотные элементы"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/power"} className="datasheet__card">
            <h3 className="datasheet__card-name">Источники питания</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/power.jpg"
              alt="Источники питания"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href={"/Datasheet/lamps"} className="datasheet__card">
            <h3 className="datasheet__card-name">Лампы</h3>
            <img
              className="datasheet__card-img"
              src="/images/Datasheet/lamps.jpg"
              alt="Лампы"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
        </div>

      </section>
    </>
  )
}
