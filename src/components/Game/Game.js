import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessResults from '../GuessResults/GuessResults';
import GuessInput from '../GuessInput/GuessInput';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(new Array(NUM_OF_GUESSES_ALLOWED).fill(''));
  const [guessIndex, setGuessIndex] = React.useState(0);
  const [inProgress, setInProgress] = React.useState(true);
  const [win, setWin] = React.useState(false);

  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput guesses={guesses} setGuesses={setGuesses} guessIndex={guessIndex} setGuessIndex={setGuessIndex} answer={answer} inProgress={inProgress} setInProgress={setInProgress} win={win} setWin={setWin} />
    {!inProgress && <Banner win={win} answer={answer} guessIndex={guessIndex} />}
  </>;
}

export default Game;
