import './Microchips.scss'
import HoverCards from '@/sections/HoverCards'
import RuMCCards from '@/sections/RuMCCards'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Микросхемы'
  const ruTitle = 'Отечественные микросхемы'
  const items = [
    {
      titleCard: 'Аналоговые',
      titleFrom: 'Аналоговые',
      titleText:
        'Это интегральные схемы, предназначенные для обработки непрерывных электрических сигналов (напряжения и тока), которые могут принимать любые значения в заданном диапазоне',
      href: '/Datasheet/microchips/analog',
      img: '/images/Datasheet/Microchips/Inner/1.jpg',
    },
    {
      titleCard: 'Логические',
      titleFrom: 'Логические',
      titleText:
        'Это интегральные схемы, предназначенные для обработки дискретных (цифровых) сигналов, принимающих два состояния: "0" и "1".',
      href: '/Datasheet/microchips/logical',
      img: '/images/Datasheet/Microchips/Inner/2.jpg',
    },
    {
      titleCard: 'Микроконтроллеры',
      titleFrom: 'Микроконтроллеры',
      titleText:
        'Это интегральные схемы, объединяющие в одном корпусе процессор, память и периферийные модули ввода-вывода для управления электронными устройствами.',
      href: '/Datasheet/microchips/microprocessors',
      img: '/images/Datasheet/Microchips/Inner/3.jpg',
    },
    {
      titleCard: 'Процессоры',
      titleFrom: 'Процессоры',
      titleText:
        'Это основное вычислительное устройство, которое выполняет программы, обрабатывает данные и управляет работой всей системы.',
      href: '/Datasheet/microchips/processors',
      img: '/images/Datasheet/Microchips/Inner/4.jpg',
    },
    {
      titleCard: 'Память',
      titleFrom: 'Память',
      titleText:
        'Это интегральные схемы, предназначенные для хранения данных и программ.',
      href: '/Datasheet/microchips/memory',
      img: '/images/Datasheet/Microchips/Inner/5.jpg',
    },
    {
      titleCard: 'Драйверы',
      titleFrom: 'Драйверы',
      titleText:
        'Это интегральные схемы, предназначенные для управления нагрузкой или силовыми элементами (транзисторами, реле, светодиодами, двигателями и др.).',
      href: '/Datasheet/microchips/driver',
      img: '/images/Datasheet/Microchips/Inner/6.jpg',
    },
    {
      titleCard: 'Интерфейсы',
      titleFrom: 'Интерфейсы',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/interfaces',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
  ]

  const ruItems = [
    {
      titleCard: '100',
      titleFrom: '100',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '118',
      titleFrom: '118',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '130',
      titleFrom: '130',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '131',
      titleFrom: '131',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '133',
      titleFrom: '133',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '134',
      titleFrom: '134',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '140',
      titleFrom: '140',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '142',
      href: '/Datasheet/microchips/ruMC/k142',
    },
    {
      titleCard: '145',
      href: '/Datasheet/microchips/ruMC/k145',
    },
    {
      titleCard: '157',
      titleFrom: '157',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '174',
      titleFrom: '174',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '176',
      titleFrom: '176',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '224',
      titleFrom: '224',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '235',
      titleFrom: '235',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '237',
      titleFrom: '237',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '500',
      titleFrom: '500',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '530',
      titleFrom: '530',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '531',
      titleFrom: '531',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '533',
      titleFrom: '533',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '537',
      titleFrom: '537',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '541',
      titleFrom: '541',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '544',
      titleFrom: '544',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '553',
      titleFrom: '553',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '554',
      titleFrom: '554',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '555',
      titleFrom: '555',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '556',
      titleFrom: '556',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '561',
      titleFrom: '561',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '564',
      titleFrom: '564',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '565',
      titleFrom: '565',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '573',
      titleFrom: '573',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '574',
      titleFrom: '574',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '580',
      titleFrom: '580',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '588',
      titleFrom: '588',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '589',
      titleFrom: '589',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1006',
      titleFrom: '1006',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1500',
      titleFrom: '1500',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1533',
      titleFrom: '1533',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1561',
      titleFrom: '1561',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1564',
      titleFrom: '1564',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1601',
      href: '/Datasheet/microchips/ruMC/k1601',
    },
    {
      titleCard: '1801',
      titleFrom: '1801',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1810',
      titleFrom: '1810',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1816',
      titleFrom: '1816',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1821',
      titleFrom: '1821',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1830',
      titleFrom: '1830',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1878',
      titleFrom: '1878',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1883',
      titleFrom: '1883',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1901',
      titleFrom: '1901',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1967',
      titleFrom: '1967',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
    {
      titleCard: '1986',
      titleFrom: '1986',
      titleText:
        'Это интегральные схемы, предназначенные для обмена данными между различными устройствами или узами системы.',
      href: '/Datasheet/microchips/100',
      img: '/images/Datasheet/Microchips/Inner/7.jpg',
    },
  ]

  return (
    <>
      <section className="section-resistors">
        <div className="container">
          <h2 className="section-datasheet-title">{title}</h2>
          <div className="section-datasheet-desc">
            <p>
              Это электронный компонент, в котором на одном кристалле
              полупроводникового материала объединены десятки, тысячи или
              миллиарды миниатюрных электронных элементов — транзисторов,
              диодов, резисторов и конденсаторов.
            </p>
          </div>
          <div className="section-datasheet-btn-wrapper">
            <a className="button" href="#!">
              ПОЧИТАТЬ
            </a>
          </div>
        </div>

        <HoverCards items={items} />

        <div className="container">
          <h2 className="section-datasheet-title">{ruTitle}</h2>
          <div className="section-datasheet-desc">
            <p>
              Этот раздел посвящён развитию и современному состоянию
              микроэлектроники, созданной в нашей стране. Здесь собраны
              материалы о ключевых этапах становления отрасли — от первых
              интегральных схем, разработанных в научных центрах вроде НИИМЭ и
              производственных объединений наподобие Ангстрем, до современных
              решений, выпускаемых предприятиями группы Микрон.
            </p>
          </div>
        </div>

        <RuMCCards items={ruItems} />
      </section>
    </>
  )
}
