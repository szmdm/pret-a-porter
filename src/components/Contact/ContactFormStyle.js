import styled from 'styled-components';


export const Form = styled.form`
  width: 100%;
    .formLabels {
        margin-bottom: 0.5rem;
    }

    label {
        font-size: 1rem;
    }
    input, textarea {
        width: 100%;
        font-size: 1rem;
        padding: 1rem;
        color: #6e6a5f;
        background-color: #d9d9d961;
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }
    textarea {
        min-height: 150px;
        resize: vertical;

    }
    button[type="submit"] {
        background-color: black;
        color: white;
        font-size: 1rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 0.5rem 2rem;
        border-radius: 8px;
        cursor: pointer;
    }
  `