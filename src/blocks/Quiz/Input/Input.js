import './Input.css';

export default function Input({ error }) {
    return (
        <>
            {error ? <p className='quiz__paragraph'>Вы выбрали оценку "C" или выше, необходимо написать, почему вы так считаете</p> : ''}
            <span className={`quiz__error ${error ? 'quiz__error_active' : ''}`}>Обязательно к заполнению *</span>
            <textarea className={`quiz__input ${error ? 'quiz__input_active' : ''}`} placeholder='Ваш комментарий...' minLength={20}></textarea>
        </>
    );
}
