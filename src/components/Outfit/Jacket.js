import React from 'react';



export const JacketComp = ({ tempC }) => {


    let jacket;

    if (tempC < 5) {
       jacket = "softshell"
    }

    else if ( tempC > 5 && tempC < 20 ) {
        jacket = "sweatshirt"
    }

    else {
        jacket = "too hot for a jacket"
    }

    return (
        <>
        <p1>JACKET:</p1>
        <p1>{jacket}</p1>
        </>
    )
}
