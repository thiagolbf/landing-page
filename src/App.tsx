import { GlobalStyle } from "./style/global";

import { HeaderComponent } from "./components/Header";
import { SaleComponent } from "./components/Sale";
import { MenuIcon } from "./components/MenuIcon";
import { SelectProduct } from "./components/SelectProduct";

import { CarouselComponent } from "./components/Carousel";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <SaleComponent />
      <MenuIcon />
      <SelectProduct />
    </>
  );
}

export default App;
