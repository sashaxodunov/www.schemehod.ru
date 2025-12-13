import './Optoelectronic.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Оптоэлектронные компоненты'
   const items = [
    {
      titleCard: 'Светодиоды',
      titleFrom: 'Светодиоды',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/diodes/rectifier',
      img: '/images/Datasheet/Diodes/Inner/1.jpg',
    },
    {
      titleCard: 'Фотодиоды',
      titleFrom: 'Фотодиоды',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/diodes/pulse',
      img: '/images/Datasheet/Diodes/Inner/2.jpg',
    },
    {
      titleCard: 'Лазеры',
      titleFrom: 'Лазеры',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/diodes/highFrequency',
      img: '/images/Datasheet/Diodes/Inner/3.jpg',
    },
    {
      titleCard: 'Оптопары',
      titleFrom: 'Оптопары',
      titleText: 'Регулируемое сопротивление, которое позволяет точно настраивать параметры электрической цепи.',
      href: '/Datasheet/diodes/avalanche',
      img: '/images/Datasheet/Diodes/Inner/4.jpg',
    },
    {
      titleCard: 'Дисплеи',
      titleFrom: 'Дисплеи',
      titleText: 'Сопротивление которого уменьшается с повышением температуры.',
      href: '/Datasheet/diodes/tunnel',
      img: '/images/Datasheet/Diodes/Inner/5.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронные элементы, которые работают со светом: они преобразуют
              электрическую энергию в световую или свет в электрическую.
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
