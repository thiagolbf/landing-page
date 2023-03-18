import { GlobalStyle } from "./style/global";

import { HeaderComponent } from "./components/Header";
import { SaleComponent } from "./components/Sale";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <SaleComponent />
    </>
  );
}

export default App;
