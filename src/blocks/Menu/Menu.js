import { useNavigate } from 'react-router-dom'
import './Menu.css'
export default function Menu() {
const navigate = useNavigate();
function signOut() {
    navigate('/sign-in');
}

function toProfile() {
    navigate('/profile');
}

return(
    <>
    <ul className="menu">
        <li className="menu__item">Главная</li>
        <li className="menu__item" onClick={toProfile}>Профиль</li>
        <li className="menu__item" onClick={signOut}>Выйти</li>
    </ul>

    </>
)

}