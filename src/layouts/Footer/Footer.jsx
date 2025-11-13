import './Footer.scss'
import Icon from '@/components/Icon/index.js'

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-socials">
          <li>
            <a href="#!">
              <img
                src="/images/vk.svg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="/images/rutube.svg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="/images/telegram.svg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="/images/dzen.svg"
                alt="Social"
              />
            </a>
          </li>
        </ul>

        <div className="footer-contacts">
          <address className="footer-contacts-col">
            г. Санкт-Петербург, Волосовский р-он п. Калитино<br />
            Россия, 188401
          </address>
          <p className="footer-contacts-col">
            Email: <a href="sasha@xodunov.ru">sasha@xodunov.ru</a>
          </p>
        </div>

        <div className="container footer__datasheet-su">
          <a href="http://datasheet.su/">
            <img
              src="http://datasheet.su/i/88x31.gif"
              width="81"
              height="31"
              alt="Datasheet.su архив даташитов скачать datasheet в pdf и html форматах"
              title="Datasheet.su архив даташитов скачать datasheet в pdf и html форматах"
            />

          </a>
        </div>


      </div>
    </footer>
  )
}
