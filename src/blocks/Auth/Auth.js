import './Auth.css';
import password from '../../utils/images/password.svg';
import phone_icon from '../../utils/images/phone_icon.svg';

export default function Auth(props) {



    return (
        <>
            <div className='auth-block circe'>
                <h2 className='auth-block__title'>Войти</h2>
                <form className="auth-form">
                    <div className="auth-form__row">
                        <img className="auth-form__symbol" src={phone_icon}></img>
                        <input className="auth-form__input" placeholder="Логин" type="tel">
                        </input>
                    </div>
                    <div className="auth-form__row">
                        <img className="auth-form__symbol" src={password} style={{opacity: '.5'}}></img>
                        <input className="auth-form__input" placeholder="Пароль">
                        </input>
                    </div>
                    <button className="auth-form__button" type='button' onClick={props.onClick}>Войти</button>
                </form>
            </div>
        </>
    )
}