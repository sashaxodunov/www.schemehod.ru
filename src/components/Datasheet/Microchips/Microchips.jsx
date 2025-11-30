import './Microchips.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Микросхемы'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, в котором на одном кристалле полупроводникового
              материала объединены десятки, тысячи или миллиарды миниатюрных электронных
              элементов — транзисторов, диодов, резисторов и конденсаторов.
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
