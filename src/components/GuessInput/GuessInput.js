import React from "react";

function GuessInput({ guesses, setGuesses }) {
  const [pendingGuess, setPendingGuess] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setGuesses([...guesses, pendingGuess]);
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
