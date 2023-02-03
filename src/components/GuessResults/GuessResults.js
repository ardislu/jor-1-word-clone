import React from "react";

import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {

  return (
    <div className="guess-results">
      {guesses.map((g, i) => <Guess key={i} guess={g} answer={answer} />)}
    </div>
  );
}

export default GuessResults;
