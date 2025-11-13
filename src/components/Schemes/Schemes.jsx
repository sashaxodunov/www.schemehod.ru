import './Schemes.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Полезные схемы'

  return (
    <>
      <section className="container section__schemes">

        <header className="schemes__header">
          <h2 className="schemes__title">{title}</h2>
          <p>
            Готовые электронные схемы для любых проектов — от простых
            светодиодных индикаторов до сложных источников питания и усилителей.
            Каждая схема сопровождается подробными пояснениями и практическими
            советами по сборке и выбору компонентов, чтобы вы могли легко
            повторить её и использовать в своих проектах.
          </p>
          <p>
            Раздел будет полезен как начинающим радиолюбителям, изучающим
            основы электроники, так и опытным инженерам, ищущим готовые решения
            или вдохновение для собственных разработок. Сборки представлены в
            удобном формате: схемы, пояснения и рекомендации — всё в одном
            месте для быстрого и эффективного применения.
          </p>
        </header>

        <div className="schemes__grid">

          <a href="./datasheetMC/dhEN.html" className="schemes__card">
            <h3 className="schemes__card-name">Усилители и аудиотехника</h3>
            <img
              className="schemes__card-img"
              src="./images/Schemes/program-01.jpg"
              alt="Усилители и аудиотехника"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="schemes__card">
            <h3 className="schemes__card-name">Радиоприёмники и передатчики</h3>
            <img
              className="schemes__card-img"
              src="./images/Schemes/program-02.jpg"
              alt="Радиоприёмники и передатчики"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="schemes__card">
            <h3 className="schemes__card-name">Источники питания</h3>
            <img
              className="schemes__card-img"
              src="./images/Schemes/program-03.jpg"
              alt="Источники питания"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="schemes__card">
            <h3 className="schemes__card-name">Свет и индикаторы</h3>
            <img
              className="schemes__card-img"
              src="./images/Schemes/program-04.jpg"
              alt="Свет и индикаторы"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="schemes__card">
            <h3 className="schemes__card-name">Связь и беспроводные системы</h3>
            <img
              className="schemes__card-img"
              src="./images/Schemes/program-05.jpg"
              alt="Связь и беспроводные системы"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="schemes__card">
            <h3 className="schemes__card-name">Измерительная техника</h3>
            <img
              className="schemes__card-img"
              src="./images/Schemes/program-06.jpg"
              alt="Измерительная техника"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="schemes__card">
            <h3 className="schemes__card-name">Цифровая электроника</h3>
            <img
              className="schemes__card-img"
              src="./images/Schemes/program-07.jpg"
              alt="Цифровая электроника"
              width={260}
              height={300}
              loading={loading}
            />
          </a>
          <a href="./datasheetMC/dhEN.html" className="schemes__card">
            <h3 className="schemes__card-name">Аналоговая электроника</h3>
            <img
              className="schemes__card-img"
              src="./images/Schemes/program-08.jpg"
              alt="Аналоговая электроника"
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
