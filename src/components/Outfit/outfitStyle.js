import styled from 'styled-components';




export const OutfitTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  color: black;
  margin-bottom: 1rem;
`;

export const OutfitContainer = styled.div`
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

export const OutfitContainerRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  margin: 15px 0;
`;