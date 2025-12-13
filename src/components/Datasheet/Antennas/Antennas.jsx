import './Antennas.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Антенны'
  
   const items = [
    {
      titleCard: 'Проволочные',
      titleFrom: 'Проволочные',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/Antennas/wireOnes',
      img: '/images/Datasheet/Antennas/Inner/1.jpg',
    },
    {
      titleCard: 'Печатные',
      titleFrom: 'Печатные',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/antennas/printed',
      img: '/images/Datasheet/Antennas/Inner/2.jpg',
    },
    {
      titleCard: 'Интегрированные',
      titleFrom: 'Интегрированные',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/antennas/integrated',
      img: '/images/Datasheet/Antennas/Inner/3.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который преобразует электрические сигналы
              в радиоволны и наоборот. Она служит «мостом» между проводной
              электрической цепью и электромагнитными волнами в пространстве.
              Главная особенность антенны — способность излучать радиосигналы для
              передачи данных или принимать их из окружающего пространства. Форму,
              размеры и материалы антенны выбирают так, чтобы она эффективно работала
              на нужной частоте.
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
