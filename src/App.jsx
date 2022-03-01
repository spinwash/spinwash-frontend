import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import { Home, RegisterPage, Orders, Profile, PriceList, Areas } from './Pages/Index';
import { Activate, ResetPassword } from './Components/Authentication/Index';
import { isAuth } from './Helpers/auth';
import axios from 'axios';

function App() {
  const [orderData, setOrderData] = useState([]);
  const [profileData, setProfileData] = useState({});
  const id = isAuth()?._id;

  useEffect(() => {
    axios
      .get(`https://spinwash.herokuapp.com/api/user/${id}`)
      .then((res) => {
        console.log(res.data.order);
        setOrderData(res.data.order);
        setProfileData(res.data);
        console.log(id);
        console.log('profile data - ', profileData);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Navbar profilePicture={profileData} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={''} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='pricing' element={<PriceList />} />
        <Route path='areas' element={<Areas />} />
        <Route path='orders' element={<Orders Data={orderData} />} />
        <Route path='profile' element={<Profile Data={profileData} />} />
        <Route path='user/activate' element={<RegisterPage />} />
        <Route path='user/reset-password' element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
