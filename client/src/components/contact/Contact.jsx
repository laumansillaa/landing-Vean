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
                            Telegram
                        </button>
                        <button className={style.btnHome}>
                        Contactanos
                        </button>
                        <button className={style.btnHome}>
                        Twitter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;