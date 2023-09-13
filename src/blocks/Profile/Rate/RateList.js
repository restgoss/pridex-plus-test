import './RateList.css';
import RateItem from "./RateList/RateItem";

export default function RateList() {
    return(
        <>
            <div className="rate-list">
                <RateItem name='Дмитрий Глебов' post='Веб-разработчик' needsAttention={true} />
                <RateItem name='Андрей Иванов' post='Инженер слаботочных систем' needsAttention={true} />
                <RateItem name='Марк Рубцов' post='Системный Администратор' needsAttention={true} />
                <RateItem name='Игорь Стрелков' post='Серверный Инженер' needsAttention={true} />
                <RateItem name='Александр Гроздовский' post='Ведущий Специалист Технической поддержки' needsAttention={false} />
                <RateItem name='Олег Нечипоренко' post='Руководитель Технической поддержки' needsAttention={false} />
                <RateItem name='Артур Пирожков' post='Ведущий Специалист IT' needsAttention={false} />
                <RateItem name='Никита Дорохов' post='Ведущий Специалист IT' needsAttention={false} />
                <RateItem name='Сергей Добролюбов' post='Серверный Инженер' needsAttention={false} />
                <RateItem name='Николай Греф' post='Ведущий Специалист IT' needsAttention={false} />
                <RateItem name='Максим Николаев' post='Инженер слаботочных систем' needsAttention={false} />
            </div>
        </>
    )
}