import React from 'react';


function Form({handleGuessSubmit,  gameStatus}){
    const [ guess, setGuess ] = React.useState('');
    
    return(
        <>
        <form 
            className ="guess-input-wrapper"
            onSubmit = { (event) => {    
                event.preventDefault();
                handleGuessSubmit(guess);
                setGuess('');
            }}
        >
             <label htmlFor="guess-input">Enter guess:</label>
             <input 
             id="guess-input" 
             type="text"
             minLength={5} 
             maxLength={5}
             pattern="[A-Za-z]{5}" 
             title="Please enter a 5 letter word 💖"
             autoComplete="off"
             value = {guess}
             disabled = {gameStatus !== 'running'}
             onChange = {(event) => {
                const userGuess = (event.target.value).toUpperCase();
                setGuess(userGuess);
             }}
             />
        </form>
        </>
    )
}

export default Form;