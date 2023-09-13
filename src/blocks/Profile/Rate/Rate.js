import EmployeeList from './EmployeeList/EmployeeList';
export default function Rate() {
    return(
        <>
            <div className="scoreboard__block">
                <h2 className='scoreboard__title'>Сотрудники</h2>
                <EmployeeList />


            </div>
        </>
    )
}