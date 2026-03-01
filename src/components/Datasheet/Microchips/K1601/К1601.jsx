import './К1601.scss'
import RuMCCards from '@/sections/RuMCCards'

export default () => {
  const title = 'Микросхемы серии 1601'

  const ru1601Items = [
    {
      titleCard:
        'К1601РР1, КР1601РР1, К1601РР11, КР1601РР11, К1601РР12, КР1601РР12',
      href: '/Datasheet/microchips/ruMC/K1601/k1601pp1',
    },
  ]

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet__ruMC">
            <div className="section-datasheet__ruMC-list">
              <RuMCCards items={ru1601Items} />
            </div>
            <div className="section-datasheet__ruMC-desc"></div>
            <p></p>
          </div>
        </div>
      </section>
    </>
  )
}
