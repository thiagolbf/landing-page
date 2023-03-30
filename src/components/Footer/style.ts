import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--black);
  font-family: var(--poppins);
  > div.teste {
    max-width: 1444px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 90px;
    > p {
      max-width: 698px;
      color: var(--white);
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 400;
    }
    > ul {
      display: flex;
      > li {
        margin-left: 30px;
      }
    }
    @media (max-width: 500px) {
      flex-direction: column;
      > ul {
        > li {
          margin: 30px;
        }
      }
    }
  }
`;

export const BaseboardContainer = styled.div`
  margin-top: 100px;
  font-family: var(--poppins);

  background-color: var(--black);
  color: var(--white);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  padding: 25px 0;

  border-bottom: 1px solid var(--gray);

  > div.info {
    display: flex;

    flex-wrap: wrap;
    width: 100%;
    max-width: 800px;

    > ul {
      display: flex;
      flex-direction: column;
      margin: 0 auto 0 auto;

      > li {
        font-size: 12px;
        margin-top: 19px;
      }
      > li.aboutLogo {
        display: flex;
        justify-content: space-between;
        margin: 10px 0 10px 0;
        width: 130px;
        padding-top: 40px;
      }
    }
    > ul.about {
      > li:first-child {
        font-weight: 700;
        margin-bottom: 24px;
      }
      > li:not(:first-child) {
        font-weight: 300;
        text-transform: uppercase;
      }
      > li:last-child {
        margin-top: 50px;
      }
    }

    > ul.utility {
      > li:first-child {
        font-weight: 700;
        margin-bottom: 24px;
        text-transform: uppercase;
      }
      > li:not(:first-child) {
        font-weight: 300;
        text-transform: uppercase;
      }
      > li.logo {
        display: flex;
        justify-content: space-between;
        margin: 10px 0 10px 0;
        width: 195px;
      }
    }
  }

  > div.register {
    background-color: var(--white);
    color: var(--black);
    border-radius: 10px;
    width: 380px;
    height: 260px;

    > p.title {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 300;
      margin: 40px 34px 15px 36px;
      > span {
        font-size: 21px;
        font-weight: 700;
      }
    }
    > p {
      font-size: 12px;
      font-weight: 300;
      text-align: center;
    }

    > div.insertEmail {
      display: flex;
      justify-content: center;
      text-align: center;
      margin: 31px 39px 40px 40px;

      > input {
        width: 230px;

        border-radius: 5px;
        padding: 10px;

        text-transform: uppercase;
        ::placeholder {
          font-size: 12px;
          color: var(--gray);
        }
      }

      > button {
        text-transform: uppercase;

        border-radius: 5px;
        border: none;

        background-color: var(--pink);
        color: var(--white);

        padding: 12px 20px;
        margin-left: 9px;
      }
    }

    @media (max-width: 500px) {
      max-width: 310px;

      margin: 10px 0;
    }
  }
`;
