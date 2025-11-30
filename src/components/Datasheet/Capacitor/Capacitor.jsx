import './Capacitor.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { url, className, loading = 'lazy' } = props

  const title = 'Конденсаторы'

  const items = [
    {
      titleCard: 'Керамические',
      titleFrom: 'Керамические',
      titleText: 'Это пассивный электрический компонент, способный накапливать и отдавать электрический заряд.', 
      href: '/Datasheet/capacitor/ceramic',
      img: '/images/Datasheet/Capacitor/Inner/1.jpg',
    },
    {
      titleCard: 'Пленочные',
      titleFrom: 'Пленочные',
      titleText: 'Это электронный компонент, который накапливает электрическую энергию в электрическом поле между двумя проводящими обкладками, разделёнными диэлектрической плёнкой.',
      href: '/Datasheet/capacitor/film',
      img: '/images/Datasheet/Capacitor/Inner/2.jpg',
    },
    {
      titleCard: 'Стеклянные',
      titleFrom: 'Стеклянные',
      titleText: 'Это тип электронного компонента, в котором стекло служит основным диэлектрическим материалом.',
      href: '/Datasheet/capacitor/glass',
      img: '/images/Datasheet/Capacitor/Inner/3.jpg',
    },
    {
      titleCard: 'Слюдяные',
      titleFrom: 'Слюдяные',
      titleText: 'Это электрический конденсатор, в котором диэлектриком служит листовая слюда (мусковит, флогопит), расщеплённая на тонкие пластинки (до 0,01 мм)',
      href: '/Datasheet/capacitor/micaceous',
      img: '/images/Datasheet/Capacitor/Inner/4.jpg',
    },
    {
      titleCard: 'Электролитические',
      titleFrom: 'Электролитические',
      titleText: 'Это тип конденсатора, в котором в качестве одной из обкладок используется электролит для увеличения ёмкости.',
      href: '/Datasheet/capacitor/electrolytic',
      img: '/images/Datasheet/Capacitor/Inner/5.jpg',
    },
    {
      titleCard: 'Танталовые',
      titleFrom: 'Танталовые',
      titleText: 'Подтип электролитического конденсатора, изготавливается из металлического тантала, выполняющего роль анода, покрытого изолирующим оксидным слоем.',
      href: '/Datasheet/capacitor/tantalum',
      img: '/images/Datasheet/Capacitor/Inner/6.jpg',
    },
    {
      titleCard: 'Подстроечные',
      titleFrom: 'Подстроечные',
      titleText: 'Это тип конденсатора, у которого ёмкость можно изменять в определённых пределах для точной настройки параметров цепи.',
      href: '/Datasheet/capacitor/substructures',
      img: '/images/Datasheet/Capacitor/Inner/7.jpg',
    },
    {
      titleCard: 'Варикапы',
      titleFrom: 'Варикапы',
      titleText: 'Сопротивление которого изменяется в зависимости от освещённости.',
      href: '/Datasheet/capacitor/varicaps',
      img: '/images/Datasheet/Capacitor/Inner/8.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который умеет накапливать электрическую
              энергию в виде электрического поля между двумя проводящими пластинами,
              разделёнными диэлектриком (изоляционным материалом). Главная особенность
              конденсатора — способность «запоминать» заряд и быстро отдавать его
              обратно в цепь. Это свойство делает конденсаторы полезными для сглаживания
              колебаний напряжения, фильтрации сигналов, временных задержек и
              накопления энергии для кратковременной подзарядки устройств.
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
