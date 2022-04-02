import styled from 'styled-components';




export const ToggleComp = styled.label`
  position: relative;

`;

export const Input = styled.input`
    position: absolute;
    left:-9999px;
    top:-9999px;

    &:checked + span {
        background-color: yellow;

        &::before {
          left: 27px;

        }
    }

    /* &:focus + span {
      box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
    }

    &:focus:checked + span {
      box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
    } */
`;

export const Slider = styled.span`
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 100px;
    background-color: #bfbfbf;
    position: relative;
    transition: background-color 0.2s, box-shadow 0.2s;

    &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 21px;
        height: 21px;
        border-radius: 45px;
        transition: 0.2s;
        background: #fff;
        box-shadow: 14px 14px 14px -15px rgba(66, 68, 90, 1);
    }
    
`
