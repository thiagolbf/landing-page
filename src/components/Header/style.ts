import styled from "styled-components";

export const Header = styled.header`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: var(--poppins);
`;

export const TopList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  > li {
    display: flex;
    align-items: center;
    margin: 0 10px;
    font-weight: 500;

    > img {
      margin-right: 9px;
      width: 20px;
    }

    > span {
      color: var(--pink);
      font-weight: 600;
      margin: 0 2px;
    }
  }

  li:nth-child(even) {
    margin: 0 119px 0 119px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    li:nth-child(even) {
      margin: auto;
    }
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--lightGray);
  border-top-width: 80%;

  margin-top: 6px;

  > img {
    padding: 3px 0 8px 0;
    height: 50px;
  }

  > ul {
    display: flex;

    justify-content: space-evenly;
    align-items: center;

    li {
      margin: 0 10px;
      > img {
        width: 20px;
      }
    }
  }
`;

export const Menu = styled.ul`
  width: 100%;
  max-width: 1280px;
  padding: 5px;

  border-top: 1px solid var(--lightGray);
  border-top-width: 80%;

  border-left: 1px solid var(--lightGray);
  border-right: 1px solid var(--lightGray);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  box-shadow: 10px 0 10px -9px var(--gray), -10px 0 10px -9px var(--gray);

  > li {
    margin: 0px 10px;
  }
`;
