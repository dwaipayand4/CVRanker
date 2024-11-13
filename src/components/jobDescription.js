import React from 'react';


export default function jobDescription() {

    const handleclick = ()=> {
        console.log('Button is clicked now');
    }
    return(
        <div>
            <button onClick={handleclick}></button>
        </div>
        

    )
}    
