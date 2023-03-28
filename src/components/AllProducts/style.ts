import styled from "styled-components";

export const SaleProductContainer = styled.section`
  font-family: var(--poppins);
  font-size: 15px;
  font-weight: 700;

  > p {
    text-align: center;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  max-width: 360px;
  background-color: var(--middleGray);
`;

export const Topic = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: auto;
  font-family: var(--poppins);

  display: flex;
  justify-content: space-around;
  align-items: center;

  > p {
    font-size: 30px;
    font-weight: 700;
    color: var(--pink);
    text-align: center;
  }
`;
