import {
  SaleProductContainer,
  Topic,
  Line,
  MenuProducts,
  MenuButton,
  OtherProducts,
} from "./style";

import { useState } from "react";

import { CarouselComponent } from "../Carousel";

export const SelectProduct = () => {
  const [activeButton, setActiveButton] = useState<string>("celphone");

  return (
    <SaleProductContainer>
      <Topic>
        <Line />
        <p>Produtos relacionados</p>
        <Line />
      </Topic>
      <MenuProducts>
        <li>
          <MenuButton
            active={activeButton === "celphone"}
            onClick={() => setActiveButton("celphone")}
          >
            celular
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "accessorie"}
            onClick={() => setActiveButton("accessorie")}
          >
            acessórios
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "tablet"}
            onClick={() => setActiveButton("tablet")}
          >
            tablets
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "notebooks"}
            onClick={() => setActiveButton("notebooks")}
          >
            notebooks
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "tv"}
            onClick={() => setActiveButton("tv")}
          >
            tvs
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "all"}
            onClick={() => setActiveButton("all")}
          >
            ver todos
          </MenuButton>
        </li>
      </MenuProducts>
      {activeButton === "celphone" || activeButton === "all" ? (
        <CarouselComponent />
      ) : (
        <OtherProducts>
          <p>Nenhum produto</p>
        </OtherProducts>
      )}
    </SaleProductContainer>
  );
};
