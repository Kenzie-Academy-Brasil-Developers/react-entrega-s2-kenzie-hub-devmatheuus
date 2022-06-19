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
    height: 130px;

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
        justify-content: center;
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

    .form-buttons {
      width: 100%;
      height: 40%;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      button {
        width: 40%;
        height: 80%;
      }
    }
  }
`;
