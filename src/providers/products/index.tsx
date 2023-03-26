import { createContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";

interface ProductsProviderProps {
  children: ReactNode;
}

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductsProviderData {
  products: Product[];
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    axios
      .get(
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
      )
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
