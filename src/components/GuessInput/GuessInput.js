import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ guess });
    setGuess('');
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
        value={guess}
        onChange={e => setGuess(e.target.value.toLocaleUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
