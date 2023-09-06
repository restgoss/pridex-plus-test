import './ResultScore.css'
import Score from "../../Score/Score";

export default function ResultScore({director, your}) {
    return(
        <>
        <div className="resultscore__block">
            <div className="resultscore__score">
                <p className="resultscore__p">Руководитель:</p>
                <Score score={director} />
            </div>
            <div className="resultscore__score">
                <p className="resultscore__p">Ваша оценка:</p>
                <Score score={your} />
            </div>
        </div>
        </>
    )
}