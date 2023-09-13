import './Rate.css';
import RateList from "./RateList";
export default function Rate() {
    return(
        <>
            <div className="scoreboard__block">
                <h2 className='scoreboard__title'>Сотрудники</h2>
                <RateList />
                <p className="scoreboard__all">Перейти ко всем сотрудникам</p>

            </div>
        </>
    )
}