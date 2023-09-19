import arrow from '../../../../utils/images/arrow.png';
import warning from '../../../../utils/images/warning.svg';
import './RateItem.css';
export default function RateItem(props) {
    return(
        <div className="rate__item">
            <div className="rate__text">
                <p className="rate__name">{props.name}</p>
                <p className="rate__post">{props.post}</p>
                
            </div>
            {props.needsAttention ? <img className='rate__image' src={warning} alt='' /> : <img className='rate__image' src={arrow} alt='' /> }
        </div>
    )
}