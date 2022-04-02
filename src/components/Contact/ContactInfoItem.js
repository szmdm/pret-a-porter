import React from 'react';
import { MdPlace } from 'react-icons/md'
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

// export default ContactInfoItem