import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowButton from '../HOC/ArrowButton';
import MainLogo from './MainLogo.svg';

const MotionContainer = motion(Container);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 40 },
};

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
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
          spacing={{ base: '1rem', md: '1.5rem' }}
          fontSize={{ base: 'sm', md: 'md' }}
          alignItems={'start'}
        >
          <Image src={MainLogo} w={{ base: '7rem', md: '10rem' }} pb='1rem' />
          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={'400'}>
            Book Our Service Now
          </Heading>
          <Link to='/'>
            <Box w='fit-content' as='button' onClick={onClickHandler}>
              <ArrowButton variant='dark'>Order Now</ArrowButton>
            </Box>
          </Link>
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
        {/* <Text>© 2022 Spinwash</Text>
        <Text>
          <a href='https://twitter.com/demonicirfan' target='_blank'>
            Designed and Developed by Irfan Asif
          </a>
        </Text> */}
      </Stack>
    </MotionContainer>
  );
};

export default Footer;
