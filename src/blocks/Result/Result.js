import React from 'react';
import MenuSlider from './MenuSlider/MenuSlider';
import './Result.css';
import ScoreBlock from "./ScoreBlock/ScoreBlock";
import ScoreNumber from "./ScoreNumber/ScoreNumber";
import arrayOfScores from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
export default function Result() {
    const [selectedObject, setSelectedobject] = React.useState(0);
    const navigate = useNavigate();
    function goBack() {
        navigate('/profile')
    }
    return (
        <>
            <div className="Result">
                <ScoreNumber />
                <MenuSlider selectedValue={setSelectedobject} />
                <ScoreBlock object={arrayOfScores[selectedObject]} />
                <div className='result__exit-button' onClick={goBack}>Назад</div>
            </div>
        </>
    )
}