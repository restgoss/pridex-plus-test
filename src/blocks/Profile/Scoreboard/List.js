import './List.css';
import Score from '../../Score/Score';
import { useNavigate } from 'react-router-dom';
export default function List() {
    const navigate = useNavigate();
    function goBack() {
        navigate('/your-score/1');
    }
    return(
        <>
        <ul className="ul">
            <li className="li" onClick={goBack}><p>12-05-2023</p><p>Средняя оценка: <Score score='b' /></p></li>
            <li className="li" onClick={goBack}><p>04-02-2023</p><p>Средняя оценка: <Score score='c' /></p></li>
            <li className="li" onClick={goBack}><p>24-01-2022</p><p>Средняя оценка: <Score score='b' /></p></li>
            <li className="li" onClick={goBack}><p>02-12-2022</p><p>Средняя оценка: <Score score='c' /></p></li>
            <li className="li" onClick={goBack}><p>30-08-2022</p><p>Средняя оценка: <Score score='a' /></p></li>
        </ul>
        </>
    )
}