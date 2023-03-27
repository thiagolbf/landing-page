import styled from "styled-components";
import Partner from "../../assets/Partner.png";

export const PartnerContainer = styled.div`
  font-family: var(--poppins);

  width: 100%;
  max-width: 1266px;

  margin: 0 auto 60px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--white);
`;

export const PartnerContent = styled.div`
  width: 574px;
  height: 350px;

  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000),
    url(${Partner});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  mix-blend-mode: normal;

  border-radius: 20px;

  > p.title {
    font-size: 40px;
    font-weight: 700;
    margin: 114px 0 8px 40px;
  }

  > p {
    font-size: 16px;
    font-weight: 400;
    width: 181px;
    margin: 0 0 32px 40px;
  }

  > button {
    text-transform: uppercase;
    margin-left: 40px;
    font-size: 16px;
    font-weight: 900;

    padding: 12px 24px;
    border-radius: 10px;
    border: none;

    background-color: var(--pink);
    color: var(--white);
  }
`;
