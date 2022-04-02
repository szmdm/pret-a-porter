import styled from 'styled-components';


export const AboutQuote = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  line-height: 2rem;
  color: black;
  margin: 150px 0px;
  padding: 15px;

  div {
      text-align: right;
      font-size: 1.2rem;
      margin-top: 10px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
  `