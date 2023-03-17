import styled from "styled-components";

interface ButtonProps {
  active: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: var(--white);

  color: ${(props) => (props.active ? "var(--pink)" : "var(--gray)")};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    color: ${(props) => (props.active ? "" : "var(--middleGray)")};
  }
`;
