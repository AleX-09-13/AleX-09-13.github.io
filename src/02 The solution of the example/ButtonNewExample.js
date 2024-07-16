import React from 'react';

const ButtonNewExample = ({ handleNewExample }) => {
  return (
    <div>
      <button
        style={{
          height: '30px',
          width: '60px',
          color: 'orange',
        }}
        onClick={handleNewExample}
      >
        Enter-»
      </button>
    </div>
  );
};

export default ButtonNewExample;
