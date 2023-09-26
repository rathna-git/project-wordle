import React from 'react';
import Slots from '../Slots/Slots';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({validatedGuesses}){
    return(
    <>
    <div className="guess-results">

        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
            <Slots key={num} guess={validatedGuesses[num]}/>  
        ))}
    </div>
    </>
    )
}


export default Guess;