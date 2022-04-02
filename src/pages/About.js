import React from 'react';
import { About } from "./PagesStyle";
import { AboutQuote, AboutContainer, } from './aboutStyle';

const AboutPage = () => {
    return (
        <About>
            <AboutContainer>
                <AboutQuote>
                    "Wczoraj wieczór myślałem o ratowaniu świata. (…) Dziś rano o ratowaniu ludzkości.<p/> Ale cóż, trzeba mierzyć siły na zamiary. I ratować to, co można."
                    <div>Samson Miodek. Narrenturm.</div>
                </AboutQuote>
            </AboutContainer>
        </About>
    );
};

export default AboutPage;