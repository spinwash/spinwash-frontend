import HeroImage from '../Images/Hero.png';
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  Center,
  Text,
  VStack,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      justifyContent='space-between'
      maxW='9xl'
      mx='auto'
      bg='spinwash.300'
      padding='0'
      spacing='0'
    >
      <VStack
        border='2px solid red'
        zIndex={'1'}
        color='white'
        p={{ base: '4rem 1rem 0rem 1rem', lg: '8rem 2rem 4rem 2rem' }}
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
            transition: { duration: 0.7, ease: 'easeInOut' },
          }}
        >
          <Heading fontSize={{ base: '4xl', xl: '8xl' }}>
            Finest Dry Cleaning and Laundry Service.
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.7, ease: 'easeInOut' },
          }}
        >
          <Text pb='1rem' fontSize={{ base: 'sm', md: 'md' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi
            iure atque, nemo dolorem eius excepturi deleniti molestias earum
            iusto. Repellendus debitis dolores odio sapiente.
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 1.6, ease: 'easeInOut' },
          }}
          minW='20rem'
          maxW={{ base: '10vw', md: '20vw', lg: '40vw' }}
          h={{ base: '3.8rem', md: '5rem', xl: '6rem' }}
          bg='white'
          alignSelf={'start'}
          display='flex'
        >
          <Center
            bg='spinwash.500'
            w={{ base: '4rem', lg: '5rem' }}
            h='auto'
            m='0.3rem'
          >
            <AiOutlineSearch size={26} />
          </Center>
        </MotionBox>
      </VStack>
      <Center>
        <Image
          zIndex={'0'}
          src={HeroImage}
          w='clamp(20rem, 80vw,70rem)'
          align={'flex-end'}
          mt='auto'
          //maxW={{ base: '40rem', lg: '60rem' }}
        />
      </Center>
    </Stack>
  );
};

export default Hero;
