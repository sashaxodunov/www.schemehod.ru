import './К1601.scss'
import RuMCCards from '@/sections/RuMCCards'

export default () => {
  const title = 'Микросхемы серии 1601'

  const ru145Items = [
    {
      titleCard: 'К145ИК1801',
      href: '/Datasheet/microchips/ruMC/K145/k145ik1801',
    },
    {
      titleCard: 'К145ИК1807',
      href: '/Datasheet/microchips/ruMC/K145/k145ik1807',
    },
    {
      titleCard: 'К145ИК1809-К145ИК1810',
      href: '/Datasheet/microchips/ruMC/K145/k145ik1809_k145ik1810',
    },
  ]

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet__ruMC">
            <div className="section-datasheet__ruMC-list">
              <RuMCCards items={ru145Items} />
            </div>
            <div className="section-datasheet__ruMC-desc"></div>
            <p>Привет мир</p>
          </div>
        </div>
      </section>
    </>
  )
}
