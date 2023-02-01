import React from "react";

function GuessResults({ guesses }) {

  return (
    <div className="guess-results">
      {guesses.map((g, i) => <p key={i} className="guess">{g}</p>)}
    </div>
  );
}

export default GuessResults;
