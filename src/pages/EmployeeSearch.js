import { useNavigate } from 'react-router-dom';
import EmployeeHeader from '../blocks/EmployeeSearch/EmployeeHeader';
import PageSwitch from '../blocks/PageSwitch/PageSwitch';
import Table from '../blocks/Table/Table';
import './EmployeeSearch.css';
export default function EmployeeSearch() {
    const navigate = useNavigate();
    function goBack() {
        navigate('/profile')
    }
    return(
        <>
        <div className='employee__search'>
            <EmployeeHeader status={'3 квартал 2023 года'} />
            <Table />
            <PageSwitch />
        </div>
        <div className='employee_exit-button' onClick={goBack}>Назад</div>
        </>
    )
}