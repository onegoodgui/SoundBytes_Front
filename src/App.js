import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/homepage";
import Category from "./pages/category";
import Header from "./components/Header";
import Menu from "./components/Menu";

const AppStyled = styled.div`

`

function App() {

  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <AppStyled>
      <Header
        user={"Alan"}
        shoppingCartSize={"02"}
        menuState={displayMenu}
        setMenu={setDisplayMenu}
      />
      <Menu
        menuState={displayMenu}
        setMenu={setDisplayMenu}
      />
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
