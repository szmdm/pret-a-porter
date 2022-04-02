import React, { useState, useContext } from 'react';
import { GenderTitle, GenderContainer, GenderContainerRows } from './genderStyle';
import { Toggle } from '../Toggle'
import { EmptyIcon } from '../../pages/weatherStyle';
import { ViewerContext } from '../../Contexts/ViewerContext';


const GenderPage = () => {

    // const [toggle, setToggle] = useState(false)
    const { setToggle } = useContext(ViewerContext)

    return (
        <>
            <GenderTitle>Gender</GenderTitle>

            <GenderContainer>
                <GenderContainerRows>
                    <EmptyIcon><p1>Man </p1></EmptyIcon>
                    <Toggle onChange={(e) => setToggle(e.target.checked)} />
                    <p>Woman</p>
                </GenderContainerRows>
            </GenderContainer>

        </>
    )
}


export default GenderPage;