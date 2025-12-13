import './Microchips.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Микросхемы'
   const items = [
    {
      titleCard: 'Аналоговые',
      titleFrom: 'Аналоговые',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/microchips/analog',
      img: '/images/Datasheet/Microchips/Inner/1.jpg',
    },
    {
      titleCard: 'Логические',
      titleFrom: 'Логические',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/microchips/logical',
      img: '/images/Datasheet/Microchips/Inner/2.jpg',
    },
    {
      titleCard: 'Микроконтроллеры',
      titleFrom: 'Микроконтроллеры',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/microchips/microprocessors',
      img: '/images/Datasheet/Microchips/Inner/3.jpg',
    },
    {
      titleCard: 'Процессоры',
      titleFrom: 'Процессоры',
      titleText: 'Регулируемое сопротивление, которое позволяет точно настраивать параметры электрической цепи.',
      href: '/Datasheet/microchips/processors',
      img: '/images/Datasheet/Microchips/Inner/4.jpg',
    },
    {
      titleCard: 'Память',
      titleFrom: 'Память',
      titleText: 'Сопротивление которого уменьшается с повышением температуры.',
      href: '/Datasheet/microchips/memory',
      img: '/images/Datasheet/Microchips/Inner/5.jpg',
    },
    {
      titleCard: 'Драйверы',
      titleFrom: 'Драйверы',
      titleText: 'Сопротивление которого увеличивается с повышением температуры.',
      href: '/Datasheet/microchips/driver',
      img: '/images/Datasheet/Microchips/Inner/6.jpg',
    },
    {
      titleCard: 'Интерфейсы',
      titleFrom: 'Интерфейсы',
      titleText: 'Сопротивление которого изменяется в зависимости от приложенного напряжения.',
      href: '/Datasheet/microchips/interfaces',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
  ]

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
                        <HoverCards 
                          items={items}
                        />
    </>
  )
}
