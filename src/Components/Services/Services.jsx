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
        maxW='5xl'
        mx='auto'
        p='1.5rem'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
      </Text>
      <Container maxW='5xl'>
        <ServiceWrap />
      </Container>
    </MotionBox>
  );
};

export default Services;
