import React from "react";

function Guess({ guess }) {
  const characters = guess === '' ? new Array(5).fill(' ') : guess.split('');

  return (
    <p className="guess">
      {characters.map((c, i) => <span key={i} className="cell">{c}</span>)}
    </p>
  );
}

export default Guess;
