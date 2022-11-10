import style from './styles/footer.module.css'
import vean from '../../assets/images/VeanBlank.svg'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'

const Footer = () => {

    return (
        <div className={style.contFooter}>
            <img src={vean} alt='vean-logo' className={style.logo}/>
            <div className={style.contSocial}>
                <AiFillTwitterCircle className={style.icon}/>
                <FaTelegram className={style.icon}/>
            </div>
        </div>
    )
}


export default Footer;