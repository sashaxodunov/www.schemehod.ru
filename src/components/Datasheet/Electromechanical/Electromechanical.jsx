import './Electromechanical.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Электромеханические компоненты'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-сalculator-title">{title}</h2>
          <div className="section-сalculator-desc">
            <p>
              Это устройства, которые соединяют электрические и механические функции.
              Они могут превращать электрическую энергию в движение или наоборот —
              движение в электрический сигнал. Классические примеры — реле,
              электродвигатели, соленоиды и переключатели.
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
