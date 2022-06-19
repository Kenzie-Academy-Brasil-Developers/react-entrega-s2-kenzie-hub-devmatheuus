import styled, { keyframes, css } from 'styled-components';

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 370px;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: auto;

  background: var(--dark-gray);

  animation: ${appearFromRight} 2s;
  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    gap: 1rem;
    width: 100%;
    margin-bottom: 15px;
    padding: 5px 0px 25px 0;

    background: var(--black);

    img {
      max-width: 90%;
    }

    button {
      transition: 1s;

      &:hover {
        background: var(--gray);
      }
    }
  }

  div:nth-child(2) {
    width: 100%;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background: var(--dark-gray);

    h1 {
      color: var(--white);
      font-size: 18px;
      line-height: 28px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: var(--white-gray);
    }
  }
  form {
    background: var(--dark-gray);

    width: 100%;
    gap: 0.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    label,
    span {
      color: var(--white);
      font-size: 12px;
      font-weight: 400;
      width: 90%;
    }
    span {
      font-size: 10px;
      color: var(--negative-feedback);
    }
    input,
    select {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding: 0px 10px;
      margin-bottom: 3px;

      width: 90%;
      height: 35px;

      background: var(--gray);
      color: var(--white);

      border: 1px solid var(--gray);
      border-radius: 4px;

      /* ${props =>
        !props.errored &&
        css`
          border: 1px solid var(--negative-feedback);
        `} */

      ::placeholder {
        color: var(--white-gray);
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
      }

      transition: 1s;
      &:focus {
        border: 1px solid var(--white);

        ::placeholder {
          color: var(--white);
        }
      }
    }
    button {
      margin: 12px 0px;

      transition: 1s;

      &:hover {
        background: var(--pink-focus);
      }
    }
  }
`;
