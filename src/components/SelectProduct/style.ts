import styled from "styled-components";

export const SaleProductContainer = styled.section``;

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

export const MenuProducts = styled.ul`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1266px;
`;

interface MEnuButtonProps {
  active: boolean;
}
export const MenuButton = styled.button<MEnuButtonProps>`
  text-transform: uppercase;
  width: 211px;
  border: 1px solid var(--middleGray);
  padding: 12px 0;
  background-color: var(--white);
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.active ? "var(--pink)" : "var(--gray)")};
  font-weight: ${(props) => (props.active ? "700" : "400")};
`;

export const OtherProducts = styled.div`
  margin: 20px 0 71px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--poppins);
  font-size: 20px;
  font-weight: 600;
`;
