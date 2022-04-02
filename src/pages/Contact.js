import React from 'react';
import { Contact } from "./PagesStyle";
import { ContactTitle, ContactLeft, ContactRight, ContactContainer } from './contactStyle';
import { ContactInfoItem } from '../components/Contact/ContactInfoItem';
import { MdLocalPhone, MdEmail, MdPlace } from 'react-icons/md'
import { ContactForm } from '../components/Contact/ContactForm';

const ContactPage = () => {
    return (
        <>

            <Contact>
                <ContactTitle>Contact</ContactTitle>
                <ContactContainer>
                    <ContactLeft>
                        <ContactInfoItem icon={<MdLocalPhone size={30}/>} text={`+48 535-929-XXX`} />
                        <ContactInfoItem icon={<MdEmail size={30}/>} text={`pd.piotrdobrowolski@gmil.com`}/>
                        <ContactInfoItem icon={<MdPlace size={30}/>} text={`Warsaw, Poland`} />
                    </ContactLeft>
                    <ContactRight>
                        <ContactForm/>
                    </ContactRight>
                </ContactContainer>


            </Contact>
        </>
    );
};

export default ContactPage;