import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 270px;
  border: 1px solid var(--middleGray);
  box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);

  border-radius: 10px;

  font-family: var(--poppins);

  margin-right: 62px;

  > img {
    padding: 32px 12px 9px 11px;
  }

  p.description {
    font-weight: 300;
    font-size: 15px;

    margin: 0 14px 12px 11px;
  }

  > div.price {
    margin: 0 0 2px 11px;
    del {
      color: var(--gray);
      font-weight: 300;
    }
    p:first-child {
      font-weight: 300;
      font-size: 16px;

      color: var(--gray);
    }
    p:nth-child(2) {
      font-weight: 700;
      font-size: 20px;

      color: var(--black);
    }
  }
`;
