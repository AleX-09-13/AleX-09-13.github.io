import React from 'react';

const ButtonReset = ({ handleReset }) => {
  return (
    <div style={{ color: 'orange' }}>
      <button onClick={handleReset}>Start over</button>
    </div>
  );
};

export default ButtonReset;
