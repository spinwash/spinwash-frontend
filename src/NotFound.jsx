import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const NotFound = () => {
  return (
    <Center w='full' h='72vh'>
      <VStack>
        <Heading fontSize={{ base: '8xl', lg: '9xl' }} fontWeight='900'>
          404
        </Heading>
        <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} lineHeight='0'>
          Page Not Found
        </Text>
      </VStack>
    </Center>
  );
};

export default NotFound;
