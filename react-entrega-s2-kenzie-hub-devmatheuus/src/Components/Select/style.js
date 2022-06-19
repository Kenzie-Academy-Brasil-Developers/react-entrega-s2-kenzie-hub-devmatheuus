import styled from 'styled-components';

export const ContainerSelect = styled.div`
  text-align: left;

  margin-left: 5px;
  max-width: 320px;
  width: 98%;

  small {
    color: var(--white);
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-direction: column;

    gap: 0.3rem;
    width: 100%;
  }
`;

export const SelectContainer = styled.div`
  background: var(--gray);
  color: var(--white);

  border-radius: 10px;
  border: 2px solid var(--gray);

  gap: 1rem;
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;

  transition: 1s;

  display: flex;
  align-items: center;

  &:hover {
    border: 2px solid var(--white);
  }

  @media (max-width: 500px) {
    width: 89%;
  }

  select {
    background: transparent;
    color: var(--white);

    flex: 1;
    align-items: center;

    width: 100%;

    option {
      color: var(--gray);
    }
  }

  svg {
    color: var(--pink);
  }
`;
