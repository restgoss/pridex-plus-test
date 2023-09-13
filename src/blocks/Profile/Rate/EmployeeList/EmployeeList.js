import './Employeelist.css';
import avatar from '../../../../utils/images/avatar.jfif';
export default function EmployeeList() {
    return (
        <>
            <ul className='employee__ul'>
                <li className='item'>
                    <div className='item__block'>
                        <p className='item__name'>Дмитрий Глебов</p>
                        <p className='item__post'>Веб-разработчик</p>
                    </div>
                </li>

            </ul>
        </>
    )
}