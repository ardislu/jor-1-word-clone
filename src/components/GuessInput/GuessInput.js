import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ guesses, setGuesses }) {
  const [guessIndex, setGuessIndex] = React.useState(0);
  const [pendingGuess, setPendingGuess] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (guessIndex + 1 > NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const nextGuesses = structuredClone(guesses);
    nextGuesses[guessIndex] = pendingGuess;
    setGuesses(nextGuesses);
    setGuessIndex(guessIndex + 1);
    setPendingGuess('');
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
      />
    </form>
  );
}

export default GuessInput;
