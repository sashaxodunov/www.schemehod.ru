import './Power.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Источники питания'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронные компоненты или устройства, которые обеспечивают
              электрической энергией другие элементы схемы, подавая им необходимое
              напряжение и ток.
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
