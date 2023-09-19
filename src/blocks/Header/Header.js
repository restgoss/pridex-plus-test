import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import logo_black from '../../utils/images/pridex_black.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ isLoggedin, setIsLoggedIn }) {
    const [isMenuOpened, setMenuOpened] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        setMenuOpened(false);
    }, [location]);

    function menuButtonClick() {
        setMenuOpened(!isMenuOpened);
    }

    function goToProfile() {
        navigate('/profile');
    }

    return (
        <>
            <header className="header">
                <img className="header__logo" src={logo_black} alt='' onClick={goToProfile} />
                {isLoggedin ? (
                    <button
                        className={`header__menu-button ${isMenuOpened ? 'header__menu-button_active' : ''}`}
                        onClick={menuButtonClick}
                    ></button>
                ) : (
                    ''
                )}
            </header>
            <AnimatePresence>
                {isMenuOpened && (
                    <motion.div
                        className="menu-container"
                        initial={{ opacity: 0, height: '0'}}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: '0'}}
                        transition={{type: 'spring', duration: .9}}
                        style={{ width: '100%' }}
                    >
                        <Menu setIsLoggedIn={setIsLoggedIn} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}