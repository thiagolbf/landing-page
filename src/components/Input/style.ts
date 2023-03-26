import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 697px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--lightGray);
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--black);
  padding: 5px;
  margin-left: 95px;
  margin-right: 61px;
  margin-top: 12px;
  margin-bottom: 12px;
  > input {
    width: 100%;
    outline-style: none;
    border-style: none;
    background-color: var(--lightGray);
    padding: 7px;
    border-radius: 5px;

    ::placeholder {
      font-size: 14px;
      color: var(--gray);
    }
  }

  @media (max-width: 400px) {
    > img {
      width: 15px;
    }

    > input {
      padding: 0;
      ::placeholder {
        font-size: 11px;
      }
    }
  }
`;
