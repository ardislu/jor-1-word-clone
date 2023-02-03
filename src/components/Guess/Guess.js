import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const characters = guess === '' ? new Array(5).fill(' ') : checkGuess(guess, answer);

  return (
    <p className="guess">
      {characters.map((c, i) => <span key={i} className={`cell ${c?.status ?? ''}`}>{c?.letter}</span>)}
    </p>
  );
}

export default Guess;
