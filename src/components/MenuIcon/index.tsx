import { Menu } from "./style";

import SmartPhone from "../../assets/Smartphone.png";
import MarketPng from "../../assets/Market.png";
import Drink from "../../assets/Drink.png";
import Tool from "../../assets/Tool.png";
import Health from "../../assets/Health.png";
import Sport from "../../assets/Sport.png";
import Fashion from "../../assets/Fashion.png";

export const MenuIcon = () => {
  return (
    <Menu>
      <li>
        <img src={SmartPhone} />
        <p>Tecnologia</p>
      </li>
      <li>
        <img src={MarketPng} />
        <p>Supermercado</p>
      </li>
      <li>
        <img src={Drink} />
        <p>Bebidas</p>
      </li>
      <li>
        <img src={Tool} />
        <p>Ferramentas</p>
      </li>
      <li>
        <img src={Health} />
        <p>Saúde</p>
      </li>
      <li>
        <img src={Sport} />
        <p>Esportes e Fitness</p>
      </li>
      <li>
        <img src={Fashion} />
        <p>Moda</p>
      </li>
    </Menu>
  );
};
