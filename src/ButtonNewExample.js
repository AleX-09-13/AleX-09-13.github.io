import React from 'react';

const ButtonNewExample = ({ handleNewExample }) => {
  return (
    <div>
      <button
        style={{
          height: '30px',
          color: 'orange',
          width: '80px',
        }}
        onClick={handleNewExample}
      >
        Далее-»
      </button>
    </div>
  );
};

export default ButtonNewExample;
