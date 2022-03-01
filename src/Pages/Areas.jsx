import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  Container,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SearchBar from '../Components/Price List/SearchBar';
import Lottie from 'react-lottie';
import * as animationData from '../Components/LottieFiles/lf30_editor_g9cdecsk.json';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const Data = [
  {
    id: 0,
    area: 'Beckenham',
    parent: 'Bromley',
  },
  {
    id: 1,
    area: 'Bickley',
    parent: 'Bromley',
  },
  {
    id: 2,
    area: 'Biggin Hill',
    parent: 'Bromley',
  },
  {
    id: 3,
    area: 'Bromley Common',
    parent: 'Bromley',
  },
  {
    id: 4,
    area: 'Chiselhurst',
    parent: 'Bromley',
  },
  {
    id: 5,
    area: 'Crystal Palace',
    parent: 'Bromley',
  },
  {
    id: 6,
    area: 'Downham',
    parent: 'Bromley',
  },
  {
    id: 7,
    area: 'Elmstead',
    parent: 'Bromley',
  },
  {
    id: 8,
    area: 'Glades',
    parent: 'Bromley',
  },
  {
    id: 9,
    area: 'Hayes',
    parent: 'Bromley',
  },
  {
    id: 10,
    area: 'Keston Orpingto',
    parent: 'Bromley',
  },
  {
    id: 11,
    area: 'Petts Wood',
    parent: 'Bromley',
  },
  {
    id: 12,
    area: 'Ruxley',
    parent: 'Bromley',
  },
  {
    id: 13,
    area: 'Shirley',
    parent: 'Bromley',
  },
  {
    id: 14,
    area: 'Shortlands',
    parent: 'Bromley',
  },
  {
    id: 15,
    area: 'St Mary Cray',
    parent: 'Bromley',
  },
  {
    id: 16,
    area: 'Sundridge',
    parent: 'Bromley',
  },
  {
    id: 0,
    area: 'Addington',
    parent: 'Croydon',
  },
  {
    id: 1,
    area: 'Addisoncombe',
    parent: 'Croydon',
  },
  {
    id: 2,
    area: 'Herne Hill ',
    parent: 'Croydon',
  },
  {
    id: 3,
    area: 'Thornton Heath',
    parent: 'Croydon',
  },
  {
    id: 0,
    area: 'Grove Park',
    parent: 'Lewisham',
  },
  {
    id: 1,
    area: 'Sidcup',
    parent: 'Lewisham',
  },
  {
    id: 2,
    area: 'Sydenham',
    parent: 'Lewisham',
  },
];

const Areas = () => {
  const defaultOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container maxW='full' p='0'>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        justifyContent='space-between'
        maxW='9xl'
        mx='auto'
        padding='0'
        spacing='0'
      >
        <VStack
          zIndex={'1'}
          p={{ base: '2rem 0rem 0rem 0rem', lg: '8rem 2rem 4rem 2rem' }}
          spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
          ml={{ base: 'auto', xl: '8rem' }}
          mr={{ base: 'auto', xl: '-20rem' }}
          maxW={{ base: '80vw', xl: '44vw' }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
          >
            <Heading
              fontWeight={'600'}
              fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
            >
              Areas & Postcodes We Cover
            </Heading>
          </MotionBox>
          <MotionBox
            as='flex'
            alignSelf='start'
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.7, ease: 'easeInOut' },
            }}
          >
            <Center
              w={['70vw', '50vw', '30vw']}
              bg='spinwash.500'
              h={{ base: '1rem', md: '4rem' }}
            >
              <SearchBar
                dark={true}
                data={Data}
                placeholder='Search for Item'
              />
            </Center>
          </MotionBox>
        </VStack>
      </Stack>
      <Container
        maxW='8xl'
        p={{ base: '1rem 0rem 0rem 0rem', xl: '0' }}
        my='4rem'
      >
        <Wrap
          align={{ base: 'center', sm: 'start' }}
          justify={{ base: 'center', lg: 'space-between' }}
          maxW='4xl'
          mx={{ base: 'auto', lg: 'auto', xl: '0' }}
        >
          <MotionVStack
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.8, ease: 'easeInOut' },
            }}
            alignItems={'start'}
            minW={{ base: '18rem', sm: '14rem', xl: '15rem' }}
          >
            <Heading fontWeight={'500'} fontSize={{ base: 'xl', md: '3xl' }}>
              Bromley
            </Heading>
            {Data.map(
              (area) =>
                area.parent === 'Bromley' && (
                  <Text id={area.id} fontSize={{ base: 'sm', md: 'md' }}>
                    {area.area}
                  </Text>
                )
            )}
          </MotionVStack>
          <MotionVStack
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 1.2, ease: 'easeInOut' },
            }}
            minW={{ base: '18rem', sm: '14rem', xl: '15rem' }}
            alignItems={'start'}
          >
            <Heading fontWeight={'500'} fontSize={{ base: 'xl', md: '3xl' }}>
              Croydon
            </Heading>
            {Data.map(
              (area) =>
                area.parent === 'Croydon' && (
                  <Text id={area.id} fontSize={{ base: 'sm', md: 'md' }}>
                    {area.area}
                  </Text>
                )
            )}
          </MotionVStack>
          <MotionVStack
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 1.6, ease: 'easeInOut' },
            }}
            minW={{ base: '18rem', sm: '14rem', xl: '15rem' }}
            alignItems={'start'}
          >
            <Heading fontWeight={'500'} fontSize={{ base: 'xl', md: '3xl' }}>
              Lewisham
            </Heading>
            {Data.map(
              (area) =>
                area.parent === 'Lewisham' && (
                  <Text id={area.id} fontSize={{ base: 'sm', md: 'md' }}>
                    {area.area}
                  </Text>
                )
            )}
          </MotionVStack>
        </Wrap>
      </Container>
    </Container>
  );
};

export { Areas };
