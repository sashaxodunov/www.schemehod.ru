import './Optoelectronic.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Оптоэлектронные компоненты'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронные элементы, которые работают со светом: они преобразуют
              электрическую энергию в световую или свет в электрическую.
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
