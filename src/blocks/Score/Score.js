import './Score.css';
export default function Score({score}) {
    return(
        <span className={`score ${score}`}>{score}</span>
    )
}