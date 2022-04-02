import styled from 'styled-components';


export const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  margin-top: 75px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;


export const FooterTile = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  color: black;
  margin-right: 100px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  height: 100%;
  width: auto;

  svg {
    color: black;
  }
`;