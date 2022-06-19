import styled, { keyframes } from 'styled-components';

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
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  background: var(--shadow-bgmodal);

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 22px;
    width: 369px;
    height: 342px;

    overflow-y: auto;

    background: var(--dark-gray);
    box-shadow: 0px 4px 40px -10px var(--shadow-delete-modal);
    border-radius: 4px;

    animation: ${appearFromRight} 1s;

    @media (max-width: 500px) {
      width: 75%;
    }

    .modal-header {
      display: flex;
      justify-content: space-around;
      align-items: center;

      gap: 10px;
      width: 100%;
      padding: 10px 0px;

      background: var(--gray);

      .header-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        max-width: 320px;

        p {
          font-weight: 700;
          font-size: 14px;
          line-height: 24px;

          color: var(--white);
        }

        button {
          background: transparent;

          svg {
            color: var(--white-gray);
          }
        }

        @media (max-width: 500px) {
          flex-wrap: wrap;

          p {
            margin-left: 8%;
            font-size: 12px;
          }

          button {
            margin-right: 8%;
          }
        }
      }
    }

    .modal-form {
      width: 100%;
      height: 100%;
      max-width: 320px;

      form {
        display: flex;
        flex-direction: column;

        gap: 1rem;

        @media (max-width: 500px) {
          align-items: center;

          label {
            width: 85%;
          }

          button {
            width: 86%;
          }
        }

        label {
          font-weight: 400;
          font-size: 12px;

          color: var(--white);
        }

        span {
          color: var(--red);
        }

        select {
          cursor: pointer;

          padding: 0px 16px;
          gap: 10px;

          width: 100%;
          height: 48px;

          background: var(--gray);
          color: var(--white);

          border-radius: 4px;

          @media (max-width: 500px) {
            padding: 0px 10px;
            gap: 5px;
            width: 86%;
            height: 40px;
          }
        }

        input {
          padding: 0px 16px;
          gap: 10px;
          width: 90%;
          height: 48px;

          background: var(--gray);
          color: var(--white-gray);

          border-radius: 4px;

          cursor: not-allowed;

          @media (max-width: 500px) {
            padding: 0px 10px;
            gap: 5px;
            width: 80%;
            height: 40px;
          }
        }
        button {
          height: 48px;
          margin-top: 5%;

          font-size: 16px;
          font-weight: 500;

          @media (max-width: 400px) {
            height: 40px;

            font-size: 14px;
          }
        }
      }
      .form-buttons {
        width: 100%;
        max-width: 320px;
        gap: 0.5rem;

        display: flex;
        justify-content: space-between;

        button:first-child {
          width: 60%;
        }
        button:nth-child(2) {
          width: 30%;
        }

        @media (max-width: 500px) {
          width: 85%;
          button {
            font-size: 14px;
          }
          button:first-child {
            width: 65%;
          }
          button:nth-child(2) {
            width: 27%;
          }
        }
        @media (max-width: 385px) {
          button {
            font-size: 10px;
          }
        }
      }
    }
  }
`;
