import './Thyristors.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Тиристоры'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который работает как управляемый ключ:
              он может включать ток при подаче управляющего импульса и оставаться
              включённым, пока ток не упадёт ниже определённого уровня.
            </p>
          </div>
          <div className="section-datasheet-btn-wrapper">
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
