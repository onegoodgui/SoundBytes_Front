import SignIn from './pages/Sign-In';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homepage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header user={"Alan"} shoppingCartSize={"02"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path='/sign-in' element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
