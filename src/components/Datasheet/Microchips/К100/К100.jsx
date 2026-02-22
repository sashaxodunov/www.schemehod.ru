import './100.scss'

export default () => {
  const title = 'Микросхемы серии 100'

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>Привет мир</p>
          </div>
          <div className="section-datasheet-btn-wrapper">
            <a className="button" href="#!">
              ПОЧИТАТЬ
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
