import {
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WMImage from '../Images/WashingMachene.png';
import {
  RiSmartphoneLine,
  RiShoppingBagLine,
  RiTruckLine,
} from 'react-icons/ri';

const MotionCenter = motion(Center);
const MotionVStack = motion(VStack);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 40 },
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
      <Center
        //ref={ref}
        //animate={controls}
        //variants={variant}
        //initial='hidden'
        overflow={'hidden'}
        w={{ base: '80%', md: '50%' }}
      >
        <Image src={WMImage} maxW={{ base: '360px', md: '600px' }} p='4rem' />
      </Center>
      <MotionCenter
        ref={ref}
        animate={controls}
        variants={variant}
        flexDirection='column'
        w={{ base: '90%', md: '50%' }}
        m='2rem'
        alignItems='start'
      >
        <Heading fontWeight={'500'} fontSize={{ base: 'xl', md: '3xl' }}>
          How It Works ?
        </Heading>
        <Text
          maxW='36rem'
          fontWeight={'300'}
          fontSize={{ base: 'xs', md: 'md' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Text>
        <Center flexDirection='column' p='1rem'>
          <HStack align='base-line' p='0.8rem 1rem' spacing='1rem'>
            <RiSmartphoneLine size={40} />
            <VStack align='start'>
              <Text fontWeight={'500'} fontSize={{ base: 'md', md: 'xl' }}>
                Schedule a Pickup
              </Text>
              <Text
                maxW='24rem'
                fontWeight={'300'}
                fontSize={{ base: 'xs', md: 'md' }}
              >
                Choose when and where you wish us to collect & deliver your
                laundry.
              </Text>
            </VStack>
          </HStack>
          <HStack align='base-line' p='0.8rem 1rem' spacing='1rem'>
            <RiShoppingBagLine size={40} />
            <VStack align='start'>
              <Text fontWeight={'500'} fontSize={{ base: 'sm', md: 'md' }}>
                Collection
              </Text>
              <Text
                maxW='24rem'
                fontWeight={'300'}
                fontSize={{ base: 'xs', md: 'md' }}
              >
                We collect your bag, list and clean your items according to your
                requirements.
              </Text>
            </VStack>
          </HStack>
          <HStack align='base-line' p='0.8rem 1rem' spacing='1rem'>
            <RiTruckLine size={40} />
            <VStack align='start'>
              <Text fontWeight={'500'} fontSize={{ base: 'sm', md: 'md' }}>
                Delivery
              </Text>
              <Text
                maxW='24rem'
                fontWeight={'300'}
                fontSize={{ base: 'xs', md: 'md' }}
              >
                We deliver your items cleaned within 24 hours and at the time
                required.
              </Text>
            </VStack>
          </HStack>
        </Center>
      </MotionCenter>
    </Stack>
  );
};

export default HowItWorks;
