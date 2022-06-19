import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BorderContainer = styled.main`
  width: 100%;

  border-bottom: 1px solid var(--gray);
  border-top: 1px solid var(--gray);

  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 810px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 840px) {
    flex-wrap: wrap;

    width: 93%;
  }
`;

export const InfoContainer = styled(Header)`
  height: 100px;

  h1 {
    font-size: 18px;
    line-height: 28px;

    color: var(--white);
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: var(--white-gray);
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const ControlsHeader = styled(Header)`
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: var(--white);
  }

  button {
    width: 32px;
  }
`;

export const TechnologiesListContainer = styled.ul`
  background: var(--dark-gray);

  width: 100%;
  max-width: 780px;
  height: 350px;
  padding: 1rem;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: auto;

  .list-null {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: var(--white);
    }

    img {
      width: 60%;
      height: 95%;

      @media (max-width: 500px) {
        width: 300px;
        height: 300px;
      }
    }
  }

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 450px) {
    width: 85%;
  }
`;

export const TechnologiesItemList = styled.li`
  cursor: pointer;

  width: 90%;
  padding: 1rem;
  margin-bottom: 15px;

  background: var(--black);

  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  transition: 1s;

  .technology {
    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;

      color: var(--white);
    }
  }
  .infos {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;

      color: var(--gray);
    }

    button {
      padding: 6px;

      background: transparent;

      svg {
        color: var(--white);

        transform: translateY(-1px);
      }
    }
  }

  &:hover {
    background: var(--gray);

    p {
      color: var(--white);
    }
  }
`;
