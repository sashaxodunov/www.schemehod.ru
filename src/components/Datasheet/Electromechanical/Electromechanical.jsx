import './Electromechanical.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Электромеханические компоненты'
   const items = [
    {
      titleCard: 'Переключатели',
      titleFrom: 'Переключатели',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/electromechanical/switch',
      img: '/images/Datasheet/Electromechanical/Inner/1.jpg',
    },
    {
      titleCard: 'Кнопки',
      titleFrom: 'Кнопки',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/electromechanical/buttons',
      img: '/images/Datasheet/Electromechanical/Inner/2.jpg',
    },
    {
      titleCard: 'Реле',
      titleFrom: 'Реле',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/electromechanical/relayElectromec',
      img: '/images/Datasheet/Electromechanical/Inner/3.jpg',
    },
    {
      titleCard: 'Трердотельные',
      titleFrom: 'Твердотельные',
      titleText: 'Регулируемое сопротивление, которое позволяет точно настраивать параметры электрической цепи.',
      href: '/Datasheet/electromechanical/relaySolid',
      img: '/images/Datasheet/Electromechanical/Inner/4.jpg',
    },
    {
      titleCard: 'Разъемы',
      titleFrom: 'Разъемы',
      titleText: 'Сопротивление которого уменьшается с повышением температуры.',
      href: '/Datasheet/electromechanical/openings',
      img: '/images/Datasheet/Electromechanical/Inner/5.jpg',
    },
    {
      titleCard: 'Клемники',
      titleFrom: 'Клемники',
      titleText: 'Сопротивление которого увеличивается с повышением температуры.',
      href: '/Datasheet/electromechanical/terminal',
      img: '/images/Datasheet/Electromechanical/Inner/6.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это устройства, которые соединяют электрические и механические функции.
              Они могут превращать электрическую энергию в движение или наоборот —
              движение в электрический сигнал. Классические примеры — реле,
              электродвигатели, соленоиды и переключатели.
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
