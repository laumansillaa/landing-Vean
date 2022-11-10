import style from './styles/footer.module.css'
import vean from '../../assets/images/VeanBlank.svg'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'

const Footer = () => {

    return (
        <div className={style.contFooter}>
            <img src={vean} alt='vean-logo' className={style.logo}/>
            <div className={style.contSocial}>
                <a href='https://twitter.com/veanbooks' target='_blank'>
                    <AiFillTwitterCircle className={style.icon}/>
                </a>
                <a href='https://telegram.me/user' target='_blank'></a>
                <FaTelegram className={style.icon}/>
            </div>
        </div>
    )
}


export default Footer;