import { Routes, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import { Home, RegisterPage } from './Pages/Index';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={''} />
        <Route path='register' element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
