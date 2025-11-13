import './Resistors.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Резисторы'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-сalculator-title">{title}</h2>
          <div className="section-сalculator-desc">
            <p>
              Это электронный компонент, который ограничивает или регулирует
              электрический ток в цепи, превращая часть электрической энергии
              в тепло. один из самых базовых и распространённых элементов электроники.
              Его основная функция — создавать электрическое сопротивление,
              измеряемое в Омах (Ω). Благодаря этому он контролирует, сколько
              тока проходит через участок цепи при заданном напряжении
              (по закону Ома: I = U / R).
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
