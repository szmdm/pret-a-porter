import React from 'react';
import { GenderTitle, GenderContainer, GenderContainerRows } from './genderStyle';
import { Toggle } from '../Toggle'
import { EmptyIcon } from '../../pages/weatherStyle';


const GenderPage = ({set}) => {


    return (
        <>
            <GenderTitle>Gender</GenderTitle>

            <GenderContainer>
                <GenderContainerRows>
                    <EmptyIcon><p1>Man </p1></EmptyIcon>
                    <Toggle onChange={(e) => set(e.target.checked ? 'female' : 'male')} />
                    <p>Woman</p>
                </GenderContainerRows>
            </GenderContainer>

        </>
    )
}


export default GenderPage;