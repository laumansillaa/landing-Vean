// ----- IMPORT IMAGES ----
import ariImg from '../../assets/images/ari.jpg'
import kariImg from '../../assets/images/kari.jpg'
import lauImg from '../../assets/images/lau.jpg'
import santiImg from '../../assets/images/santi.jpeg'
import Card from './Card'

import style from './styles/team.module.css'

const Team = () => {

    const ari = {
        name: 'ARI',
        image: ariImg,
        position: 'Co-founder',
        username: '@adbmez'
    }

    const kari = {
        name: 'KARI',
        image: kariImg,
        position: 'Co-founder',
        username: '@soyKrypto'
    }

    const lau = {
        name: 'LAU',
        image: lauImg,
        position: 'Co-founder',
        username: '@laumansillaa'
    }

    const santi = {
        name: 'SANTI',
        image: santiImg,
        position: 'Co-founder',
        username: '@userdesanti'
    }


    return (
        <div className={style.contTeam}>
            <div className={style.contTitle}>
                <h1>EQUIPO</h1>
            </div>
            <div className={style.contCard}>
                <Card user={ari}/>
                <Card user={kari}/>
                <Card user={lau}/>
                <Card user={santi}/>
            </div>
        </div>
    )
}

export default Team;