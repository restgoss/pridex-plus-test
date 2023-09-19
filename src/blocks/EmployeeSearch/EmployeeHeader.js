import './EmployeeHeader.css';
import search from '../../utils/images/search.svg';
export default function EmployeeHeader({ status }) {
    return(
        <>
        <div className='search-header'>
            <div className='status-bar'>
                <p className='status-bar__title'>Данные актуальны:</p>
                <p className='status-bar__status'>{status}</p>
            </div>
            <div className='search-header__block'>
                <input className='search-header__input' placeholder='Поиск сотрудника'></input>
                <img className='search-header__img' src={search} alt='' ></img>
            </div>
        </div>
        </>
    )
}
