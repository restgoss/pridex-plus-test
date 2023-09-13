export default function EmployeeTableLight() {
    return(
        <>
            <table>
                <tr className="employee-table__row">
                    <td className="employee-table__column name">Дмитрий Глебов</td>
                    <td className="employee-table__column post">Веб-разработчик</td>
                    <td className="employee-table__column dir-quiz">✗</td>
                    <td className="employee-table__column self-quiz">✓</td>
                </tr>

            </table>
        </>
    )
}