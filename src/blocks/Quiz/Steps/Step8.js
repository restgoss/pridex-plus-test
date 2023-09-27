import React from 'react';
import { motion } from 'framer-motion';
import Input from '../Input/Input';
import cross from '../../../utils/images/cross.svg';
import '../Quiz.css';
import SetScore from '../SetScore/SetScore';


export default function Step8() {
    const [selectedScore, setSelectedScore] = React.useState('');

    return (
        <>
            <img className='quiz__close-btn' src={cross} alt=''></img>
            <h2 className='quiz__title'>Итоговая оценка</h2>
            <p className='quiz__subtitle'>Личная результативность</p>
            <SetScore setParentState={setSelectedScore} />
            <Input />
        </>
    )

}