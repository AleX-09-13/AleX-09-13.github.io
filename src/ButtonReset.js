import React from 'react';

const ButtonReset = ({ handleReset }) => {
  return (
    <div style={{ color: 'orange' }}>
      <button onClick={handleReset}>Начать сначала</button>
    </div>
  );
};

export default ButtonReset;
