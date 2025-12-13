import './Transistors.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Транзисторы'
   const items = [
    {
      titleCard: 'NPN-транзистор',
      titleFrom: 'NPN-транзистор',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/transistors/npn',
      img: '/images/Datasheet/Transistors/Inner/1.jpg',
    },
    {
      titleCard: 'PNP-транзистор',
      titleFrom: 'PNP-транзистор',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/transistors/pnp',
      img: '/images/Datasheet/Transistors/Inner/2.jpg',
    },
    {
      titleCard: 'MOSFET',
      titleFrom: 'MOSFET',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/transistors/mosfet',
      img: '/images/Datasheet/Transistors/Inner/3.jpg',
    },
    {
      titleCard: 'JFET',
      titleFrom: 'JFET',
      titleText: 'Регулируемое сопротивление, которое позволяет точно настраивать параметры электрической цепи.',
      href: '/Datasheet/transistors/jfet',
      img: '/images/Datasheet/Transistors/Inner/4.jpg',
    },
    {
      titleCard: 'IGBT',
      titleFrom: 'IGBT',
      titleText: 'Сопротивление которого уменьшается с повышением температуры.',
      href: '/Datasheet/transistors/igbt',
      img: '/images/Datasheet/Transistors/Inner/5.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который усиливает электрические сигналы
              или управляет током в цепи, действуя как электронный переключатель
              или усилитель. Транзистор — это основа всей современной электроники.
              Он изготавливается из полупроводникового материала (обычно кремния)
              и имеет три вывода, через которые протекает ток.
              Главная идея: маленький управляющий ток или напряжение на одном
              выводе контролирует большой ток через другие два вывода.
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
