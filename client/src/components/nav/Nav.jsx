import style from './styles/nav.module.css'
// import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Vean from '../../assets/images/VeanBlank.svg'
import menu from '../../assets/svg/menu.svg'
import {Link} from 'react-router-dom';
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'

const Navv = () => {

  const clickChecked = () => {
      var msg = document.getElementById('menu').click()
  }

    return (
        <div className='header'>
          <div className={style.contNav}>
            <div className={style.headerIcon}>   
                <Link to='/'>
                    <img 
                        src={Vean} 
                        alt='logo-png'
                        className={style.logo}
                    />
                </Link>
            </div>
            <label for='menu' className={style.navLabel}>
                <img src={menu} alt='menu-svg' className='navSvg' />
            </label>
            <input type='checkbox' id='menu' className={style.navInput}></input>
            <div className={style.headerItems}>
                <div className={style.contItem}>
                    <Link to='/about' className={style.link} onClick={clickChecked}>Inicio</Link>
                    <Link to='/about' className={style.link} onClick={clickChecked}>Proyecto</Link>
                    <Link to='/about' className={style.link} onClick={clickChecked}>Roadmap</Link>
                    <Link to='/about' className={style.link} onClick={clickChecked}>Equipo</Link>
                    <Link to='/about' className={style.link} onClick={clickChecked}>Contacto</Link>
                </div>

                <div className={style.contSocial}>
                    {/* <h6></h6></h6> */}
                    <a href='https://twitter.com/' target='_blank'><FaTelegram className={style.icons}/></a>
                    <a href='https://twitter.com/' target='_blank'>
                      <AiFillTwitterCircle className={style.icons}/></a>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Navv;