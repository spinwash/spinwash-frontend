import { VStack, Heading, Box } from '@chakra-ui/react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowButton from '../HOC/ArrowButton';

const BookNow = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <VStack
      alignItems={'start'}
      w='fit-content'
      spacing={{ base: '1rem', md: '2rem' }}
      mx={{ base: '2rem', md: 'auto' }}
      my='1rem'
    >
      <Heading
        fontWeight={'500'}
        fontSize={{ base: 'xl', md: '4xl' }}
        maxW='36rem'
      >
        GET 20% OFF YOUR FIRST ORDER using the code 'SPINWASH20'
      </Heading>
      <Box as='button' onClick={onClickHandler}>
        <ArrowButton variant='dark'>Book Now</ArrowButton>
      </Box>
    </VStack>
  );
};

export default BookNow;
