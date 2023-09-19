import './DirectorScore.css';
export default function DirectorScore({comment, director, avatar}) {
    return(
        <>
            <div className="director__score">
                <img className="director__avatar" alt="" src={avatar}></img>
                <h2 className="director__name">{director}</h2>
                <p className="director__comment">{comment}</p>
            </div>
        </>
    )

}