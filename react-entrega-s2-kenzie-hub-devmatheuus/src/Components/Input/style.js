import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: left;

  width: 320px;
  padding: 0.2rem;

  small {
    color: var(--white);
  }

  span {
    color: var(--red);
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-direction: column;

    gap: 0.3rem;
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  background: var(--gray);

  border-radius: 10px;
  border: 2px solid var(--gray);

  color: var(--white);

  padding: 0.5rem;
  width: 100%;
  gap: 1rem;

  transition: 1s;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red);

      svg {
        color: var(--red);
      }
    `}

  &:hover {
    border: 2px solid var(--white);
  }

  @media (max-width: 500px) {
    width: 89%;
  }

  input {
    background: transparent;
    color: var(--white);

    align-items: center;
    flex: 1;

    ::placeholder {
      color: var(--white-gray);
    }
  }
`;
