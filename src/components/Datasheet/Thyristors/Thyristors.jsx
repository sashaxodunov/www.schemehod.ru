import './Thyristors.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Тиристоры'

  const items = [
    {
      titleCard: 'Тиристоры',
      titleFrom: 'Тиристоры',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/thyristors/scr',
      img: '/images/Datasheet/Thyristors/Inner/1.jpg',
    },
    {
      titleCard: 'Симисторы',
      titleFrom: 'Симисторы',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/thyristors/triac',
      img: '/images/Datasheet/Thyristors/Inner/2.jpg',
    },
    {
      titleCard: 'Динисторы',
      titleFrom: 'Динисторы',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/thyristors/dinistors',
      img: '/images/Datasheet/Thyristors/Inner/3.jpg',
    },
  ]


  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который работает как управляемый ключ:
              он может включать ток при подаче управляющего импульса и оставаться
              включённым, пока ток не упадёт ниже определённого уровня.
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
