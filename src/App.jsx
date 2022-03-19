import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import {
  Home,
  RegisterPage,
  Orders,
  Profile,
  PriceList,
  Areas,
  TermsAndConditions,
} from './Pages/Index';
import { Activate, ResetPassword } from './Components/Authentication/Index';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={''} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='users/activate/:token' element={<Activate />} />
        <Route path='profile' element={<Profile />} />
        <Route path='pricing' element={<PriceList />} />
        <Route path='areas' element={<Areas />} />
        <Route path='orders' element={<Orders />} />
        <Route path='t&c' element={<TermsAndConditions />} />
        <Route path='user/reset-password' element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
