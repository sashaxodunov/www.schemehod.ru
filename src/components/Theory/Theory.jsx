import './Theory.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Теория по электронике'

  return (
    <>
      <section className="section-theory">
        <div className="container">
          <h2 className="section-theory-title">{title}</h2>
          <div className="section-theory-desc">
            <p>
              Раздел, посвящённый изучению основ и ключевых принципов работы
              электронных устройств и систем.
            </p>
          </div>
          <div className="section-theory-btn-wrapper">
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
