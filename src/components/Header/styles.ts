import styled from 'styled-components';

export const Container = styled.header `
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5% 2%;
  margin-bottom: 2rem;

  span{
    color: var(--shape);
    font-size: 35px;
    font-weight: bolder;
    letter-spacing: 3px;
  }
`;