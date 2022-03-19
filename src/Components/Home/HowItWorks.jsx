import { Center, Image, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WMImage from '../Images/WashingMachene.png';
import HowItWorksText from './HowItWorksText';

const MotionCenter = motion(Center);

const variant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, x: -40 },
};

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Stack
      direction={{ base: 'column-reverse', lg: 'row' }}
      align='center'
      my={{ base: '2rem', md: '8rem' }}
      mt={{ base: '3rem', md: '8rem' }}
      spacing='0'
    >
      <MotionCenter
        animate={controls}
        variants={variant}
        initial='hidden'
        overflow={'hidden'}
        w={{ base: '80%', md: '50%' }}
      >
        <Image
          ref={ref}
          src={WMImage}
          maxW={{ base: '360px', md: '600px' }}
          p='4rem'
        />
      </MotionCenter>
      <HowItWorksText />
    </Stack>
  );
};

export default HowItWorks;
