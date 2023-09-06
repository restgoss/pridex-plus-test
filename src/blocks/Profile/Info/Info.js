import './Info.css';
import avatar from '../../../utils/images/avatar.svg';

export default function Info() {
    return(
        <>
            <img className='profile__avatar' alt='' src={avatar}></img>
            <h2 className='profile__name'>Дмитрий Глебов</h2>
            <p className='profile__post'>Веб-разработчик</p>
        </>
    )
}