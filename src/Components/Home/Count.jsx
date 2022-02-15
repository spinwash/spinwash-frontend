import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Count = () => {
  return (
    <VStack maxW={'fit-content'} mx='auto' p='2rem'>
      <Text maxW='40rem' fontWeight={'300'} fontSize={{ base: 'xs', md: 'md' }}>
        Spinwash is a network of the very best Dry Cleaners. We provide the
        finest Dry Cleaning & Laundry service in the business combined with
        great customer service and super convenient collection and delivery at
        times that suit you.
      </Text>
      <HStack
        spacing={{ base: '1.5rem', md: '3rem' }}
        p={{ base: '2rem', md: '3rem' }}
      >
        <VStack align='start'>
          <Text
            fontWeight={'500'}
            lineHeight='6'
            fontSize={{ base: '2xl', md: '4xl' }}
          >
            1,000+
          </Text>
          <Text fontWeight={'300'} fontSize={{ base: 'sm', md: 'md' }}>
            clients
          </Text>
        </VStack>
        <VStack align='start'>
          <Text
            fontWeight={'500'}
            lineHeight='6'
            fontSize={{ base: '2xl', md: '4xl' }}
          >
            200+
          </Text>
          <Text fontWeight={'300'} fontSize={{ base: 'sm', md: 'md' }}>
            cities
          </Text>
        </VStack>
        <VStack align='start'>
          <Text
            fontWeight={'500'}
            lineHeight='6'
            fontSize={{ base: '2xl', md: '4xl' }}
          >
            50+
          </Text>
          <Text fontWeight={'300'} fontSize={{ base: 'sm', md: 'md' }}>
            Services
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Count;
