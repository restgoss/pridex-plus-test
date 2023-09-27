import React from 'react';
import './QuizStatus.css';

export default function QuizStatus({ status, onStatusChange }) {
  const handleClick = (newStatus) => {
    onStatusChange(newStatus);
  };

  return (
    <>  
        <p className='quiz-status__title'>Оценка сотрудника</p>
      <div className="quiz-status__block">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
          <div
            key={number}
            className={`quiz-status__button ${number <= status ? 'quiz-status__button_active' : ''}`}
            onClick={() => handleClick(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </>
  );
}
