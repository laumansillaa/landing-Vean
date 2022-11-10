import style from './styles/contact.module.css'
import meme from '../../assets/images/meme.webp'

const Contact = () => {


    return (
        <div className={style.contContact} id='contact'>
            <div className={style.contTitle}>
                <h1>CONTACTO</h1>
            </div>
            <div className={style.contInfo}>
                <img src={meme} alt='meme' className={style.img}/>
                <div className={style.contMeta}>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem dignissimos facilis modi, possimus doloremque quaerat eos, quod cupiditate adipisci consequatur cumque atque? Vero eum, officia assumenda provident illo debitis?</h5>
                    <div className={style.contBtns}>
                        <button className={style.btnHome}>
                            <a href='https://telegram.me/user' target='_blank' className={style.aux}>
                                Telegram
                            </a>
                        </button>
                        <button className={style.btnHome}>
                            <a href='mailto:veanbooks@gmail.com'
                                target="_blank"
                                className={style.aux}
                            >
                                Contactanos
                            </a>
                        </button>
                        <button className={style.btnHome}>
                            <a href='https://twitter.com/veanbooks' target='_blank' className={style.aux}>
                            Twitter
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;