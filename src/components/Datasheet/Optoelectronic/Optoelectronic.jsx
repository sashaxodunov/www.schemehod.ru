import './Optoelectronic.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Оптоэлектронные компоненты'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-сalculator-title">{title}</h2>
          <div className="section-сalculator-desc">
            <p>
              Это электронные элементы, которые работают со светом: они преобразуют
              электрическую энергию в световую или свет в электрическую.
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
