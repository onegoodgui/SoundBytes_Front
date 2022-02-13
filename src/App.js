import styled from "styled-components";
import SignIn from './pages/Sign-In';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

import HomePage from "./pages/homepage";
import Category from "./pages/category";
import Header from "./components/Header";
import ItemPage from "./pages/itemPage";
import Menu from "./components/Menu";
import ShoppingCart from "./pages/shoppingCart";
import Footer from "./components/Footer";
import Order from "./pages/order";
import Account from "./pages/account";
import PaymentAccount from "./pages/paymentAccount";
import AddressAccount from "./pages/addressAccount";


import { AuthProvider } from './contexts/AuthContext';
import { SessionDataProvider } from './contexts/SessionDataContext';
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

const AppStyled = styled.div`

`

function App() {


  const [displayMenu, setDisplayMenu] = useState(false)


  return (

    <>
      <AuthProvider>
        <SessionDataProvider>
          <ShoppingCartProvider>
            <BrowserRouter>
              <Header
                menuState={displayMenu}
                setMenu={setDisplayMenu}
              />
              <Menu
                menuState={displayMenu}
                setMenu={setDisplayMenu}
              />
              <Routes>
                <Route path="/" element={<HomePage />}> </Route>
                <Route path='/sign-in' element={<SignIn />}></Route>
                <Route path='/sign-up' element={<SignUp />}></Route>
                <Route path="/category/:name" element={<Category />} />
                <Route path="/item/:itemId" element={<ItemPage />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/order" element={<Order/>}></Route>
                <Route path="/account" element={<Account />} />
                <Route path="/account/payment/:id" element={<PaymentAccount />} />
                <Route path="/account/address/:id" element={<AddressAccount />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </ShoppingCartProvider>
        </SessionDataProvider>
      </AuthProvider>

    </>
  );
}


export default App;
