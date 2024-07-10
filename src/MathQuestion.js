import React from 'react';

const MathQuestion = ({
  randomNumber1,
  randomNumber2,
  operand,
  answer,
  handleInputChange,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ fontSize: '24px', marginRight: '10px' }}>
        {`${randomNumber1} ${operand} ${randomNumber2} = `}
      </div>
      <input
        style={{
          height: '24px',
          fontSize: '20px',
          color: 'blue',
          width: '100px',
        }}
        placeholder='Ваш ответ'
        value={answer}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MathQuestion;
