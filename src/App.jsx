import { Routes, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={''} />
      </Routes>
    </>
  );
}

export default App;
