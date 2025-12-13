import './Sensor.scss'
import HoverCards from '@/sections/HoverCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Датчики'
   const items = [
    {
      titleCard: 'Температурные',
      titleFrom: 'Температурные',
      titleText: 'Это пассивный электрический компонент, предназначенный для ограничения или регулирования потока электрического тока в цепи.', 
      href: '/Datasheet/sensor/temperature',
      img: '/images/Datasheet/Sensor/Inner/1.jpg',
    },
    {
      titleCard: 'Световые',
      titleFrom: 'Световые',
      titleText: 'Это тип резистора, предназначенный для поверхностного монтажа на печатной плате.',
      href: '/Datasheet/sensor/sveta',
      img: '/images/Datasheet/Sensor/Inner/2.jpg',
    },
    {
      titleCard: 'Давления',
      titleFrom: 'Давления',
      titleText: 'Сопротивление которого можно изменять в пределах определённого диапазона.',
      href: '/Datasheet/sensor/pressure',
      img: '/images/Datasheet/Sensor/Inner/3.jpg',
    },
    {
      titleCard: 'Ультразвуковые',
      titleFrom: 'Ультразвуковые',
      titleText: 'Регулируемое сопротивление, которое позволяет точно настраивать параметры электрической цепи.',
      href: '/Datasheet/sensor/ultrasonic',
      img: '/images/Datasheet/Sensor/Inner/4.jpg',
    },
    {
      titleCard: 'Магнитные',
      titleFrom: 'Магнитные',
      titleText: 'Сопротивление которого уменьшается с повышением температуры.',
      href: '/Datasheet/sensor/magnetic',
      img: '/images/Datasheet/Sensor/Inner/5.jpg',
    },
    {
      titleCard: 'Газа',
      titleFrom: 'Газа',
      titleText: 'Сопротивление которого увеличивается с повышением температуры.',
      href: '/Datasheet/sensor/gas',
      img: '/images/Datasheet/Sensor/Inner/6.jpg',
    },
    {
      titleCard: 'Влажности',
      titleFrom: 'Влажности',
      titleText: 'Сопротивление которого изменяется в зависимости от приложенного напряжения.',
      href: '/Datasheet/sensor/humidity',
      img: '/images/Datasheet/Sensor/Inner/7.jpg',
    },
    {
      titleCard: 'Движения',
      titleFrom: 'Движения',
      titleText: 'Сопротивление которого изменяется в зависимости от освещённости.',
      href: '/Datasheet/sensor/movements',
      img: '/images/Datasheet/Sensor/Inner/8.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, который преобразует физическое явление
              (свет, температуру, давление, движение и т. д.) в электрический
              сигнал, понятный электронике. Датчик (или сенсор) служит как
              «орган чувств» для электронных устройств. Он воспринимает изменения
              окружающей среды и превращает их в электрические величины — ток,
              напряжение или частоту. Это позволяет электронике реагировать на
              внешний мир: измерять, управлять, включать или анализировать процессы.
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
