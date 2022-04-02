// import { FaBars } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const ContactTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  color: black;
  margin-bottom: 1rem;
`;

export const ContactLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 375px;
  padding: 10px;
  margin-top: 37px;
`;

export const ContactRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 375px;
  padding: 10px;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
  `