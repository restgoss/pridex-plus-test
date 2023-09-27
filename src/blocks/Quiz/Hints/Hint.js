import React, { useState, useEffect } from 'react';
import Score from '../../Score/Score';
import { motion, AnimatePresence } from 'framer-motion';
import './Hint.css';

export default function Hint({ score, hint }) {
    const [currentHint, setCurrentHint] = useState(hint);

    useEffect(() => {
        setCurrentHint(hint);
    }, [hint]);

    return (
        <div className='hint-block'>
            <Score score={score} />
            <p className='hint__paragraph'>{currentHint}</p>
        </div>
    );
}
