import './Capacitor.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Конденсаторы'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-сalculator-title">{title}</h2>
          <div className="section-сalculator-desc">
            <p>
              Это электронный компонент, который умеет накапливать электрическую
              энергию в виде электрического поля между двумя проводящими пластинами,
              разделёнными диэлектриком (изоляционным материалом). Главная особенность
              конденсатора — способность «запоминать» заряд и быстро отдавать его
              обратно в цепь. Это свойство делает конденсаторы полезными для сглаживания
              колебаний напряжения, фильтрации сигналов, временных задержек и
              накопления энергии для кратковременной подзарядки устройств.
            </p>
          </div>
          <div className="section-сalculator-btn-wrapper">
            <a
              className="button"
              href="#!"
            >ПОЧИТАТЬ
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
