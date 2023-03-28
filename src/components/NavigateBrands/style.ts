import styled from "styled-components";

export const NavigateBrandsContainer = styled.section`
  width: 100%;
  max-width: 1266px;
  margin: auto;
  > p {
    font-family: var(--poppins);
    color: var(--pink);
    text-align: center;

    font-size: 30px;
    font-weight: 700;
  }
`;

export const BrandsList = styled.ul`
  width: 100%;
  max-width: 1266px;
  margin: 52px 0 89px 0;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
  }

  > li {
    width: 211px;
    height: 211px;

    border-radius: 100%;

    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.13);
    display: flex;
    margin: 10px;

    > img {
      margin: auto;
      padding: 0 20px 0 20px;
    }
  }
`;
