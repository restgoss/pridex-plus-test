import React from 'react';
import { motion } from 'framer-motion';
import Input from '../Input/Input';
import cross from '../../../utils/images/cross.svg';
import '../Quiz.css';
import SetScore from '../SetScore/SetScore';
import Hint from '../Hints/Hint';


export default function Step2() {
    const [selectedScore, setSelectedScore] = React.useState('');

    const hints = {
        a: 'Систематически анализирует лучшие отраслевые практики, использует их в работе, поощряет коллег к поиску новых решений. Видит неоптимальные рабочие процессы в зоне своей ответственности, ищет и успешно енедряет варианты их улучшений.',
        b: 'Принимает и активно поддерживает изменения, предлагаемые руководством, передает знания коллегам, транслирует позитивное отношение к нововведениям. Своевременно меняет способы работы, успешно внедряет нововведения и помогает своей команде.',
        c: 'Конструктивно воспринимает и поддерживает изменения, предлагаемые руководством, помогает при внедрении изменений и. Своевременно меняет способы работы, адаптируется под новые условия.',
        d: 'Подвергает сомнению важность изменений, избегает участия во внедрении нововведений. Игнорирует новые методы работы. Предпочитает использовать знакомые и привычные "всегда так делали"',
        e: 'Сопротивляется изменениям (например говорит: "и так сойдет, у нас и так все хорошо") навязывает свое негативное отношение к изменениям другим сотрудникам. Отказывается работать по новому.'
    }


    return (
        <>
            <img className='quiz__close-btn' src={cross} alt=''></img>
            <h2 className='quiz__title'>Я Лидер</h2>
            <p className='quiz__subtitle'>Готовность к изменениям</p>
            {selectedScore && <Hint score={selectedScore} hint={hints[selectedScore]} />}
            <SetScore setParentState={setSelectedScore} />
            <Input />
        </>
    )

}