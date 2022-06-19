import styled, { keyframes } from 'styled-components';

import signupImg from '../../assets/signup.gif';

export const Container = styled.div`
  width: 80%;
  height: 81vh;

  padding: 1rem 0;
  margin: 50px auto;

  display: flex;
  justify-content: center;

  box-shadow: 5px 5px 10px var(--shadow-login);

  @media (max-width: 500px) {
    width: 95%;
    height: 80vh;

    padding: 0px;
  }
`;

export const ImageBackground = styled.div`
  @media (min-width: 1110px) {
    flex: 1;

    background: url(${signupImg}) no-repeat center;
    background-size: contain;

    width: 50%;
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  max-width: 700px;
`;

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

export const AnimateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 370px;

  animation: ${appearFromRight} 2s;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .form-header {
      display: flex;
      justify-content: space-between;

      width: 88%;
    }

    button[type='submit'] {
      width: 104%;

      margin-left: 6px;

      @media (max-width: 500px) {
        width: 97%;
      }
    }
  }
`;
