import React from "react";

function Banner({ win, answer, guessIndex }) {
  return (
    win
      ?
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessIndex} {guessIndex === 1 ? 'guess' : 'guesses'}</strong>.
        </p>
      </div>
      :
      <div className='sad banner'>
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
  );
}

export default Banner;
