import SignIn from './pages/Sign-In';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={<SignIn/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
