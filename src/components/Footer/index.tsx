import { BaseboardContainer, FooterContainer } from "./style";

import FacebookLogo from "../../assets/FacebookLogo.png";
import InstagramLogo from "../../assets/InstagramLogo.png";
import YoutubeLogo from "../../assets/YoutubeLogo.png";

import VisaLogo from "../../assets/VisaLogo.svg";
import EloLogo from "../../assets/EloLogo.svg";
import AleloLogo from "../../assets/AleloLogo.svg";
import DinnersLogo from "../../assets/DinnersLogo.svg";
import IfoodLogo from "../../assets/IfoodLogo.svg";
import MastercardLogo from "../../assets/MastercardLogo.svg";
import PixLogo from "../../assets/PixLogo.svg";
import AmexLogo from "../../assets/AmexLogo.svg";
import TicketLogo from "../../assets/TicketLogo.svg";
import SodexoLogo from "../../assets/SodexoLogo.svg";

import Econverse from "../../assets/Econverse.svg";
import Vtex from "../../assets/Vtex.svg";

export const FooterComponent = () => {
  return (
    <FooterContainer>
      <BaseboardContainer>
        <div className="info">
          <ul className="about">
            <li>Sobre nós</li>
            <li>conheça</li>
            <li>como comprar</li>
            <li>indicação e desconto</li>
            <li className="aboutLogo">
              <img src={FacebookLogo} /> <img src={InstagramLogo} />
              <img src={YoutubeLogo} />
            </li>
          </ul>
          <ul className="utility">
            <li>informações úteis</li>
            <li>fale conosco</li>
            <li>dúvidas</li>
            <li>prazos de entrega</li>
            <li>formas de pagamento</li>
            <li>política de privacidade</li>
            <li>trocas e devoluções</li>
          </ul>
          <ul className="utility paymentConditions">
            <li>Formas de pagamento</li>
            <li className="logo">
              <img src={VisaLogo} /> <img src={EloLogo} />{" "}
              <img src={AleloLogo} />
            </li>
            <li className="logo">
              <img src={DinnersLogo} /> <img src={IfoodLogo} />{" "}
              <img src={MastercardLogo} />
            </li>
            <li className="logo">
              <img src={PixLogo} /> <img src={AmexLogo} />{" "}
              <img src={TicketLogo} />
            </li>
            <li>
              <img src={SodexoLogo} />
            </li>
          </ul>
        </div>
        <div className="register">
          <p className="title">
            cadastre-se e recebe nossas <span>novidades e promoções</span>
          </p>
          <p>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <div className="insertEmail">
            <input placeholder="seu e-mail" />
            <button>ok</button>
          </div>
        </div>
      </BaseboardContainer>
      <div className="teste">
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <ul>
          <li>
            <img src={Econverse} />
          </li>
          <li>
            <img src={Vtex} />
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
};
