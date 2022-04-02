import styled from 'styled-components';




export const GenderTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  color: black;
  margin-bottom: 1rem;
  margin-left: 25px;
`;

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 100%;
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: grey;
`;

export const GenderContainerRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  margin: 15px 0;


  p1 {
      margin-left: 10px;
  }
`;