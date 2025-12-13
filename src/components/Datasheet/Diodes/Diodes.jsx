
import './Diodes.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Диоды'

  const items = [
    {
      titleCard: 'Выпрямительный',
      titleFrom: 'Выпрямительный',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/diodes/rectifier',
      img: '/images/Datasheet/Diodes/Inner/1.jpg',
    },
    {
      titleCard: 'Импульсный',
      titleFrom: 'Импульсный',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/diodes/pulse',
      img: '/images/Datasheet/Diodes/Inner/2.jpg',
    },
    {
      titleCard: 'Высокочастотные',
      titleFrom: 'Высокочастотные',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/diodes/highFrequency',
      img: '/images/Datasheet/Diodes/Inner/3.jpg',
    },
    {
      titleCard: 'Лавинный',
      titleFrom: 'Лавинный',
      titleText: 'Регулируемое сопротивление, которое позволяет точно настраивать параметры электрической цепи.',
      href: '/Datasheet/diodes/avalanche',
      img: '/images/Datasheet/Diodes/Inner/4.jpg',
    },
    {
      titleCard: 'Туннельный',
      titleFrom: 'Туннельный',
      titleText: 'Сопротивление которого уменьшается с повышением температуры.',
      href: '/Datasheet/diodes/tunnel',
      img: '/images/Datasheet/Diodes/Inner/5.jpg',
    },
    {
      titleCard: 'Стабилитроны',
      titleFrom: 'Стабилитроны',
      titleText: 'Сопротивление которого увеличивается с повышением температуры.',
      href: '/Datasheet/diodes/zener',
      img: '/images/Datasheet/Diodes/Inner/6.jpg',
    },
    {
      titleCard: 'Ганна',
      titleFrom: 'Ганна',
      titleText: 'Сопротивление которого изменяется в зависимости от приложенного напряжения.',
      href: '/Datasheet/diodes/ganna',
      img: '/images/Datasheet/Diodes/Inner/7.jpg',
    },
    {
      titleCard: 'Шоттки',
      titleFrom: 'Шоттки',
      titleText: 'Сопротивление которого изменяется в зависимости от освещённости.',
      href: '/Datasheet/diodes/schottky',
      img: '/images/Datasheet/Diodes/Inner/8.jpg',
    },
    {
      titleCard: 'TVS',
      titleFrom: 'TVS',
      titleText: 'Сопротивление которого изменяется в зависимости от освещённости.',
      href: '/Datasheet/diodes/tvs',
      img: '/images/Datasheet/Diodes/Inner/9.jpg',
    },
    {
      titleCard: 'Мост',
      titleFrom: 'Мост',
      titleText: 'Сопротивление которого изменяется в зависимости от освещённости.',
      href: '/Datasheet/diodes/bridge',
      img: '/images/Datasheet/Diodes/Inner/10.jpg',
    },
    {
      titleCard: 'Сборка',
      titleFrom: 'Сборка',
      titleText: 'Сопротивление которого изменяется в зависимости от освещённости.',
      href: '/Datasheet/diodes/assembly',
      img: '/images/Datasheet/Diodes/Inner/11.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который позволяет электрическому току
              течь только в одном направлении. Он состоит из полупроводникового
              материала с двумя контактами: анодом и катодом. Главная особенность
              диода — «односторонняя дверь» для электричества: ток проходит
              свободно в прямом направлении и почти не течёт в обратном. Это
              свойство делает диоды незаменимыми для выпрямления переменного тока,
              защиты схем от неправильного подключения питания, а также для
              генерации и управления сигналами в электронных устройствах.
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
