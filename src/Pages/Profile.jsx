import {
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Wrap,
  Checkbox,
} from '@chakra-ui/react';
import React from 'react';

const data = {
  email: 'hashtag.irfan@gmail.com',
  name: 'Irfan Asif',
  phoneNumber: '+916005293283',
  address: 'Adi Cplx, Apos;petblr-53, Chickpet, Banglore, Karnatka',
  postcode: 185111,
  shirtHung: true,
  ShirtFolded: false,
  bedding: 2,
  profilePicture:
    'https://www.ommel.fi/content/uploads/2019/03/dummy-profile-image-male.jpg',
};

const Profile = () => {
  return (
    <Container maxW='8xl' py='3rem'>
      <Heading fontSize={{ base: '4xl', md: '5xl' }}>Your Profile</Heading>
      <Container
        overflow='hidden'
        maxW={'8xl'}
        fontSize={{ base: 'xs', md: 'md' }}
        my={{ base: '3rem', md: '4rem' }}
        display='flex'
        gap={{ base: '5rem', md: '6rem' }}
        flexDirection='column'
        p={{ base: '0', md: '2rem' }}
      >
        <VStack alignItems={'start'} gap='2rem'>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'500'}>
            Account
          </Heading>
          <VStack px='1rem'>
            <Wrap spacing={{ base: '2rem', md: '3rem' }} mx='auto'>
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                  Name
                </Heading>
                <Text fontWeight={400}>{data.name}</Text>
              </VStack>
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                  Email
                </Heading>
                <Text fontWeight={300}>{data.email}</Text>
              </VStack>
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                  Phone Number
                </Heading>
                <Text fontWeight={300}>{data.phoneNumber}</Text>
              </VStack>
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                  Address
                </Heading>
                <Text fontWeight={300}>{data.address}</Text>
              </VStack>
            </Wrap>
          </VStack>
        </VStack>
        <VStack alignItems={'start'} gap='2rem'>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'500'}>
            Preferences
          </Heading>
          <VStack px='1rem'>
            <Wrap spacing={{ base: '2rem', md: '3rem' }}>
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading
                  my='0.5rem'
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Bedding
                </Heading>
                <HStack pl='1rem'>
                  <Checkbox
                    size='lg'
                    colorScheme='blue'
                    defaultChecked={data.bedding === 1}
                    isDisabled
                  />
                  <Text as='span'>Wash and Press</Text>
                </HStack>
                <HStack pl='1rem'>
                  <Checkbox
                    size='lg'
                    colorScheme='blue'
                    defaultChecked={data.bedding === 2}
                    isDisabled
                  />
                  <Text as='span'>Wash and fold</Text>
                </HStack>
                <HStack pl='1rem'>
                  <Checkbox
                    size='lg'
                    colorScheme='blue'
                    defaultChecked={data.bedding === 3}
                    isDisabled
                  />
                  <Text as='span'>Press only</Text>
                </HStack>
              </VStack>
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading
                  my='0.5rem'
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Shirts
                </Heading>
                <HStack pl='1rem'>
                  <Checkbox
                    size='lg'
                    colorScheme='blue'
                    defaultChecked={data.shirtHung}
                    isDisabled
                  />
                  <Text as='span'>Shirt Hung</Text>
                </HStack>
                <HStack pl='1rem'>
                  <Checkbox
                    size='lg'
                    colorScheme='blue'
                    defaultChecked={data.ShirtFolded}
                    isDisabled
                  />
                  <Text as='span'>Shirt Folded</Text>
                </HStack>
              </VStack>
            </Wrap>
          </VStack>
        </VStack>
      </Container>
    </Container>
  );
};

export { Profile };
