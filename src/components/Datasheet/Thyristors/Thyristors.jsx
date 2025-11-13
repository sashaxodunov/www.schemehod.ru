import './Thyristors.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Тиристоры'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-сalculator-title">{title}</h2>
          <div className="section-сalculator-desc">
            <p>
              Это электронный компонент, который работает как управляемый ключ:
              он может включать ток при подаче управляющего импульса и оставаться
              включённым, пока ток не упадёт ниже определённого уровня.
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
