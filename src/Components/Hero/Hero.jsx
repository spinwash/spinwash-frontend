import HeroImage from '../Images/Hero.png';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Image,
  Center,
  Text,
  VStack,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import BookingBar from './BookingBar';
import axios from 'axios';
import { isAuth } from '../../Helpers/auth';

const MotionBox = motion(Box);

const Hero = () => {
  const [addressData, setAddressData] = useState(
    '47 cours Franklin Roosevelt, Marseille'
  );
  const id = isAuth()?.id;

  useEffect(() => {
    axios
      .get(`https://spinwash.herokuapp.com/api/user/${id}`)
      .then((res) => {
        setAddressData(res.data.address);
        //console.log(addressData);
      })
      .catch((err) => console.log(err));
  });

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
        zIndex={'1'}
        color='white'
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
          <Heading fontSize={{ base: '4xl', xl: '8xl' }}>
            Finest Dry Cleaning and Laundry Service.
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.7, ease: 'easeInOut' },
          }}
        >
          <Text pb='1rem' fontSize={{ base: 'sm', md: 'md' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi
            iure atque, nemo dolorem eius excepturi deleniti molestias earum
            iusto. Repellendus debitis dolores odio sapiente.
          </Text>
        </MotionBox>
        <MotionBox
          bg='white'
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 1, ease: 'easeInOut' },
          }}
          w={{ base: '75vw', sm: '80vw', md: '64vw', lg: '38vw' }}
          alignSelf={'start'}
          display='flex'
        >
          <BookingBar addressData={addressData} />
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
