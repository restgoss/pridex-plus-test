import './Input.css'; 
export default function Input() {
    return(
        <>
        <span className="quiz__error">Обязательно к заполнению *</span>
        <textarea className="quiz__input" placeholder='Ваш комментарий...' minLength={20}></textarea>
        </>
    )
}