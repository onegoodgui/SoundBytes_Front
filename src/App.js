import SignIn from './pages/Sign-In';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SessionDataProvider } from './contexts/SessionDataContext';

function App() {
  return (
    <>
    <AuthProvider>
      <SessionDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/sign-in' element={<SignIn/>}></Route>
            <Route path='/sign-up' element={<SignUp/>}></Route>
          </Routes>
        </BrowserRouter>
      </SessionDataProvider>
    </AuthProvider>

    </>
  )
}

export default App;
