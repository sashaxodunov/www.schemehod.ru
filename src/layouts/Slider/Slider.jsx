import './Slider.scss'

export default () => {



  return (
    <>
      <div className="carousel">
        <div className="carousel-track">
          <div className="carousel-item"><img src="/public/images/Datasheet/diode.jpg" alt="1" /></div>
          <div className="carousel-item"><img src="/public/images/Datasheet//microcircuits.jpg" alt="2" /></div>
          <div className="carousel-item"><img src="/public/images/Datasheet//lamps.jpg" alt="3" /></div>
        </div>

        <button className="carousel-btn prev">‹</button>
        <button className="carousel-btn next">›</button>
      </div>
    </>
  )
}
