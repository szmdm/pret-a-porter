import React from 'react';
import { SocialItemLink,  } from './SocialItemStyle';



export const SocialItem = ({ icon, text }) => {
    return (
        <>
            <SocialItemLink>
            <a href={text} rel='noopener' title="example">{icon}</a>
            </SocialItemLink>
        </>

    )
}