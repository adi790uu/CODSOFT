import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OTP from './pages/OTP';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Product from './pages/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
          <Route path='/auth' element={<OTP />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
