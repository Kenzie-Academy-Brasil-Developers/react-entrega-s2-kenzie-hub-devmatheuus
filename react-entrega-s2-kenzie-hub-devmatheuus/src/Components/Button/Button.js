import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);

  border-radius: 4px;
  border: 1px solid;

  width: 90%;

  ${({ bgSchema }) => {
    switch (bgSchema) {
      case 'pink':
        return css`
          background: var(--pink);

          padding: 8px 22px;

          border-color: var(--pink);
        `;
      case 'gray':
        return css`
          background: var(--white-gray);

          padding: 10px 22px;

          border-color: var(--white-gray);
        `;

      default:
        return css`
          background: var(--dark-gray);

          padding: 0px 16px;
          max-width: 67px;

          border: none;

          font-weight: 600;
          font-size: 12px;
          line-height: 28px;
        `;
    }
  }};
`;

export default Button;
