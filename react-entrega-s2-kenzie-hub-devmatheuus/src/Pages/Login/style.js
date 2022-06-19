import styled, { keyframes } from 'styled-components';

import loginImg from '../../assets/login.gif';

export const Container = styled.div`
  width: 90%;
  height: 80vh;

  padding: 1rem 0;
  margin: 30px auto;
  gap: 1rem;

  display: flex;
  justify-content: center;

  box-shadow: 5px 5px 10px var(--shadow-login);

  @media (max-width: 1100px) {
    margin: 0;
    margin-left: 1.2rem;

    width: 96%;
  }
`;

export const ImageBackground = styled.div`
  @media (min-width: 1110px) {
    flex: 1;

    background: url(${loginImg}) no-repeat center;
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
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .form-header {
      display: flex;
      justify-content: center;

      width: 88%;
    }

    .form-header {
      @media (max-width: 500px) {
        align-items: center;
        width: 100%;

        margin-right: 45px;
      }
    }

    .input-group {
      @media (max-width: 500px) {
        align-items: center;
        width: 100%;

        margin-right: 30px;
      }
    }
    button[type='submit'] {
      width: 104%;

      margin-left: 5px;
      margin-top: 20px;

      @media (max-width: 500px) {
        width: 95%;
      }
    }
  }
  .cadastro {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 500px;
    gap: 2rem;

    margin-left: 30px;

    p {
      color: var(--white-gray);

      font-size: 14px;
      text-align: center;
    }

    @media (max-width: 500px) {
      width: 100%;

      margin-left: 0px;
      margin-right: 40px;

      button {
        width: 100%;
      }
    }
  }
`;
