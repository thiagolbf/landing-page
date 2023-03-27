import styled from "styled-components";

export const Menu = styled.ul`
  margin: 34px auto 0 auto;
  font-family: var(--poppins);
  width: 100%;
  max-width: 1266px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  li:first-child {
    > p {
      color: var(--pink);
    }
  }

  li {
    max-width: 150px;
    text-align: center;
    margin: 0 10px;

    > img {
      background: var(--lightGray);
      padding: 34px 34px 33px 33px;
      box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.13);
      border-radius: 10px;
    }
    > p {
      margin-top: 22px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
