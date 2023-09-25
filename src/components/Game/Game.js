import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Form from '../Form/Form'
import Guess from '../Guess/guess';
import Keyboard from '../Keyboard/Keyboard';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';




// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [inputs, setInputs] = React.useState([]);
  const [status, setStatus] = React.useState('running');


  function handleGuessSubmit(guess){
    if(guess !== ''){
      const newGuess = [...inputs, guess]    
      setInputs(newGuess);
      

      if(guess.toUpperCase() === answer){
        setStatus('won')
      } else if(newGuess.length >= NUM_OF_GUESSES_ALLOWED){
        setStatus('lost')
      }
    }
  }

  return (
  <>
      <Guess inputs={inputs} answer={answer}/>
      <Form handleGuessSubmit = {handleGuessSubmit} gameStatus={status}/> 
      <Keyboard inputs={inputs} answer={answer}/>  
      {status === 'won' && (
        <WinBanner numOfGuesses={inputs.length}/>
        )
      }
      {status === 'lost' && (
        <LoseBanner answer={answer}/>
        )
      }
  </>
  );
}

export default Game;
