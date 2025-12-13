import './Lamps.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Лампы'
   const items = [
    {
      titleCard: 'Газоразрядные',
      titleFrom: 'Газоразрядные',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/lamps/gasDischargers',
      img: '/images/Datasheet/lamps/Inner/1.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который управляет потоком электрического
              тока с помощью вакуума или газа внутри стеклянного корпуса. По сути,
              она может усиливать, генерировать или переключать электрические сигналы.
              Внутри лампы находятся электроды: катод (источник электронов), анод
              (приёмник электронов) и иногда сетки для управления потоком.
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
