import { GlobalStyle } from "./style/global";

import { HeaderComponent } from "./components/Header";
import { SaleComponent } from "./components/Sale";
import { MenuIcon } from "./components/MenuIcon";
import { SelectProduct } from "./components/SelectProduct";
import { PartnerCard } from "./components/PartnerCard";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <SaleComponent />
      <MenuIcon />
      <SelectProduct />
      <PartnerCard title={"Parceiros"} />
    </>
  );
}

export default App;
