import styled from 'styled-components';

export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: calc(100vh - 120px - 75px); */

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;