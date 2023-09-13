import { useNavigate } from 'react-router-dom';
import './ProfileButton.css';


export default function ProfileButton() {
    const navigate = useNavigate();
    function toQuiz() {
        navigate('/quiz');
    }
    return (
        <div className='button' onClick={toQuiz}>
            <div className='button__alert'>!</div>
            Необходимо пройти оценку
        </div>
    )
}