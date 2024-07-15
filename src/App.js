import React, { useState, useEffect } from 'react';
import { randomNumber, getRandomOperation } from './02 The solution of the example/RandomNumber';
import Header from './01 Header/Нeader';
import MathQuestion from './02 The solution of the example/MathQuestion';
import ScoreBoard from './03 ScoreBoard/ScoreBoard';
import ButtonNewExample from './02 The solution of the example/ButtonNewExample';
import ButtonReset from './04 Reset/ButtonReset';
import Img from './001 assets/cat/ImgCat';
import Calc from './02 The solution of the example/Calculate';


function App() {
  const initialRandomNumber1 = randomNumber();
  const initialRandomNumber2 = randomNumber();
  const initialRandomOperation = getRandomOperation();

  const [answer, setAnswer] = useState('');
  const [randomNumber1, setRandomNumber1] = useState(initialRandomNumber1);
  const [randomNumber2, setRandomNumber2] = useState(initialRandomNumber2);
  const [operand, setOperand] = useState(initialRandomOperation);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);


  const rightAnswer = Calc(randomNumber1, operand, randomNumber2);

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

    setIsCorrect(+event.target.value === rightAnswer);
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
    setOperand(getRandomOperation());
  };

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

  return (
    <div>
      <Header />
      <div style={{ display: 'flex',margin: '5px',padding:'5px'
        
       }}>
        <MathQuestion
          randomNumber1={randomNumber1}
          randomNumber2={randomNumber2}
          operand={operand}
          answer={answer}
          handleInputChange={handleInputChange}
        />
        <ButtonNewExample handleNewExample={handleNewExample} />
      </div>
      <div style={{display:'flex'}}>
            <Img />
      <ScoreBoard correctCount={correctCount} incorrectCount={incorrectCount} /></div>
      <ButtonReset handleReset={handleReset} />
    </div>
  );
}

export default App;
