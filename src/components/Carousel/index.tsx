import { CarouselContainer, Carousel, Container } from "./style";

import { ProductCard } from "../ProductCard";

import { useRef, useContext } from "react";
import { ProductsContext } from "../../providers/products";

import RightArrown from "../../assets/RightArrown.png";
import LeftArrown from "../../assets/LeftArrown.png";

export const CarouselComponent = () => {
  const { products } = useContext(ProductsContext);
  const carousel = useRef<HTMLDivElement>(null);

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (carousel.current) {
      if (
        Math.ceil(
          carousel.current.scrollWidth - carousel.current.scrollLeft
        ) === carousel.current.clientWidth
      ) {
        carousel.current.scrollLeft -= 100;
      } else {
        carousel.current.scrollLeft += 330;
      }
    }
  };

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      if (carousel.current.scrollLeft > 0) {
        carousel.current.scrollLeft -= 330;
      }
    }
  };

  return (
    <Container>
      <button onClick={handleLeftClick}>
        <img src={LeftArrown} alt="left arrown" />
      </button>
      <CarouselContainer>
        <Carousel ref={carousel}>
          {products.map((value, index) => {
            return (
              <ProductCard
                key={index}
                photo={value.photo}
                descriptionShort={value.descriptionShort}
                productName={value.productName}
                price={value.price}
              />
            );
          })}
        </Carousel>
      </CarouselContainer>
      <button onClick={handleRightClick}>
        <img src={RightArrown} alt="right arrown" />
      </button>
    </Container>
  );
};
