import './Antennas.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Антенны'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который преобразует электрические сигналы
              в радиоволны и наоборот. Она служит «мостом» между проводной
              электрической цепью и электромагнитными волнами в пространстве.
              Главная особенность антенны — способность излучать радиосигналы для
              передачи данных или принимать их из окружающего пространства. Форму,
              размеры и материалы антенны выбирают так, чтобы она эффективно работала
              на нужной частоте.
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
