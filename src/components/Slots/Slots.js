import React from 'react';
import { range } from '../../utils';

function Cell({letter, status}) {
    const className = status ? `cell ${status}` : 'cell';

    return <span className={className}>{letter}</span>;
}

function Slots({guess}){
    return(
            <p className='guess'>   
                {range(5).map((num) => (
                    <Cell
                    key = {num}
                    letter={guess ? guess[num].letter : undefined}
                    status={guess ? guess[num].status : undefined}
                    />                
                ))}
            </p>  
    )
}

export default Slots;