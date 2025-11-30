import './Quartz.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Кварцевые и частотные элементы'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, которые создают или стабилизируют
              электрические колебания с точной частотой.
              Главная их задача — обеспечивать точный “ритм” работы электронных
              устройств.
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
