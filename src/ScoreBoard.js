import React from 'react';

const ScoreBoard = ({ correctCount, incorrectCount }) => {
  return (
    <div>
      <p>Верных ответов: {correctCount}</p>
      <p>Неверных ответов: {incorrectCount}</p>
    </div>
  );
};

export default ScoreBoard;
