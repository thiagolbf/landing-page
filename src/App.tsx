import { GlobalStyle } from "./style/global";

import { HeaderComponent } from "./components/Header";
import { SaleComponent } from "./components/Sale";
import { MenuIcon } from "./components/MenuIcon";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <SaleComponent />
      <MenuIcon />
    </>
  );
}

export default App;
