import List from './List';
import './Scoreboard.css';

export default function Scoreboard() {
    return(
        <>
            <div className="scoreboard__block">
                <h2 className='scoreboard__title'>История прошлых оценок</h2>
                <List />



            </div>
        </>
    )
}