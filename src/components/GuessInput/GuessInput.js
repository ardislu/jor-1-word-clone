import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ guesses, setGuesses, guessIndex, setGuessIndex, answer, inProgress, setInProgress, setWin }) {
  const [pendingGuess, setPendingGuess] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const nextGuesses = structuredClone(guesses);
    nextGuesses[guessIndex] = pendingGuess;
    setGuesses(nextGuesses);
    setGuessIndex(guessIndex + 1);
    setPendingGuess('');
    
    if (pendingGuess === answer) {
      setInProgress(false);
      setWin(true);
    }
    else if (guessIndex + 2 > NUM_OF_GUESSES_ALLOWED) {
      setInProgress(false);
      setWin(false);
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required={true}
        minLength={5}
        maxLength={5}
        pattern=".{5}"
        value={pendingGuess}
        onChange={e => setPendingGuess(e.target.value.toLocaleUpperCase())}
        disabled={!inProgress}
      />
    </form>
  );
}

export default GuessInput;
