import './List.css';
import Score from '../../Score/Score';
import arrow from '../../../utils/images/arrow.png';
import { useNavigate } from 'react-router-dom';
export default function List() {
    const navigate = useNavigate();
    function goBack() {
        navigate('/your-score/1');
    }
    return(
        <>
        <ul className="ul">
            <li className="li" onClick={goBack}><p>1 квартал 2023</p><img className='rate__image' src={arrow} /></li>
            <li className="li" onClick={goBack}><p>4 квартал 2022</p><img className='rate__image' src={arrow} /></li>
            <li className="li" onClick={goBack}><p>3 квартал 2022</p><img className='rate__image' src={arrow} /></li>
            <li className="li" onClick={goBack}><p>2 квартал 2022</p><img className='rate__image' src={arrow} /></li>
            <li className="li" onClick={goBack}><p>1 квартал 2022</p><img className='rate__image' src={arrow} /></li>
        </ul>
        </>
    )
}