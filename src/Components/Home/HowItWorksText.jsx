import { Center, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  RiShoppingBagLine,
  RiSmartphoneLine,
  RiTruckLine,
} from 'react-icons/ri';

const MotionCenter = motion(Center);

const variant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 1 } },
  hidden: { opacity: 0, x: 80 },
};

const HowItWorksText = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionCenter
      animate={controls}
      variants={variant}
      initial='hidden'
      flexDirection='column'
      w={{ base: '90%', md: '50%' }}
      m='2rem'
      alignItems='start'
    >
      <Heading fontWeight={'500'} fontSize={{ base: 'xl', md: '3xl' }}>
        How It Works ?
      </Heading>
      <Text maxW='36rem' fontWeight={'300'} fontSize={{ base: 'xs', md: 'md' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </Text>
      <Center flexDirection='column' p='1rem'>
        <HStack align='base-line' p='0.8rem 1rem' spacing='1rem'>
          <RiSmartphoneLine size={40} />
          <VStack ref={ref} align='start'>
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
  );
};

export default HowItWorksText;
