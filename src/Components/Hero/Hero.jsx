import HeroImage from '../Images/spinwash.webp';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Heading, Image, Text, VStack, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import BookingBar from './BookingBar';
import axios from 'axios';
import { isAuth } from '../../Helpers/auth';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

const Hero = () => {
  const [addressData, setAddressData] = useState('');
  const id = isAuth()?._id;

  useEffect(() => {
    if (id) {
      axios
        .get(`https://spinwash.herokuapp.com/api/user/${id}`)
        .then((res) => {
          setAddressData(res.data.address);
        })
        .catch((err) => console.log(err));
    }
  }, [addressData, id]);

  const useHasBeenViewed = () => {
    const [reference, inView] = useInView();
    const prevInView = useRef(false);
    const hasBeenViewed = prevInView.current || inView;
    useEffect(() => {
      prevInView.current = inView;
    });

    return [hasBeenViewed, reference];
  };

  const [hasBeenViewed, reference] = useHasBeenViewed();

  return (
    <MotionStack
      ref={reference}
      viewport={{ once: true }}
      initial={{ opacity: hasBeenViewed ? 1 : 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      maxW='9xl'
      direction={{ base: 'column', lg: 'row' }}
      justifyContent='space-between'
      mx='auto'
      bg='spinwash.300'
      padding='0'
      spacing='0'
    >
      <VStack
        zIndex={'1'}
        color='white'
        p={{
          base: '2rem 0rem 0rem 0rem',
          sm: '6rem 0rem 6rem 0rem',
          lg: '8rem 2rem 4rem 2rem',
        }}
        spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
        ml={{ base: 'auto', xl: '8rem' }}
        mr={{ base: 'auto', xl: '-20rem' }}
        maxW={{ base: '80vw', xl: '50vw' }}
        alignItems='flex-start'
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6, ease: 'easeInOut' },
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
            transition: { duration: 0.6, delay: 0.8, ease: 'easeInOut' },
          }}
        >
          <Text
            maxW={{ base: '80vw', xl: '40vw' }}
            pb='1rem'
            fontSize={{ base: 'sm', md: 'md' }}
          >
            We here at Spinwash strive to provide our customers with the finest
            dry cleaning and laundry service. With over 20 years of experience
            we will provide you with the best cleaning possible. We collect,
            clean and deliver your clothes without you having to leave the
            comfort of your home
          </Text>
        </MotionBox>
        <MotionBox
          bg='white'
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.9, ease: 'easeInOut' },
          }}
          w={{ base: '75vw', sm: '80vw', md: '64vw', lg: '38vw' }}
          alignSelf={'start'}
          display='flex'
        >
          <BookingBar addressData={addressData} />
        </MotionBox>
      </VStack>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.6, delay: 2, ease: 'easeInOut' },
        }}
        display={{ base: 'flex', sm: 'none', lg: 'hidden' }}
        alignItems='center'
        justifyContent={{ base: 'flex-end', sm: 'flex-end', lg: 'center' }}
      >
        <Image
          zIndex={'0'}
          src={HeroImage}
          w='clamp(18rem, 45vw,40rem)'
          pt='4rem'
          pr={{ base: '1rem', md: '0rem', lg: '2rem' }}
          align={'flex-end'}
          mt='auto'
          //maxW={{ base: '40rem', lg: '60rem' }}
        />
      </MotionBox>
    </MotionStack>
  );
};

export default Hero;
