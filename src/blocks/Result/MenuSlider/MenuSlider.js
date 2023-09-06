import React from 'react';
import './MenuSlider.css';
export default function MenuSlider({selectedValue}) {
    function setMenuValue(e) {
        document.querySelector('.menu-slider__item_active').classList.remove('menu-slider__item_active');
        e.target.classList.add('menu-slider__item_active');
        selectedValue(e.target.id);
    }
    return(
        <>
        <div className="menu-slider">
            <div className="menu-slider__item menu-slider__item_active" id='0' onClick={e => setMenuValue(e)}>Личная результативность</div>
            <div className="menu-slider__item" id='1' onClick={e => setMenuValue(e)}>Я лидер</div>
            <div className="menu-slider__item" id='2' onClick={e => setMenuValue(e)}>Мы команда</div>
            <div className="menu-slider__item" id='3' onClick={e => setMenuValue(e)}>Все для клиента</div>
            <div className="menu-slider__item" id='4' onClick={e => setMenuValue(e)}>Итоговая оценка</div>
        </div>
        </>
    )
}