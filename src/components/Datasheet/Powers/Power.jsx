import './Power.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Источники питания'
   const items = [
    {
      titleCard: 'Аккумуляторы',
      titleFrom: 'Аккумуляторы',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/power/rectifier',
      img: '/images/Datasheet/Power/Inner/1.jpg',
    },
    {
      titleCard: 'Батарейки',
      titleFrom: 'Батарейки',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/power/pulse',
      img: '/images/Datasheet/Power/Inner/2.jpg',
    },
    {
      titleCard: 'Суперконденсаторы',
      titleFrom: 'Суперконденсаторы',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/power/highFrequency',
      img: '/images/Datasheet/Power/Inner/3.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронные компоненты или устройства, которые обеспечивают
              электрической энергией другие элементы схемы, подавая им необходимое
              напряжение и ток.
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
                        <HoverCards 
                          items={items}
                        />
    </>
  )
}
