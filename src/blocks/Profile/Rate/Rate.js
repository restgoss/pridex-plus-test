import { useNavigate } from 'react-router-dom';
import './Rate.css';
import RateList from "./RateList";
export default function Rate() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/employee-search')
    }
    return(
        <>
            <div className="scoreboard__block">
                <h2 className='scoreboard__title'>Сотрудники</h2>
                <RateList />
                <p className="scoreboard__all" onClick={handleClick}>Перейти ко всем сотрудникам</p>

            </div>
        </>
    )
}