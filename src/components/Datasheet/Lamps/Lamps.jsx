import './Lamps.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Лампы'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-сalculator-title">{title}</h2>
          <div className="section-сalculator-desc">
            <p>
              Это электронный компонент, который управляет потоком электрического
              тока с помощью вакуума или газа внутри стеклянного корпуса. По сути,
              она может усиливать, генерировать или переключать электрические сигналы.
              Внутри лампы находятся электроды: катод (источник электронов), анод
              (приёмник электронов) и иногда сетки для управления потоком.
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
