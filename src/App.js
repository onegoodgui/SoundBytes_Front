import SignIn from './pages/Sign-In';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homepage";
import Header from "./components/Header";
import { AuthProvider } from './contexts/AuthContext';
import { SessionDataProvider } from './contexts/SessionDataContext';

function App() {
  return (
    <>
    <AuthProvider>
      <SessionDataProvider>
      <Header user={"Alan"} shoppingCartSize={"02"} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}> </Route>
            <Route path='/sign-in' element={<SignIn/>}></Route>
            <Route path='/sign-up' element={<SignUp/>}></Route>
          </Routes>
        </BrowserRouter>
      </SessionDataProvider>
    </AuthProvider>

    </>
  );
}


export default App;
