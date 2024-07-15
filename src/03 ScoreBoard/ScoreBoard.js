import React from 'react';

const ScoreBoard = ({ correctCount, incorrectCount }) => {
  return (
    <div>
<p style={{ display: 'flex',alignItems: 'center' }}>
  Right answer:{'     '}
  <span
    style={{
      color: correctCount > 0 ? 'green' : 'inherit',
      padding: '2px 6px',
      marginRight: '40x',
      borderRadius: '4px',
      fontSize: '1.2em',
      fontWeight: 'bold',
      verticalAlign: 'middle', 
    }}
  >
    {correctCount}
  </span>
</p>
<p style={{ display: 'flex', alignItems: 'center' }}>
  Wrong answer:{' '}
  <span
    style={{
      color: incorrectCount > 0 ? 'red' : 'inherit',
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '1.2em',
      fontWeight: 'bold',
      verticalAlign: 'middle', // добавили это
    }}
  >
    {incorrectCount}
  </span>
</p>
      {/* <p>Wrong answer: {incorrectCount}</p> */}
    </div>
  );
};

export default ScoreBoard;
