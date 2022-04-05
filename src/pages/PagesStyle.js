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
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;