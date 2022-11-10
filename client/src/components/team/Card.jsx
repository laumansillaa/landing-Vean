import style from './styles/card.module.css'

import {Avatar} from '@mui/material'
import {AiOutlineTwitter} from 'react-icons/ai'

const Card = ({user}) => {
    return (
        <div className={style.contCard}>
            <Avatar alt={`${user.name}`} src={user.image} sx={{ width: 120, height: 120 }} />
            <div className={style.contInfo}>
                <h3>{user.name}</h3>
                <h6>{user.position}</h6>
                <h6>{user.algo}</h6>
            </div>
            <div className={style.contSocial}>
                <AiOutlineTwitter className={style.icon}/>
                <h6>{user.username}</h6>
            </div>
        </div>
    )
}

export default Card;