import React from 'react';



export const TrousersComp = ({ tempC }) => {


    let trousers;

    if (tempC < 5) {
       trousers = "long 2 layer trousers"
    }

    else if ( tempC > 5 && tempC < 15 ) {
        trousers = "long trousers"
    }

    else {
        trousers = "short trousers"
    }

    return (
        <>
        <p1>TROUSERS:</p1>
        <p1>{trousers}</p1>
        </>
    )
}