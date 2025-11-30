import './HoverCards.scss'

export default (props) => {
  const { className, items } = props

  const dirOpen = {
    fromBottom: 'from-bottom',
    fromTop: 'from-top',
    fromLeft: 'from-left',
    fromRight: 'from-right',
  }

  function getRandomDirection() {
    const keys = Object.keys(dirOpen)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return dirOpen[randomKey]
  }

  return (
    <div className="container card__body">
      <div className="demo-container">
        {items.map(({ titleCard, titleFrom, titleText, href, img }, index) => (
          <a href={href} key={index}>
            <div className={`card ${getRandomDirection()}`} 
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            key={index}>
              <div className="front-content">{titleCard}</div>
              <div className="content">
                <p className="heading">{titleFrom}</p>
                <p>{titleText}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )

  // return (
  //   <div className="container card__body">
  //     <div className="demo-container">
  //       <div className={`card ${getRandomDirection()}`}>
  //         <div className="front-content">{titleCard}</div>
  //         <div className="content">
  //           <p className="heading">{titleFrom}</p>
  //           <p>
  //             {titleText}
  //           </p>
  //         </div>
  //       </div>

  //       <div className={`card ${getRandomDirection()}`}>
  //         <div className="front-content">Сверху ↓</div>
  //         <div className="content">
  //           <p className="heading">From Top</p>
  //           <p>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting
  //             industry.
  //           </p>
  //         </div>
  //       </div>

  //       <div className={`card ${getRandomDirection()}`}>
  //         <div className="front-content">Слева →</div>
  //         <div className="content">
  //           <p className="heading">From Left</p>
  //           <p>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting
  //             industry.
  //           </p>
  //         </div>
  //       </div>

  //       <div className={`card ${getRandomDirection()}`}>
  //         <div className="front-content">Справа ←</div>
  //         <div className="content">
  //           <p className="heading">From Right</p>
  //           <p>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting
  //             industry.
  //           </p>
  //         </div>
  //       </div>

  //       <div className={`card ${getRandomDirection()}`}>
  //         <div className="front-content">Справа ←</div>
  //         <div className="content">
  //           <p className="heading">From Right</p>
  //           <p>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting
  //             industry.
  //           </p>
  //         </div>
  //       </div>

  //       <div className={`card ${getRandomDirection()}`}>
  //         <div className="front-content">Справа ←</div>
  //         <div className="content">
  //           <p className="heading">From Right</p>
  //           <p>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting
  //             industry.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}
