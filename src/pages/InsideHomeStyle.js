import styled from 'styled-components';

export const SectionMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const LeftBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 375px;
  padding: 10px;
`;

export const RightBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 375px;
  padding: 10px;
`;

export const Gender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 150px;
  width: 100%;
  padding: 20px;
`;

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 75%;
  width: 100%;
  padding: 20px;
`;

export const Viewer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50%;
  width: 100%;
  padding: 20px;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50%;
  width: 100%;
  padding: 20px;
`;
