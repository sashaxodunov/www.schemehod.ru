import About from '@/sections/About'

export const metadata = {
  title: 'About',
}

export default () => {
  return (
    <>
      <section className="contacts">
        <div className="container container-contact">
          <h2 className="contacts-title">НАПИСАТЬ НАМ</h2>

          <form action="" className="form">
            <div className="form-group">
              <label htmlFor="name" className="label">
                Ваше имя
              </label>
              <input
                id="name"
                type="text"
                className="input"
                name="client_name"
                placeholder="Александр"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="label">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="input"
                name="client_email"
                placeholder="info@mail.com"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="label">
                Сообщение
              </label>
              <textarea
                id="message"
                name="client_message"
                className="textarea"
                placeholder="Меня зовут Александр, и я заинтересован в вашей помощи. Хочу сделать сайт более интересным для вас. Пишите."
              ></textarea>
            </div>

            <div className="form-group">
              <button className="button">Отправить</button>
            </div>
          </form>
        </div>
      </section>
      <script src="js_telegram/main.js"></script>
    </>
  )
}
