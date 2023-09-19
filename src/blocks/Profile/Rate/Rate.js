import { useNavigate } from 'react-router-dom';
import './Rate.css';
import RateItem from './RateItem/RateItem';
export default function Rate({ onRateItemClick }) {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/employee-search')
    }
    return (
        <>
            <div className="scoreboard__block">
                <h2 className='scoreboard__title'>Сотрудники</h2>
                <div className='rate-block'>
                    <RateItem data={{ id: 123, name: 'Александр Рубцов', post: 'Инженер слаботочных систем', isAttentionReq: true, selectProfile: onRateItemClick, avatar: 'https://www.blast.hk/attachments/64804/' }} />
                    <RateItem data={{ id: 456, name: 'Дмитрий Глебов', post: 'Веб-разработчик', isAttentionReq: false, selectProfile: onRateItemClick, avatar: 'https://smmis.ru/wp-content/uploads/2015/01/gifnaavatar.gif'}} />
                </div>
                <p className="scoreboard__all" onClick={handleClick}>Перейти ко всем сотрудникам</p>
            </div>
        </>
    )
}