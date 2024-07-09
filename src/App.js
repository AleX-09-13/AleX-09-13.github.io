import React, { useState, useEffect } from 'react';
import { randomNumber, getRandomOperation } from './logic';

function App() {
  const initialRandomNumber1 = randomNumber();
  const initialRandomNumber2 = randomNumber();
  const initialRandomOperation = getRandomOperation();

  const [answer, setAnswer] = useState('');
  const [randomNumber1, setRandomNumber1] = useState(initialRandomNumber1);
  const [randomNumber2, setRandomNumber2] = useState(initialRandomNumber2);
  const [operation, setOperation] = useState(initialRandomOperation);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const rightAnswer = eval(`${randomNumber1} ${operation} ${randomNumber2}`);

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
    setIsCorrect(event.target.value == rightAnswer);
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
    setRandomNumber1(randomNumber());
    setRandomNumber2(randomNumber());
    setOperation(getRandomOperation());
  };

  const handleReset = () => {
    setAnswer('');
    setIsCorrect(null);
    setRandomNumber1(initialRandomNumber1);
    setRandomNumber2(initialRandomNumber2);
    setOperation(initialRandomOperation);
    setCorrectCount(0);
    setIncorrectCount(0);
    localStorage.removeItem('correctCount');
    localStorage.removeItem('incorrectCount');
  };

  return (
    <div className='App'>
      <h2>Викуля реши пример</h2>
      {`${randomNumber1} ${operation} ${randomNumber2} = `}

      <input
        placeholder='Ваш ответ'
        value={answer}
        onChange={handleInputChange}
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
