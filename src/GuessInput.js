import React, { useState } from 'react';

function GuessInput(props) {
    
  const [guess, setGuess] = useState('');

  const handleGuessChange = (event) => {
    setGuess(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(guess);
    setGuess('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={guess} onChange={handleGuessChange} />
      <button type="submit">Guess</button>
    </form>
  );
}

export default GuessInput;
