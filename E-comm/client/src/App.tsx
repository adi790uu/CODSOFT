import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OTP from './pages/OTP';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Browse from './pages/Browse';
import Admin from './pages/Admin';
import { useUser } from './store/selectors/user';
import { useRecoilValue } from 'recoil';

function App() {
  const user = useRecoilValue(useUser);
  console.log(user);
  return (
    <>
      <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/auth' element={<OTP />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        {user && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
