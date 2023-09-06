import './YourScore.css';

export default function YourScore({comment}) {
    return(
        <>
            <div className="your__score">
                <h2 className="your__name">Ваш комментарий:</h2>
                <p className="your__comment">{comment}</p>
            </div>
        </>
    )

}