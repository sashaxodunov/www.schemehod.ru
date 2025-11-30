import './Resistors.scss'
import HoverCards from '@/sections/HoverCards'


export default (props) => {
  const { url, className, loading = 'lazy' } = props

  const title = 'Резисторы'

  const items = [
    {
      titleCard: 'Резистор',
      titleFrom: 'Резистор',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/resistors/res',
      img: '/images/Datasheet/Resistors/Inner/1.jpg',
    },
    {
      titleCard: 'SMD',
      titleFrom: 'SMD',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/resistors/smd',
      img: '/images/Datasheet/Resistors/Inner/2.jpg',
    },
    {
      titleCard: 'Переменный',
      titleFrom: 'Переменный',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/resistors/variable',
      img: '/images/Datasheet/Resistors/Inner/3.jpg',
    },
    {
      titleCard: 'Подстроечный',
      titleFrom: 'Подстроечный',
      titleText: 'Регулируемое сопротивление, которое позволяет точно настраивать параметры электрической цепи.',
      href: '/Datasheet/resistors/substructures',
      img: '/images/Datasheet/Resistors/Inner/4.jpg',
    },
    {
      titleCard: 'NTC',
      titleFrom: 'NTC',
      titleText: 'Сопротивление которого уменьшается с повышением температуры.',
      href: '/Datasheet/resistors/ntc',
      img: '/images/Datasheet/Resistors/Inner/5.jpg',
    },
    {
      titleCard: 'PTC',
      titleFrom: 'PTC',
      titleText: 'Сопротивление которого увеличивается с повышением температуры.',
      href: '/Datasheet/resistors/ptc',
      img: '/images/Datasheet/Resistors/Inner/6.jpg',
    },
    {
      titleCard: 'Варистор',
      titleFrom: 'Варистор',
      titleText: 'Сопротивление которого изменяется в зависимости от приложенного напряжения.',
      href: '/Datasheet/resistors/varistor',
      img: '/images/Datasheet/Resistors/Inner/7.jpg',
    },
    {
      titleCard: 'Фоторезистор',
      titleFrom: 'Фоторезистор',
      titleText: 'Сопротивление которого изменяется в зависимости от освещённости.',
      href: '/Datasheet/resistors/photoresistor',
      img: '/images/Datasheet/Resistors/Inner/8.jpg',
    },
  ]


  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который ограничивает или регулирует
              электрический ток в цепи, превращая часть электрической энергии
              в тепло. один из самых базовых и распространённых элементов электроники.
              Его основная функция — создавать электрическое сопротивление,
              измеряемое в Омах (Ω). Благодаря этому он контролирует, сколько
              тока проходит через участок цепи при заданном напряжении
              (по закону Ома: I = U / R).
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
