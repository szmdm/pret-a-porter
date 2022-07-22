
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  margin-bottom: 40px;
`;

export const NavLink = styled(Link)`
  color: grey;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 1rem;
  height: 100%;
  width: auto;

  h1 {
    font-size: 2rem;

    
  }
  
  &.active {
    color: #000;
  }
  
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
   display: block;
   position: absolute;
   top: 0;
   right: 0;
   transform: translate(-50%, 60%);
   font-size: 1.8rem;
   cursor: pointer;
  }
`

export const MobileNavMenu = styled.ul`
display: flex;
align-items: center;
justify-content: flex-end;
list-style: none;
text-align: center;
width: auto;
padding: 0;

@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10vh;
  position: absolute;
  top: 80px;
  left: ${({ click }) => (click ? 0 : `-100%`)};
  opacity: 1;
  transition: all 0.5s ease;
  background: black;

}
`

export const MobileNavItem = styled.li`
height: 100%;
border-bottom: 2px solid transparent;
display: flex;
align-items: center;


&:hover {
  border-bottom: 2px solid black;
  color: yellow;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  width: 100%;

  &:hover {
    border: none;
  }
  
}
`

export const MobileNavLinks = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 768px) {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &:hover {
    color: yellow;
    transition: all 0.3s ease;
  }
}
`
