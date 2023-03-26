import { ProductContainer } from "./style";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export const ProductCard = ({
  photo,
  productName,
  descriptionShort,
  price,
}: Product) => {
  return (
    <ProductContainer>
      <img src={photo} alt="celphone" />

      <p className="productName">{productName}</p>
      <p className="description">{descriptionShort}</p>
      <div className="price">
        <del>
          <p>R$ 30,00</p>
        </del>
        <p>R$ {price}</p>
      </div>
      <p className="paymentCondition">ou 2x de R$ 5000 sem juros</p>
      <p className="delivery">Frete grátis</p>

      <button>comprar</button>
    </ProductContainer>
  );
};
