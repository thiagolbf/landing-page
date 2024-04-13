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
    // axios
    //   .get(
    //     "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    //   )
    //   .then((res) => {
    //     setProducts(res.data.products);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    /*API não pode ser mais utilizada, portanto colocando os dados abaixo para a aplicação
    voltar a funcionar e conseguir verificar todas as funcionalidades do projetos
    */

    setProducts([
      {
        "productName": "Iphone 11 PRO MAX BRANCO 1",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 1",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 15000
      },
      {
        "productName": "IPHONE 13 MINI 1",
        "descriptionShort": "IPHONE 13 MINI 1",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 9000
      },
      {
        "productName": "Iphone 11 PRO MAX BRANCO 2",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 2",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 14990
      },
      {
        "productName": "IPHONE 13 MINI 2",
        "descriptionShort": "IPHONE 13 MINI 2",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 12000
      },
      {
        "productName": "Iphone 11 PRO MAX BRANCO 3",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 3",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 4550
      },
      {
        "productName": "IPHONE 13 MINI 3",
        "descriptionShort": "IPHONE 13 MINI 3",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 38000
      },
      {
        "productName": "Iphone 11 PRO MAX BRANCO 4",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 4",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 42000
      },
      {
        "productName": "IPHONE 13 MINI 4",
        "descriptionShort": "IPHONE 13 MINI 4",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 520
      },
      {
        "productName": "Iphone 11 PRO MAX BRANCO 5",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 5",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 149990
      },
      {
        "productName": "IPHONE 13 MINI 5",
        "descriptionShort": "IPHONE 13 MINI 5",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 100000
      }
    ])
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
