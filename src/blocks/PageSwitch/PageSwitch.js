import './PageSwitch.css';
import arrowright from '../../utils/images/arrow_right.svg';
import arrowleft from '../../utils/images/arrow_left.svg';
export default function PageSwitch() {
    return (
        <>
            <div className="page-switch">
                <img className="page-switch__arrow" src={arrowleft}>
                </img>
                <div className="page-switch__buttons">
                    <div className="page-switch__button page-switch__button_active">1</div>
                    <div className="page-switch__button">2</div>
                    <div className="page-switch__button">3</div>
                    <div className="page-switch__button">4</div>
                    <div className="page-switch__button">5</div>
                    <div className="page-switch__button">6</div>
                </div>
                <img className="page-switch__arrow" src={arrowright}>
                </img>
            </div>
        </>
    )
}