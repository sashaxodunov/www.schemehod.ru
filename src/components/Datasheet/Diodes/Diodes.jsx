
import './Diodes.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Диоды'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который позволяет электрическому току
              течь только в одном направлении. Он состоит из полупроводникового
              материала с двумя контактами: анодом и катодом. Главная особенность
              диода — «односторонняя дверь» для электричества: ток проходит
              свободно в прямом направлении и почти не течёт в обратном. Это
              свойство делает диоды незаменимыми для выпрямления переменного тока,
              защиты схем от неправильного подключения питания, а также для
              генерации и управления сигналами в электронных устройствах.
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
