import React from 'react';
import { SocialItemLink,  } from './SocialItemStyle';



export const SocialItem = ({ icon, text }) => {
    return (
        <>
            <SocialItemLink>
            <a target="_blank" href={text} title="example">{icon}</a>
            </SocialItemLink>
        </>

    )
}