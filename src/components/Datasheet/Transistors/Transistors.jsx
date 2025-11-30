import './Transistors.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Транзисторы'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который усиливает электрические сигналы
              или управляет током в цепи, действуя как электронный переключатель
              или усилитель. Транзистор — это основа всей современной электроники.
              Он изготавливается из полупроводникового материала (обычно кремния)
              и имеет три вывода, через которые протекает ток.
              Главная идея: маленький управляющий ток или напряжение на одном
              выводе контролирует большой ток через другие два вывода.
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
