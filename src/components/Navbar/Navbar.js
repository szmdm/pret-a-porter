import React, { useState } from "react";
import { Nav, NavLink, } from './NavbarStyle';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MobileIcon, MobileNavMenu, MobileNavItem, MobileNavLinks } from "./NavbarStyle";





const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>pret-a-porter</h1>
                </NavLink>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <MobileNavMenu onClick={handleClick} click={click} >
                    <MobileNavItem>
                        <MobileNavLinks to="/about" >About</MobileNavLinks>
                    </MobileNavItem>
                    <MobileNavItem>
                        <MobileNavLinks to="/contact" >Contact</MobileNavLinks>
                    </MobileNavItem>
                </MobileNavMenu>
            </Nav>
        </>
    )
}


export default Navbar