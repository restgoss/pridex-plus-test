import './SetScore.css';
import React from 'react';
export default function SetScore() {
    const [selectedButton, setSelectedButton] = React.useState('');
    const setButtonActive = (buttonId) => {
        setSelectedButton(buttonId);
        console.log(selectedButton.classList);
    }

    return (
        <>
            <div className="setscore">
                <div className="setscore__button a" id="a" onClick={(a) => setButtonActive(a)}>a</div>
                <div className="setscore__button b" id="b" onClick={(b) => setButtonActive(b)}>b</div>
                <div className="setscore__button c" id="c" onClick={(c) => setButtonActive(c)}>c</div>
                <div className="setscore__button d" id="d" onClick={(d) => setButtonActive(d)}>d</div>
                <div className="setscore__button e" id="e" onClick={(e) => setButtonActive(e)}>e</div>
            </div>
        </>
    )

}

