import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ServiceWrap from './ServicesWrap';

const MotionBox = motion(Box);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: 40 },
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      py='4rem'
      bg='spinwash.100'
      ref={ref}
      animate={controls}
      variants={variant}
      initial='hidden'
    >
      <Heading textAlign={'center'} w='full'>
        Services
      </Heading>
      <Text
        textAlign={'center'}
        fontSize={{ base: 'xs', md: 'md' }}
        fontWeight='400'
        maxW='3xl'
        mx='auto'
        p='1.5rem'
      >
        We have a variety of services making sure your clothes/ items get the
        best service possible along with making sure each requirement of yours
        is met.
      </Text>
      <Container maxW='5xl'>
        <ServiceWrap />
      </Container>
    </MotionBox>
  );
};

export default Services;
