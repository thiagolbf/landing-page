import styled from "styled-components";

import Sale from "../../assets/Sale.png";

export const SaleContainer = styled.div`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000),
    url(${Sale});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  mix-blend-mode: normal;
  font-family: var(--poppins);
  padding: 52px 0 0 92px;
  color: var(--white);

  > h2 {
    font-weight: 600;
    line-height: 72px;
    max-width: 800px;

    font-size: 48px;
    font-weight: 600;
  }

  > p {
    font-weight: 600;
    font-size: 36px;
  }

  > button {
    margin: 35px 0 50px 0;
    width: 227px;
    height: 60px;
    border-radius: 5px;
    border: none;

    background-color: var(--pink);
    color: var(--white);

    font-weight: 600;
    font-size: 18px;
  }
`;
