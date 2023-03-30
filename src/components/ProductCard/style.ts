import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 270px;
  border: 1px solid var(--middleGray);
  box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);

  border-radius: 10px;

  font-family: var(--poppins);

  margin-right: 62px;
  text-align: center;

  > img {
    padding: 32px 12px 9px 11px;
  }

  p.description {
    font-weight: 300;
    font-size: 15px;

    margin: 0 14px 0 11px;
    text-align: left;
  }

  p.paymentCondition {
    font-weight: 300;
    font-size: 12px;
    text-align: left;
    margin-left: 11px;
  }

  p.delivery {
    font-weight: 400;
    font-size: 12px;
    text-align: left;
    color: var(--pink);

    margin: 2px 0 12px 11px;
  }

  > button {
    width: 245px;
    padding: 12px 0;
    margin-bottom: 12px;
    text-transform: uppercase;
    text-align: center;

    font-weight: 700;

    border-radius: 5px;
    border: none;

    background-color: var(--pink);
    color: var(--white);
  }

  > div.price {
    margin: 12px 0 2px 11px;
    del {
      color: var(--gray);
      font-weight: 300;
    }
    p:first-child {
      font-weight: 300;
      font-size: 16px;
      text-align: left;
      color: var(--gray);
    }
    p:nth-child(2) {
      font-weight: 700;
      font-size: 20px;
      text-align: left;
      color: var(--black);
    }
  }
`;
