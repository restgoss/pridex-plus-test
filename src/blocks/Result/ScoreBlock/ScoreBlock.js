import ResultScore from '../ResultScore/ResultScore';
import './ScoreBlock.css';
import DirectorScore from '../DirectorScore/DirectorScore';
import YourScore from '../YourScore/YourScore';
export default function ScoreBlock({object}) {
    return(
        <>
            <div className="scoreblock">
                <h2 className='scoreblock__title'>{object.title}</h2>
                <ResultScore director={object.score.director} your={object.score.your} />
                <DirectorScore director={object.directorName} comment={object.directorComment} avatar={object.avatar}/>
                <YourScore comment={object.yourComment} />
            </div>
        </>
    )



}