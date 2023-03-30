import { NavigateBrandsContainer, BrandsList } from "./style";

import VtexBrand from "../../assets/VtexBrand.png";

export const NavigateBrands = () => {
  return (
    <NavigateBrandsContainer>
      <p>Navegue por marcas</p>
      <BrandsList>
        <li>
          <img src={VtexBrand} />
        </li>
        <li>
          <img src={VtexBrand} />
        </li>
        <li>
          <img src={VtexBrand} />
        </li>
        <li>
          <img src={VtexBrand} />
        </li>
        <li>
          <img src={VtexBrand} />
        </li>
      </BrandsList>
    </NavigateBrandsContainer>
  );
};
