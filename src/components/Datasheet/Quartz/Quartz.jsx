import './Quartz.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Кварцевые и частотные элементы'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-сalculator-title">{title}</h2>
          <div className="section-сalculator-desc">
            <p>
              Это электронный компонент, которые создают или стабилизируют
              электрические колебания с точной частотой.
              Главная их задача — обеспечивать точный “ритм” работы электронных
              устройств.
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
