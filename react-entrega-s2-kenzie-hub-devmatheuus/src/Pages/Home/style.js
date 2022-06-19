import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;

  h1 {
    font-size: 3rem;
    text-shadow: 0px 4px 4px var(--shadow-text);

    margin-bottom: 1rem;

    @media (max-width: 332px) {
      font-size: 2.5rem;
    }
  }

  span {
    color: var(--white);

    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
  }

  div {
    display: flex;
    flex: 1;

    margin-top: 1.5rem;

    button + button {
      margin-left: 1rem;
    }

    @media (max-width: 501px) {
      height: 80px;

      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      button {
        width: 95%;
      }

      button + button {
        margin: 0px;
      }
    }
  }
`;
