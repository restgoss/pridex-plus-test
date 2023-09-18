import React from 'react';
import Input from './Input/Input';
import cross from '../../utils/images/cross.svg';
import './Quiz.css';
import QuizStatus from './QuizStatus/QuizStatus';
import SetScore from './SetScore/SetScore';
import { useNavigate } from 'react-router-dom';

 export default function Quiz({stepObject}) {
    const [quizState, setQuizState] = React.useState(1);
    const [scoreState, setScoreState] = React.useState('');
    const navigate = useNavigate();
    function goToProfile() {
        navigate('/profile');
    }

    function plusQuizState() {
        setQuizState(quizState + 1);
    }
    
    return(
        <>
            <QuizStatus status={quizState} />
            <div className="quiz">
                <img className='quiz__close-btn' src={cross} onClick={goToProfile}></img>
                <h2 className='quiz__title'>Личная результативность</h2>
                <SetScore setParentState={setScoreState} />
                <Input error={scoreState === 'a' || scoreState === 'b' || scoreState === 'c' ? true : false} />
                <div className='quiz__button' onClick={plusQuizState}>Далее</div>
            </div>

        </>


    )
 

 }