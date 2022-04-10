import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import {
  Home,
  RegisterPage,
  Orders,
  Profile,
  PriceList,
  Areas,
  Services,
  About,
  TermsAndConditions,
} from './Pages/Index';
import { Activate, ResetPassword } from './Components/Authentication/Index';
import Footer from './Components/Footer/Footer';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='service/:service' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='users/activate/:token' element={<Activate />} />
        <Route path='profile' element={<Profile />} />
        <Route path='pricing' element={<PriceList />} />
        <Route path='areas' element={<Areas />} />
        <Route path='orders' element={<Orders />} />
        <Route path='t&c' element={<TermsAndConditions />} />
        <Route path='users/password/reset/:token' element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
