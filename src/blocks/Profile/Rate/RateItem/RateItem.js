
import { useNavigate } from 'react-router-dom';
import arrow from '../../../../utils/images/arrow.png';
import warning from '../../../../utils/images/warning.svg';
import './RateItem.css';
export default function RateItem({data}) {
    const navigate = useNavigate();
    function handleClick() {
        data.selectProfile(data);
        navigate('/employee-profile');
    }
    return(
        <div className="rate__item" onClick={handleClick}>
            <div className="rate__text">
                <p className="rate__name">{data.name}</p>
                <p className="rate__post">{data.post}</p>
            </div>
            {data.isAttentionReq ? <img className='rate__image' src={warning} alt='' /> : <img className='rate__image' src={arrow} alt='' /> }
        </div>
    )
}