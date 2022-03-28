import { VStack, Heading } from '@chakra-ui/react';
import React from 'react';
import ArrowButton from '../HOC/ArrowButton';
const BookNow = () => {
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
        fontSize={{ base: '2xl', md: '4xl' }}
        maxW='36rem'
      >
        The Best Dry Cleaning Delivered directly to your door
      </Heading>
      <ArrowButton variant='dark'>Book Now</ArrowButton>
    </VStack>
  );
};

export default BookNow;
