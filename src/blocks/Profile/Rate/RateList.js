import './RateList.css';
import RateItem from "./RateList/RateItem";

export default function RateList() {
    return(
        <>
            <div className="rate-list">
                <RateItem name='Стас Дмитрук' post='Специалист Технической поддержки' needsAttention={true} />
                <RateItem name='Андрей Иванов' post='Инженер слаботочных систем' needsAttention={true} />
                <RateItem name='Марк Рубцов' post='Системный Администратор' needsAttention={true} />
                <RateItem name='Игорь Стрелков' post='Серверный Инженер' needsAttention={true} />
                <RateItem name='Александр Гроздовский' post='Ведущий Специалист Технической поддержки' needsAttention={true} />
                <RateItem name='Олег Нечипоренко' post='Руководитель Технической поддержки' needsAttention={true} />
            </div>
        </>
    )
}