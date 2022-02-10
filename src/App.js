import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";
import Header from "./components/Header";

const AppStyled = styled.div`

`

function App() {
  return (
    <AppStyled>
      <Header user={"Alan"} shoppingCartSize={"02"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
        </Routes>
      </BrowserRouter>
    </AppStyled>

  );
}

export default App;
