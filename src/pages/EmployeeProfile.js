import { useNavigate } from "react-router-dom";
import Info from "../blocks/Profile/Info/Info";
import ProfileButton from "../blocks/Profile/ProfileButton";
import Scoreboard from "../blocks/Profile/Scoreboard/Scoreboard";

export default function EmployeeProfile({ user }) {
    const navigate = useNavigate();
    function goBack() {
        navigate('/profile');
    }
    return (
        <>
            <div className='profile'>
                <Info name={user.name} post={user.post} avatar={user.avatar} />
                {user.isAttentionReq ? <ProfileButton button='Оценить сотрудника' /> : ''}
            </div>
            <Scoreboard />
            <div className='result__exit-button' onClick={goBack}>Назад</div>
        </>
    )
}