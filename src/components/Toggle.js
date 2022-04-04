import React from 'react';
import { ToggleComp, Input, Slider } from './toggleStyle';




export const Toggle = ({ onChange }) => {


    return (
        <ToggleComp>
            <Input type="checkbox" onChange={onChange} />
            <Slider />
        </ToggleComp>

    )
}





