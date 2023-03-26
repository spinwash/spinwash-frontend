import React, { useEffect } from 'react';
import {
  Heading,
  Stack,
  Text,
  VStack,
  Button,
  Input,
  FormControl,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  useToast,
  Wrap,
} from '@chakra-ui/react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ArrowButton from '../HOC/ArrowButton';
import Map from './Map';

const MotionStack = motion(Stack);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 40 },
};

const AlertPop = (props) => {
  return (
    <Alert status='error'>
      <AlertIcon color={'red.400'} />
      <AlertTitle mr={4} textColor={'red.400'} fontWeight={'500'}>
        {props.title}
      </AlertTitle>
    </Alert>
  );
};

const ContactUs = () => {
  const [loader, setLoader] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const onSubmit = (data) => {
    setLoader(true);
    axios
      .post(`https://newapi.spinwash.co.uk/api/contactUS`, data)
      .then((res) => {
        toast({
          title: res.data.message,
          status: 'success',
          duration: 3000,
        });
        reset();
        setLoader(false);
      })
      .catch((err) => {
        toast({
          title: 'Error occurred',
          status: 'error',
          duration: 3000,
        });
        setLoader(false);
      });
  };

  return (
    <MotionStack
      ref={ref}
      animate={controls}
      variants={variant}
      initial='hidden'
      direction={{ base: 'column-reverse', lg: 'row-reverse' }}
      mx='auto'
      px={{ base: '0', md: '2rem' }}
      py={{ base: '2rem', md: '0rem' }}
      maxW='8xl'
      w='full'
      align={{ base: 'center', md: 'center' }}
      justify='space-evenly'
      my={{ base: '2rem', md: '6rem' }}
      spacing={{ base: '2rem', md: '' }}
    >
      <Wrap
        maxW={{ base: 'full', md: '40rem' }}
        as='flex'
        px='1rem'
        fontWeight={'300'}
        fontSize={{ base: 'sm', md: 'lg' }}
        justify={{ base: 'start', sm: 'center', md: 'start' }}
        align={'start'}
      >
        <VStack p='1rem' align={'start'}>
          <Text py='0.5rem' fontWeight='500' fontSize='xl'>
            Customer Support
          </Text>
          <Text>Monday - Friday : 7:00 am - 8: 30pm</Text>
          <Text>Saturday : 8:00 am - 6:30pm</Text>
        </VStack>
        <VStack p='1rem' align={'start'}>
          <Text py='0.5rem' fontWeight='500' fontSize='xl'>
            Main Office
          </Text>
          <Text maxW='14rem'>
            523A Upper Elmers End Road, Beckenham, Kent, BR3 3DE
          </Text>
        </VStack>
        <VStack alignSelf={'start'} p='1rem' align={'start'}>
          <Text py='0.5rem' fontWeight='500' fontSize='xl'>
            Contact
          </Text>
          <Text>020 8125 3074</Text>
          <Text>info@spinwash.co.uk</Text>
          <a
            href='https://www.instagram.com/spinwash_'
            target='_blank'
            rel='noreferrer'
          >
            <Text>Instagram</Text>
          </a>
          <a
            href='https://www.facebook.com/spinwash01'
            target='_blank'
            rel='noreferrer'
          >
            <Text>Facebook</Text>
          </a>
        </VStack>
      </Wrap>
      <Map />
    </MotionStack>
  );
};

export default ContactUs;
