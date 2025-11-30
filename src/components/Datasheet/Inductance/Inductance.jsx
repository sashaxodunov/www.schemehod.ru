import './Inductance.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Индуктивности'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который создаёт сопротивление изменениям
              электрического тока с помощью магнитного поля. Обычно она представляет
              собой катушку провода, намотанную на сердечник из воздуха или ферромагнитного
              материала.
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
