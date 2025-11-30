import './Documentation.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Cхемы'

  return (
    <>
      <section className="section container section__documentation">

        <header className="documentation__header">
          <h2 className="documentation__title">{title}</h2>
          <p>
            Документ, который объединяет в себе технические характеристики продукта, материала, компонента (например,
            электронного) или подсистемы. Техническая спецификация, карта данных — документ, который объединяет в себе
            технические характеристики электронного компонента
          </p>
        </header>

        <div className="documentation__grid">

          <a href="./datasheetMC/dhEN.html" className="documentation__card">
            <h3 className="documentation__card-name">Бытовая техника</h3>
            <img
              className="documentation__card-img"
              src="./images/Documentation/program-01.jpg"
              alt="Бытовая техника"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="documentation__card">
            <h3 className="documentation__card-name">Компьютеры и оргтехника</h3>
            <img
              className="documentation__card-img"
              src="./images/Documentation/program-02.jpg"
              alt="Компьютеры и оргтехника"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="documentation__card">
            <h3 className="documentation__card-name">Портативная электроника</h3>
            <img
              className="documentation__card-img"
              src="./images/Documentation/program-03.jpg"
              alt="Портативная электроника"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="documentation__card">
            <h3 className="documentation__card-name">Автоэлектроника</h3>
            <img
              className="documentation__card-img"
              src="./images/Documentation/program-04.jpg"
              alt="Автоэлектроника"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="documentation__card">
            <h3 className="documentation__card-name">Связь и сети</h3>
            <img
              className="documentation__card-img"
              src="./images/Documentation/program-05.jpg"
              alt="Связь и сети"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="documentation__card">
            <h3 className="documentation__card-name">Промышленная электроника</h3>
            <img
              className="documentation__card-img"
              src="./images/Documentation/program-06.jpg"
              alt="Промышленная электроника"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="documentation__card">
            <h3 className="documentation__card-name">Развлекательная электроника</h3>
            <img
              className="documentation__card-img"
              src="./images/Documentation/program-07.jpg"
              alt="Развлекательная электроника"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="documentation__card">
            <h3 className="documentation__card-name">Ретро-компьютеры и техника</h3>
            <img
              className="documentation__card-img"
              src="./images/Documentation/program-08.jpg"
              alt="Ретро-компьютеры и техника"
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
