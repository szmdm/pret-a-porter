import React from "react";
import { Footer, FooterTile, FooterSocialIcons,  } from './FooterBarStyle';
import { SocialItem } from "./SocialItem";
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram,  } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const FooterBar = () => {

    return (
        <>
            <Footer>
                <FooterTile>
                    Contact us:
                </FooterTile>
                <FooterSocialIcons>
                    <SocialItem icon={<AiFillFacebook size={30}/>} text="https://facebook.com" />
                    <SocialItem icon={<AiFillLinkedin size={30}/>} text="https://linkedin.com" />
                    <SocialItem icon={<AiFillInstagram size={30}/>} text="https://instagram.com" />
                    <SocialItem icon={<SiGmail size={30}/>} text="https://gmail.com" />
                </FooterSocialIcons>
            </Footer>
        </>
    )
}


export default FooterBar