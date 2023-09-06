import './Auth.css';
import sms_icon from '../../utils/images/sms_icon.svg';
import phone_icon from '../../utils/images/phone_icon.svg';

export default function Auth(props) {



    return (
        <>
            <div className='auth-block circe'>
                <h2 className='auth-block__title'>Войти</h2>
                <form className="auth-form">
                    <div className="auth-form__row">
                        <img className="auth-form__symbol" src={phone_icon}></img>
                        <input className="auth-form__input" placeholder="Номер телефона" type="tel">
                        </input>
                    </div>
                    <div className="auth-form__row">
                        <img className="auth-form__symbol" src={sms_icon}></img>
                        <input className="auth-form__input" placeholder="Код подтверждения">
                        </input>
                    </div>
                    <button className="auth-form__button" type='button' onClick={props.onClick}>Войти</button>
                </form>
            </div>
        </>
    )
}