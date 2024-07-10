import React from 'react';

const ButtonNewExample = ({ handleNewExample }) => {
  return (
    <div>
      <button onClick={handleNewExample}>Новый пример -»</button>
    </div>
  );
};

export default ButtonNewExample;
