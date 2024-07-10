import React from 'react';

const handleReset = () => {
  setAnswer('');
  setIsCorrect(null);
  setRandomNumber1(initialRandomNumber1);
  setRandomNumber2(initialRandomNumber2);
  setOperand(initialRandomOperation);
  setCorrectCount(0);
  setIncorrectCount(0);
  localStorage.removeItem('correctCount');
  localStorage.removeItem('incorrectCount');
};

const HahdleReset = () => {
  return (
    <div>
      <button onClick={handleReset}>Начать сначала</button>
    </div>
  );
};

export default HahdleReset;
