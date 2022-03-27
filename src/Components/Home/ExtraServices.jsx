import React, { useEffect } from 'react';
import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BookNow from './BookNow';

const MotionStack = motion(Stack);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 40 },
};

const ExtraServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
    >
      <BookNow />
      <VStack
        bg='spinwash.100'
        maxW={'fit-content'}
        alignItems='start'
        spacing='1rem'
        mx='auto'
        p='2rem'
      >
        <Heading fontWeight={'500'}>Extra Services</Heading>
        <Text
          maxW='36rem'
          fontWeight={'300'}
          fontSize={{ base: 'xs', md: 'md' }}
        >
          For all leather, suede, fur and shoe cleaning please contact us via
          phone or email for more information.
        </Text>
        <Text
          maxW='40rem'
          fontWeight={'400'}
          fontSize={{ base: 'xs', md: 'md' }}
        >
          Get £10 off when you spend £40!
        </Text>
        <Box bg={'white'} p='1rem 2rem'>
          MINUS10
        </Box>
      </VStack>
    </MotionStack>
  );
};

export default ExtraServices;
