import './SetScore.css';
import React from 'react';

export default function SetScore({setParentState}) {
  const [selectedButton, setSelectedButton] = React.useState('');

  const setButtonActive = (buttonId) => {
    if (selectedButton === buttonId) {
      setSelectedButton('');
    } else {
      setSelectedButton(buttonId);
      setParentState(buttonId);
    }
  };

  return (
    <>
      <div className="setscore">
        <div
          className={`setscore__button a ${selectedButton === 'a' ? 'setscore__button_active_a' : ''}`}
          id="a"
          onClick={() => setButtonActive('a')}
        >
          a
        </div>
        <div
          className={`setscore__button b ${selectedButton === 'b' ? 'setscore__button_active_b' : ''}`}
          id="b"
          onClick={() => setButtonActive('b')}
        >
          b
        </div>
        <div
          className={`setscore__button c ${selectedButton === 'c' ? 'setscore__button_active_c' : ''}`}
          id="c"
          onClick={() => setButtonActive('c')}
        >
          c
        </div>
        <div
          className={`setscore__button d ${selectedButton === 'd' ? 'setscore__button_active_d' : ''}`}
          id="d"
          onClick={() => setButtonActive('d')}
        >
          d
        </div>
        <div
          className={`setscore__button e ${selectedButton === 'e' ? 'setscore__button_active_e' : ''}`}
          id="e"
          onClick={() => setButtonActive('e')}
        >
          e
        </div>
      </div>
    </>
  );
}
