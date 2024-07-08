import React, { useState, useEffect } from 'react';
import { randomNamber } from './logic';

function App() {
  const initialRandomNamber = randomNamber();

  const [answer, setAnswer] = useState('');
  const [randomNamber1, setRandomNamber1] = useState(initialRandomNamber);
  const [randomNamber2, setRandomNamber2] = useState(initialRandomNamber);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const rightAnswer = randomNamber1 + randomNamber2;

  useEffect(() => {
    const correctCountFromStorage = localStorage.getItem('correctCount');
    const incorrectCountFromStorage = localStorage.getItem('incorrectCount');

    if (correctCountFromStorage) {
      setCorrectCount(parseInt(correctCountFromStorage));
    }

    if (incorrectCountFromStorage) {
      setIncorrectCount(parseInt(incorrectCountFromStorage));
    }
  }, []);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
    setIsCorrect(event.target.value === rightAnswer.toString());
  };

  const handleNewExample = () => {
    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
      localStorage.setItem('correctCount', correctCount + 1);
    } else {
      setIncorrectCount((prevCount) => prevCount + 1);
      localStorage.setItem('incorrectCount', incorrectCount + 1);
    }

    setAnswer('');
    setIsCorrect(null);
    setRandomNamber1(randomNamber());
    setRandomNamber2(randomNamber());
  };

  const handleReset = () => {
    setAnswer('');
    setIsCorrect(null);
    setRandomNamber1(initialRandomNamber);
    setRandomNamber2(initialRandomNamber);
    setCorrectCount(0);
    setIncorrectCount(0);
    localStorage.removeItem('correctCount');
    localStorage.removeItem('incorrectCount');
  };

  return (
    <div className='App'>
      <h2>Викуля реши пример</h2>
      {`${randomNamber1} + ${randomNamber2} = `}

      <input
        placeholder='Ваш ответ'
        value={answer}
        onChange={handleInputChange}
        style={{
          background:
            isCorrect === null
              ? 'white'
              : isCorrect
              ? 'rgba(0, 255, 0, 0.5)'
              : 'rgba(255, 0, 0, 0.1)',
        }}
      ></input>

      <div>
        <p>Верных ответов: {correctCount}</p>
        <p>Неверных ответов: {incorrectCount}</p>
      </div>
      <button onClick={handleNewExample}>Новый пример</button>
      <button onClick={handleReset}>Начать сначала</button>
    </div>
  );
}

export default App;
