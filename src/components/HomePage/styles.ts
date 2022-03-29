import styled from "styled-components";

export const Container = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  label {
    margin-top: 10px;
    color: var(--text-title);
  }

  button {
    width: 30%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  p {
    color: var(--text-title);
    margin-top: 0.5rem;

    span{
      font-weight: bold;
      margin-left: 5px;
    }

  }
  .resDanger{
    color: #ce1126;
  }

  .resSuccess{
    color: #32b447;
  }
`;


export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    outline: 0;

    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
`;
