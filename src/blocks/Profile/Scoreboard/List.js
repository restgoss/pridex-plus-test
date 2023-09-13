import './List.css';
import Score from '../../Score/Score';
import arrow from '../../../utils/images/arrow.svg';
import { useNavigate } from 'react-router-dom';
export default function List() {
    const navigate = useNavigate();
    function goBack() {
        navigate('/your-score/1');
    }
    return(
        <>
        <ul className="ul">
            <li className="li" onClick={goBack}><p>1 квартал 2023</p><div className='arrow-block'><p>Перейти к оценке</p><img className='arrow' src={arrow} alt=''></img></div></li>
            <li className="li" onClick={goBack}><p>4 квартал 2022</p><div className='arrow-block'><p>Перейти к оценке</p><img className='arrow' src={arrow} alt=''></img></div></li>
            <li className="li" onClick={goBack}><p>3 квартал 2022</p><div className='arrow-block'><p>Перейти к оценке</p><img className='arrow' src={arrow} alt=''></img></div></li>
            <li className="li" onClick={goBack}><p>2 квартал 2022</p><div className='arrow-block'><p>Перейти к оценке</p><img className='arrow' src={arrow} alt=''></img></div></li>
            <li className="li" onClick={goBack}><p>1 квартал 2022</p><div className='arrow-block'><p>Перейти к оценке</p><img className='arrow' src={arrow} alt=''></img></div></li>
        </ul>
        </>
    )
}