import React, { useState } from 'react';
import GuessInput from './GuessInput';


function App() {

  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guesses, setGuesses] = useState([]);

  const handleGuessSubmit = (guess) => {

    const guessNumber = parseInt(guess);
    if (isNaN(guessNumber)) {
      alert('Please enter a valid number.');
      return;
    }
    setGuesses([...guesses, guessNumber]);
    if (guessNumber < luckyNumber) {
      alert('You guessed a smaller number.');
    } else if (guessNumber > luckyNumber) {
      alert('You guessed a bigger number.');
    } else {
      alert(`Congratulations, you guessed the right number in ${guesses.length + 1} attempts!`);
      setLuckyNumber(Math.floor(Math.random() * 100) + 1);
      setGuesses([]);
    }
  };

  return (
    <div>
      <h1>Lucky Number Game</h1>
      <p>Guess a number between 1 and 100:</p>
      <GuessInput onSubmit={handleGuessSubmit} />

    </div>
  );
} 

export default App;
