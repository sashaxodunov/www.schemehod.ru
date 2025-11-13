import './Calculator.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Онлайн калькуляторы'

  return (
    <>
      <section className="section-сalculator">
        <div className="container">
          <h2 className="section-сalculator-title">{title}</h2>
          <div className="section-сalculator-desc">
            <p>
              Быстро и точно! Введите данные — получите результат за секунды.
              Математика, инженерные расчеты, электроника — всё в одном удобном
              онлайн-инструменте без установки программ.
            </p>
          </div>
          <div className="section-сalculator-btn-wrapper">
            <a
              className="button"
              href="#!"
            >ПОСЧИТАТЬ
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
