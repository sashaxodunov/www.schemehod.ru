import './Protective.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Защитные устройства'
   const items = [
    {
      titleCard: 'Плавкие',
      titleFrom: 'Плавкие',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/protective/fusible',
      img: '/images/Datasheet/Protective/Inner/1.jpg',
    },
    {
      titleCard: 'Полимерные',
      titleFrom: 'Полимерные',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/protective/polymer',
      img: '/images/Datasheet/Protective/Inner/2.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронные или электротехнические компоненты, которые
              предохраняют оборудование и цепи от повреждений из-за перегрузок,
              коротких замыканий, перенапряжений, перегрева и других аварийных
              ситуаций.
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
