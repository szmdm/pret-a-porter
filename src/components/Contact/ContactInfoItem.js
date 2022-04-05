import React from 'react';
import { ContactInfoItemStyle, ContactInfoText } from './contactInfoItemStyle';

export const ContactInfoItem = ({ icon, text }) => {
    return (
        <>
            <ContactInfoItemStyle>
                {icon}
                <ContactInfoText>
                    {text}
                </ContactInfoText>
            </ContactInfoItemStyle>

        </>

    )
}
