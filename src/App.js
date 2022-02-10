import styled from "styled-components";
import SignIn from './pages/Sign-In';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

import HomePage from "./pages/homepage";
import Category from "./pages/category";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { AuthProvider } from './contexts/AuthContext';
import { SessionDataProvider } from './contexts/SessionDataContext';

const AppStyled = styled.div`

`

function App() {

  const [displayMenu, setDisplayMenu] = useState(false)

  return (

    <>
    <AuthProvider>
      <SessionDataProvider>
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
            <Route path="/" element={<HomePage />}> </Route>
            <Route path='/sign-in' element={<SignIn/>}></Route>
            <Route path='/sign-up' element={<SignUp/>}></Route>
          <Route path="/category/:name" element={<Category />} />
          <Route path="/item/:id" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </SessionDataProvider>
    </AuthProvider>

    </>
  );
}


export default App;
