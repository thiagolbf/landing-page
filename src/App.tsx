import { GlobalStyle } from "./style/global";

import { HeaderComponent } from "./components/Header";
import { SaleComponent } from "./components/Sale";
import { MenuIcon } from "./components/MenuIcon";
import { SelectProduct } from "./components/SelectProduct";
import { PartnerCard } from "./components/PartnerCard";
import { AllProducts } from "./components/AllProducts";
import { NavigateBrands } from "./components/NavigateBrands";
import { FooterComponent } from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <SaleComponent />
      <MenuIcon />
      <SelectProduct />
      <PartnerCard title={"Parceiros"} />
      <AllProducts />
      <PartnerCard title={"Produtos"} />
      <NavigateBrands />
      <AllProducts />
      <FooterComponent />
    </>
  );
}

export default App;
