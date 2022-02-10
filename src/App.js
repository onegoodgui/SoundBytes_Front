import SignIn from './pages/Sign-In';
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
          </Routes>
        </BrowserRouter>
      </SessionDataProvider>
    </AuthProvider>

    </>
  )
}

export default App;
