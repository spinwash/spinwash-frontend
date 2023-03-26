import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  Input,
  FormControl,
  Textarea,
  HStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import ArrowButton from '../HOC/ArrowButton';

const MotionContainer = motion(Container);

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

const Footer2 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [loader, setLoader] = useState(false);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const navigate = useNavigate();
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
    <MotionContainer
      animate={controls}
      variants={variant}
      initial='hidden'
      maxW='8xl'
      pt={{ base: '4rem', md: '12rem' }}
      px={'2rem'}
      display={'flex'}
      flexDirection='column'
      fap='2rem'
    >
      <Stack
        ref={ref}
        spacing={{ base: '2.5rem', md: 'auto' }}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Stack
          spacing={{ base: '2.5rem', md: '3rem', lg: '5rem' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <VStack fontSize={{ base: 'sm', md: 'md' }} alignItems={'start'}>
            <Heading
              mb={{ base: '0.5rem', md: '1rem' }}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight={'400'}
            >
              Contact Us
            </Heading>
            <Text maxW='15rem'>
              Head Office: 523A Upper Elmers End Road, Beckenham, Kent, BR3 3DE
            </Text>
            <Text>info@spinwash.com</Text>
            <Text>020 8125 3074</Text>
          </VStack>
          <VStack fontSize={{ base: 'sm', md: 'md' }} alignItems={'start'}>
            <Heading
              mb={{ base: '0.5rem', md: '1rem' }}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight={'400'}
            >
              Services
            </Heading>
            <Box
              as='button'
              onClick={() => {
                navigate('/service/dryCleaning');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Dry Clean</Text>
            </Box>
            <Box
              as='button'
              onClick={() => {
                navigate('/service/bedding');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Bedding</Text>
            </Box>
            <Box
              as='button'
              onClick={() => {
                navigate('service/household');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Household</Text>
            </Box>
            <Box
              as='button'
              onClick={() => {
                navigate('service/shirts');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Shirts</Text>
            </Box>
            <Box
              as='button'
              onClick={() => {
                navigate('service/laundry');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Laundry</Text>
            </Box>
            <Box
              as='button'
              onClick={() => {
                navigate('service/ironing');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Ironing</Text>
            </Box>
            <Box
              as='button'
              onClick={() => {
                navigate('service/curtains');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Curtains</Text>
            </Box>
            <Box
              onClick={() => {
                navigate('service/alterations');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Alteration</Text>
            </Box>
          </VStack>{' '}
          <VStack fontSize={{ base: 'sm', md: 'md' }} alignItems={'start'}>
            <Heading
              mb={{ base: '0.5rem', md: '1rem' }}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight={'400'}
            >
              Navigate
            </Heading>
            <Box
              as='button'
              onClick={() => {
                navigate('about');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>About</Text>
            </Box>
            <Box
              as='button'
              onClick={() => {
                navigate('areas');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Areas we Serve</Text>
            </Box>
            <Box
              as='button'
              onClick={() => {
                navigate('pricing');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Pricing</Text>
            </Box>
            <Box
              as='button'
              onClick={() => {
                navigate('t&c');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Text>Terms and Conditions</Text>
            </Box>
          </VStack>
        </Stack>
        <VStack
          maxW={'fit-content'}
          alignItems='start'
          spacing='1rem'
          mx='auto'
        >
          <Heading fontWeight={'500'} fontSize={{ base: 'sm', md: 'xl' }}>
            Feel free to talk to us if you have any questions.
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack
              py='1rem'
              spacing='2rem'
              minW={{ base: '16rem', md: '28rem' }}
              alignItems={'start'}
            >
              <FormControl w='full' isRequired>
                <Input
                  border='0'
                  me={'2rem'}
                  _hover={{
                    borderBottom: '2px solid #1B4D7A',
                  }}
                  //outline='1px solid #1B4D7A'
                  borderBottom={'2px solid #1B4D7A'}
                  mb={'1rem'}
                  borderRadius={'0'}
                  bg={'white'}
                  px='0.5rem'
                  h={{ base: '2rem', md: '2.4rem' }}
                  size={{ base: 'sm', md: 'lg' }}
                  placeholder='Email'
                  _placeholder={{ color: 'gray.400' }}
                  {...register('email', {
                    required: 'Please enter your name',
                  })}
                />
                {errors.name && <AlertPop title={errors.name.message} />}
              </FormControl>
              <Button
                variant={'unstyled'}
                isLoading={loader}
                display='flex'
                justifyContent={'center'}
                alignItems='center'
                width='fit-content'
                alignSelf={'start'}
              >
                <ArrowButton variant='dark'></ArrowButton>
              </Button>
            </HStack>
          </form>
        </VStack>
      </Stack>{' '}
      <Stack
        mt={{ base: '6rem', md: '7rem' }}
        mb='0.5rem'
        w='full'
        fontSize={{ base: 'sm', md: 'md' }}
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems={{ base: 'start', md: 'center' }}
      >
        <Text>© 2022 Spinwash</Text>
        <Text>
          <a href='https://twitter.com/demonicirfan' target='_blank'>
            Designed and Developed by Irfan Asif
          </a>
        </Text>
      </Stack>
    </MotionContainer>
  );
};

export default Footer2;
