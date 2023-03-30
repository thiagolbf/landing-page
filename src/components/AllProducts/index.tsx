import { Line, Topic, SaleProductContainer } from "./style";

import { CarouselComponent } from "../Carousel";

export const AllProducts = () => {
  return (
    <SaleProductContainer>
      <Topic>
        <Line />
        <p>Produtos relacionados</p>
        <Line />
      </Topic>
      <p>Ver todos</p>
      <CarouselComponent />
    </SaleProductContainer>
  );
};
