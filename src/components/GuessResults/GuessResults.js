import React from "react";

import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {

  return (
    <div className="guess-results">
      {guesses.map((g, i) => <Guess key={i} guess={g} />)}
    </div>
  );
}

export default GuessResults;
