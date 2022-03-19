import { Box, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import ArrowButton from '../HOC/ArrowButton';

const Footer = () => {
  return (
    <Container maxW='8xl' my={{ base: '4rem', md: '12rem' }}>
      <Stack
        spacing={{ base: '2.5rem', md: 'auto' }}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Stack
          spacing={{ base: '2.5rem', md: '3rem', lg: '5rem' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <VStack fontSize={{ base: 'sm', md: 'md' }} alignItems={'start'}>
            <Heading
              mb={{ base: '0.5rem', md: '1rem' }}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight={'400'}
            >
              We are here
            </Heading>
            <Text maxW='15rem'>
              Head Office: 523A Upper Elmers End Road, Beckenham, Kent, BR3 3DE
            </Text>
          </VStack>
          <VStack fontSize={{ base: 'sm', md: 'md' }} alignItems={'start'}>
            <Heading
              mb={{ base: '0.5rem', md: '1rem' }}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight={'400'}
            >
              Get in touch
            </Heading>
            <Text>info@spinwash.com</Text>
            <Text>020 8125 3074</Text>
          </VStack>
          <VStack fontSize={{ base: 'sm', md: 'md' }} alignItems={'start'}>
            <Heading
              mb={{ base: '0.5rem', md: '1rem' }}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight={'400'}
            >
              Navigate
            </Heading>
            <Text>Services</Text>
            <Text>Pricing</Text>
            <Text>Areas we Serve</Text>
          </VStack>
        </Stack>
        <VStack
          spacing={{ base: '1rem', md: '1.5rem' }}
          fontSize={{ base: 'sm', md: 'md' }}
          alignItems={'start'}
        >
          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={'400'}>
            Book Our Service Now
          </Heading>
          <Box as='button'>
            <ArrowButton variant='dark'>Order Now</ArrowButton>
          </Box>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Footer;
