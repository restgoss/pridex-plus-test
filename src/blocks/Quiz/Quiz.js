 import Input from './Input/Input';
import './Quiz.css';
import SetScore from './SetScore/SetScore';

 export default function Quiz({stepObject}) {
    return(
        <>
            <div className="quiz">
                <h2 className='quiz__title'>Личная результативность</h2>
                
                <SetScore />
                <Input />
                <div className='quiz__button'>Далее</div>

            </div>
        
        
        
        </>


    )


 }