import './Inductance.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { url, className, loading = 'lazy' } = props

  const title = 'Индуктивности'

  const items = [
    {
      titleCard: 'Катушки',
      titleFrom: 'Катушки',
      titleText:
        'Это пассивный электрический компонент, способный накапливать и отдавать электрический заряд.',
      href: '/Datasheet/inductances/inductor',
      img: '/images/Datasheet/Inductance/Inner/1.jpg',
    },
    {
      titleCard: 'Дроссели',
      titleFrom: 'Дроссели',
      titleText:
        'Это электронный компонент, который накапливает электрическую энергию в электрическом поле между двумя проводящими обкладками, разделёнными диэлектрической плёнкой.',
      href: '/Datasheet/inductances/throttle',
      img: '/images/Datasheet/Inductance/Inner/2.jpg',
    },
    {
      titleCard: 'Трансформаторы',
      titleFrom: 'Трансформаторы',
      titleText:
        'Это тип электронного компонента, в котором стекло служит основным диэлектрическим материалом.',
      href: '/Datasheet/inductances/transformers',
      img: '/images/Datasheet/Inductance/Inner/3.jpg',
    },
    {
      titleCard: 'Автотрансфор',
      titleFrom: 'Автотрансфор',
      titleText:
        'Это электрический конденсатор, в котором диэлектриком служит листовая слюда (мусковит, флогопит), расщеплённая на тонкие пластинки (до 0,01 мм)',
      href: '/Datasheet/inductances/autotransformer',
      img: '/images/Datasheet/Inductance/Inner/4.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который создаёт сопротивление
              изменениям электрического тока с помощью магнитного поля. Обычно
              она представляет собой катушку провода, намотанную на сердечник из
              воздуха или ферромагнитного материала.
            </p>
          </div>
          <div className="section-datasheet-btn-wrapper">
            <a className="button" href="#!">
              ПОЧИТАТЬ
            </a>
          </div>
        </div>
      </section>

      <HoverCards items={items} />
    </>
  )
}
