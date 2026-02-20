import './Quartz.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Кварцевые и частотные элементы'
   const items = [
    {
      titleCard: 'Кварцевые',
      titleFrom: 'Кварцевые',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/quartz/quartz',
      img: '/images/Datasheet/Quartz/Inner/1.jpg',
    },
    {
      titleCard: 'Осцилляторы',
      titleFrom: 'Осцилляторы',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/quartz/oscillators',
      img: '/images/Datasheet/Quartz/Inner/2.jpg',
    },
    {
      titleCard: 'Генераторы',
      titleFrom: 'Генераторы',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/quartz/generators',
      img: '/images/Datasheet/Quartz/Inner/3.jpg',
    },
    {
      titleCard: 'Пьезоизлучатели',
      titleFrom: 'Пьезоизлучатели',
      titleText: 'Регулируемое сопротивление, которое позволяет точно настраивать параметры электрической цепи.',
      href: '/Datasheet/quartz/piezoelectric',
      img: '/images/Datasheet/Quartz/Inner/4.jpg',
    },
    {
      titleCard: 'Пьезодатчики',
      titleFrom: 'Пьезодатчики',
      titleText: 'Сопротивление которого уменьшается с повышением температуры.',
      href: '/Datasheet/quartz/piezoSensors',
      img: '/images/Datasheet/Quartz/Inner/5.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, которые создают или стабилизируют
              электрические колебания с точной частотой.
              Главная их задача — обеспечивать точный “ритм” работы электронных
              устройств.
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
