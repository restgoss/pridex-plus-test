import React from 'react';
import Input from './Input/Input';
import cross from '../../utils/images/cross.svg';
import './Quiz.css';
import QuizStatus from './QuizStatus/QuizStatus';
import Step1 from './Steps/Step1';
import SetScore from './SetScore/SetScore';
import { useNavigate } from 'react-router-dom';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Step6 from './Steps/Step6';
import Step7 from './Steps/Step7';
import Step8 from './Steps/Step8';
import Step9 from './Steps/Step9';
import Step10 from './Steps/Step10';
import Step11 from './Steps/Step11';
import Step12 from './Steps/Step12';

export default function Quiz() {
    const [scoreState, setScoreState] = React.useState('');
    const [currentStep, setCurrentStep] = React.useState(1);
    const navigate = useNavigate();
    function handleNextStep() {
        if (currentStep < 12) {
            setCurrentStep(currentStep + 1);
        }
        if (currentStep === 12) {
            navigate('/quiz-success');
        }
    }

    function handlePrevStep() {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    }

    const handleStatusChange = (newStatus) => {
        setCurrentStep(newStatus);
    }


    function goToProfile() {
        navigate('/profile');
    }

    let currentStepComponent;
    switch (currentStep) {
        case 1:
            currentStepComponent = <Step1 />;
            break;
        case 2:
            currentStepComponent = <Step2 />;
            break;
        case 3:
            currentStepComponent = <Step3 />;
            break;
        case 4:
            currentStepComponent = <Step4 />;
            break;
        case 5:
            currentStepComponent = <Step5 />;
            break;
        case 6:
            currentStepComponent = <Step6 />;
            break;
        case 7:
            currentStepComponent = <Step7 />;
            break;
        case 8:
            currentStepComponent = <Step8 />;
            break;

        case 9:
            currentStepComponent = <Step9 />;
            break;
        case 10:
            currentStepComponent = <Step10 />;
            break;
        case 11:
            currentStepComponent = <Step11 />;
            break;
        case 12:
            currentStepComponent = <Step12 />;
            break;
        default:
            currentStepComponent = null;
    }

    return (
        <>
            <QuizStatus status={currentStep} onStatusChange={handleStatusChange} />
            <div className="quiz">
                {currentStepComponent}
                <div className='quiz__buttons'>
                    {currentStep > 1 ? <div className='quiz__button' onClick={handlePrevStep}>Назад</div> : ''}
                    <div className='quiz__button' onClick={handleNextStep}>{currentStep === 12 ? 'Завершить' : 'Далее'}</div>
                </div>
            </div>
        </>
    )


}