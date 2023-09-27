import { useNavigate } from "react-router-dom"

export default function QuizSuccess() {
    const navigate = useNavigate();

    function handleGoToProfile() {
        navigate('/profile');
    }
    return (
        <>
            <div className="scoreboard__block">
                <h2 className='scoreboard__title'>Спасибо за прохождение анкеты!</h2>
                <p className="scoreboard__paragraph">За статусом анкеты можно следить в профиле. Также анкета дублируется в 1С.</p>
                <div className='quiz__button' onClick={handleGoToProfile}>В профиль</div>
            </div>
        </>
    )
}