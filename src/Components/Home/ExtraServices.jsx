import React, { useEffect } from 'react';
import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BookOff from './BookOff';
import { useNavigate } from 'react-router-dom';

const MotionStack = motion(Stack);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 40 },
};

const ExtraServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionStack
      ref={ref}
      animate={controls}
      variants={variant}
      initial='hidden'
      direction={{ base: 'column', lg: 'row' }}
      mx='auto'
      px={{ base: '0', md: '1rem' }}
      py={{ base: '2rem', md: '0' }}
      maxW='8xl'
      w='full'
      align='center'
      justifyContent='space-between'
      my={{ base: '2rem', md: '6rem' }}
      spacing={{ base: '2rem', md: '' }}
    >
      <BookOff />
      <VStack
        bg='spinwash.100'
        maxW={'fit-content'}
        alignItems='start'
        spacing='1rem'
        mx='auto'
        p='2rem'
      >
        <Heading fontWeight={'500'} fontSize={{ base: '2xl', md: '3xl' }}>
          Extra Services
        </Heading>
        <Text
          maxW='36rem'
          fontWeight={'300'}
          fontSize={{ base: 'xs', md: 'md' }}
        >
          For any additional service please contact us via email or phone for
          more information.
        </Text>
        <Text
          bg={'white'}
          p='1rem 2rem'
          maxW='40rem'
          fontWeight={'400'}
          fontSize={{ base: 'xs', md: 'md' }}
        >
          Get 20% Off with your first order by using the code : SPINWASH20{' '}
        </Text>
        <Text
          as='span'
          fontSize='xs'
          onClick={() => {
            navigate('/t&c');
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          Discounts are only applied once the order total is above £20 after
          applying the discount
        </Text>
      </VStack>
    </MotionStack>
  );
};

export default ExtraServices;
