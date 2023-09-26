import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Form from '../Form/Form'
import Guess from '../Guess/guess';
import Keyboard from '../Keyboard/Keyboard';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';


function Game() {

  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [inputs, setInputs] = React.useState([]);
  const [status, setStatus] = React.useState('running');


  console.info({ answer });

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

  function handleRestart(){
    const newAnswer = sample(WORDS);

    setAnswer(newAnswer);
    setInputs([]);
    setStatus('running');

  }

  const validatedGuesses = inputs.map((guess) => (checkGuess(guess, answer)))
  

  return (
  <>
      <Guess validatedGuesses={validatedGuesses}/>
      <Form handleGuessSubmit = {handleGuessSubmit} gameStatus={status}/> 
      <Keyboard validatedGuesses={validatedGuesses} />  
      {status === 'won' && (
        <WinBanner numOfGuesses={inputs.length} handleRestart={handleRestart}/>
        )
      }
      {status === 'lost' && (
        <LoseBanner answer={answer} handleRestart={handleRestart}/>
        )
      }
  </>
  );
}

export default Game;
