// import { FaBars } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';




export const WeatherTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  color: black;
  margin-bottom: 1rem;
  margin-left: 25px;
`;

export const SearchPlace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem 0;

input {
    padding: .7rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 25px;
    border: 1px solid black;
    background: white;


}
`;

export const WeatherContainer = styled.div`
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

export const WeatherContainerRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  margin: 15px 0;

  div {
    display: flex;
    align-items: center;
  }


  p1 {
      margin-left: 10px;
  }
`;

export const EmptyIcon = styled.div`
  margin-left: 15px;
`;
