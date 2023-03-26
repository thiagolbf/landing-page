import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  > button {
    margin: 0 20px;
    background-color: var(--white);
    border: none;
    > img {
      width: 15px;
    }
  }

  @media (max-width: 1400px) {
    > button {
      margin: 0 10px;
    }
  }

  @media (max-width: 500px) {
    > button {
      margin: 0;
    }
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1266px;
  margin: 20px 0 71px 0;
`;

export const Carousel = styled.div`
  display: flex;

  overflow-x: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;
