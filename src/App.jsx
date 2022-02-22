import { Routes, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import { Home, RegisterPage, Orders, Profile } from './Pages/Index';
import { Activate, ResetPassword } from './Components/Authentication/Index';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={''} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='orders' element={<Orders />} />
        <Route path='profile' element={<Profile />} />
        <Route path='user/activate' element={<RegisterPage />} />
        <Route path='user/reset-password' element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
