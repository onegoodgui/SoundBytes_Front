import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";
import Category from "./pages/category";
import Header from "./components/Header";

const AppStyled = styled.div`

`

function App() {
  return (
    <AppStyled>
      <Header user={"Alan"} shoppingCartSize={"02"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/item/:id" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AppStyled>

  );
}

export default App;
