import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import logo_black from '../../utils/images/pridex_black.svg';
import { useLocation } from 'react-router-dom';
export default function Header({ isLoggedin, isOpened }) {

    const [isMenuOpened, setMenuOpened] = React.useState(false);
    const location = useLocation();
    React.useEffect(() => {
        setMenuOpened(false);
    }, [location]);

    function menuButtonClick() {
        setMenuOpened(!isMenuOpened);
    }

    return (
        <>
            <header className="header">
                <img className="header__logo" src={logo_black} alt=' '></img>
                {isLoggedin ? <button className={`header__menu-button ${isMenuOpened ? `header__menu-button_active` : ''}`} onClick={menuButtonClick}></button> : ''}
            </header>
            {isMenuOpened ? <Menu /> : ''}
        </>


    )


}