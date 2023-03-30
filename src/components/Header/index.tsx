import { Header, TopList, Search, Menu } from "./style";

import { useState } from "react";

import { MenuButton } from "../MenuButton";
import { InputComponent } from "../Input";

import ShieldCheck from "../../assets/ShieldCheck.png";
import CreditCard from "../../assets/CreditCard.png";
import Truck from "../../assets/Truck.png";
import Logo from "../../assets/Logo.png";
import Logout from "../../assets/Logout.png";
import Heart from "../../assets/Heart.png";
import Login from "../../assets/Login.png";
import ShoppingCart from "../../assets/ShoppingCart.png";

export const HeaderComponent = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  return (
    <Header>
      <TopList>
        <li>
          <img src={ShieldCheck} alt="shield check" />
          Compra <span>100% segura</span>
        </li>
        <li>
          {" "}
          <img src={Truck} alt="truck" />
          <span>Frete grátis</span> acima de R$ 200
        </li>
        <li>
          {" "}
          <img src={CreditCard} alt="credit card" />
          <span>Parcele</span> suas compras
        </li>
      </TopList>
      <Search>
        <img src={Logo} alt="logo" />

        <InputComponent placeholder="O que você está buscando" />
        <ul>
          <li>
            <img src={Logout} alt="logout icon" />
          </li>
          <li>
            <img src={Heart} alt="fav icon" />
          </li>
          <li>
            <img src={Login} alt="login icon" />
          </li>
          <li>
            <img src={ShoppingCart} alt="cart icon" />
          </li>
        </ul>
      </Search>
      <Menu>
        <li>
          <MenuButton
            active={activeButton === "all"}
            onClick={() => setActiveButton("all")}
          >
            todas categorias
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "markets"}
            onClick={() => setActiveButton("markets")}
          >
            supermercado
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "books"}
            onClick={() => setActiveButton("books")}
          >
            livros
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "fashion"}
            onClick={() => setActiveButton("fashion")}
          >
            moda
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "releases"}
            onClick={() => setActiveButton("releases")}
          >
            lançamentos
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "offers"}
            onClick={() => setActiveButton("offers")}
          >
            ofertas do dia
          </MenuButton>
        </li>
        <li>
          <MenuButton
            active={activeButton === "sign"}
            onClick={() => setActiveButton("sign")}
          >
            assinatura
          </MenuButton>
        </li>
      </Menu>

      {/* In this project doesn't have renderation for any options above, 
        so the code below it's just in case that need render some content
        in the future.
      */}

      {/* {activeButton === "all" ? (
        <p>todos</p>
      ) : activeButton === "markets" ? (
        <p>mercados</p>
      ) : null} */}
    </Header>
  );
};
