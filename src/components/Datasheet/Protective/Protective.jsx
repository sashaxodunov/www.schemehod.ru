import './Protective.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Защитные устройства'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронные или электротехнические компоненты, которые
              предохраняют оборудование и цепи от повреждений из-за перегрузок,
              коротких замыканий, перенапряжений, перегрева и других аварийных
              ситуаций.
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
