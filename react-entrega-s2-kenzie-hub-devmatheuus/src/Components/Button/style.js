import styled, { css } from 'styled-components';

export const Container = styled.button`
  color: var(--white);

  width: 100%;
  border-radius: 4px;
  border: 1px solid;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 1s;

  background: ${props => {
    switch (props.bgSchema) {
      case 'pink':
        return css`
          background: var(--pink);
          background: var(--pink);
          border-color: var(--pink);

          padding: 8px 22px;

          @media (max-width: 500px) {
            width: 400px;
          }

          &:hover {
            background: var(--pink-focus);
          }
        `;

      case 'gray':
        return css`
          background: var(--white-gray);
          background: var(--white-gray);

          padding: 10px 22px;

          border-color: var(--white-gray);

          @media (max-width: 500px) {
            width: 80%;
          }
          &:hover {
            background: var(--gray);
          }
        `;

      default:
        return css`
          background: var(--dark-gray);
          background: var(--dark-gray);

          padding: 0px 16px;
          max-width: 67px;

          border: none;

          font-weight: 600;
          font-size: 12px;
          line-height: 28px;

          &:hover {
            background: var(--gray);
          }
        `;
    }
  }};
`;
