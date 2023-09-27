import React from 'react';
import { motion } from 'framer-motion';
import Input from '../Input/Input';
import cross from '../../../utils/images/cross.svg';
import '../Quiz.css';
import SetScore from '../SetScore/SetScore';
import Hint from '../Hints/Hint';


export default function Step4() {
    const [selectedScore, setSelectedScore] = React.useState('');

    const hints = {
        a: 'Способствует формированию культуры общения в рамках своего подразделения, делится опытом с коллегами. Всегда честен и открыт с коллегами и руководителем, выступает арбитром в разрешении конфликтных ситуаций между коллегами, принимает конструктивную сторону, примеряет стороны.',
        b: 'Всегда взаимодействует в уважительной и корректной манере. Ведет себя конструктивно при обсуждении сложных и острых вопросов, помогает в решении конфликтных ситуаций между коллегами. Запрашивает и делится с коллегами информацией, которая может быть им полезна и интересна.',
        c: 'Не допускал сам и не позволяет другим грубого, неуважительного поведения. Всегда старался честно и открыто говорить с коллегами о совместных проблемах. Выступает инициатором совместного обсуждения сложных вопросов и конфликтных ситуаций. Своевременно и с необходимым качеством предоставляет коллегам нужную информацию.',
        d: 'Допускает некорректные высказывания по отношению к коллегам и переходит на личности. Несвоевременно сообщает о возникающих проблемах. Предоставляет коллегам информацию низкого качества и с нарушением сроков.',
        e: 'Некорректно общается с коллегами, провоцирует конфликты. Замалчивает возникающие проблемы. Искажает необходимую для коллег информацию и подчиненных.'
    }


    return (
        <>
            <img className='quiz__close-btn' src={cross} alt=''></img>
            <h2 className='quiz__title'>Мы - команда</h2>
            <p className='quiz__subtitle'>Открытость</p>
            {selectedScore && <Hint score={selectedScore} hint={hints[selectedScore]} />}
            <SetScore setParentState={setSelectedScore} />
            <Input />
        </>
    )

}