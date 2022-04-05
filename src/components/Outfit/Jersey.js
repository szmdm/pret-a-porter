import React from 'react';



export const JerseyComp = ({ tempC }) => {


    let jersey;

    if (tempC < 0) {
       jersey = "play in heated field house"
    }

    else if ( tempC > 0 && tempC < 30 ) {
        jersey = "RKS Radomiak Radom"
    }

    else {
        jersey = "no jersey needed"
    }

    return (
        <>
        <p1>JERSEY:</p1>
        <p1>{jersey}</p1>
        </>
    )
}
