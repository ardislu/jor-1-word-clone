import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessResults from '../GuessResults/GuessResults';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(new Array(NUM_OF_GUESSES_ALLOWED).fill(''));

  return <>
    <GuessResults guesses={guesses} />
    <GuessInput guesses={guesses} setGuesses={setGuesses} />
  </>;
}

export default Game;
