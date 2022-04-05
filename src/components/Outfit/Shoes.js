import React from 'react';



export const ShoesComp = ({ tempC }) => {


    let shoes;

    if (tempC < 5) {
       shoes = "snow boots"
    }

    else if ( tempC > 5 && tempC < 15 ) {
        shoes = "ankle shoes"
    }

    else {
        shoes = "kicks"
    }

    return (
        <>
        <p1>SHOES:</p1>
        <p1>{shoes}</p1>
        </>
    )
}