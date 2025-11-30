import './Sensor.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Датчики'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который преобразует физическое явление
              (свет, температуру, давление, движение и т. д.) в электрический
              сигнал, понятный электронике. Датчик (или сенсор) служит как
              «орган чувств» для электронных устройств. Он воспринимает изменения
              окружающей среды и превращает их в электрические величины — ток,
              напряжение или частоту. Это позволяет электронике реагировать на
              внешний мир: измерять, управлять, включать или анализировать процессы.
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
