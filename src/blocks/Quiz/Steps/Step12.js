import React from 'react';
import { motion } from 'framer-motion';
import Input from '../Input/Input';
import cross from '../../../utils/images/cross.svg';
import '../Quiz.css';
import SetScore from '../SetScore/SetScore';


export default function Step12() {
    const [selectedScore, setSelectedScore] = React.useState('');

    return (
        <>
            <img className='quiz__close-btn' src={cross} alt=''></img>
            <h2 className='quiz__title'>Оценка по компетенциям</h2>
            <SetScore setParentState={setSelectedScore} />
            <Input />
        </>
    )

}