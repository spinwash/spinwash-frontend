import React, { useEffect, useState } from 'react';
import {
  Heading,
  Text,
  Button,
  Center,
  Container,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { authenticate } from '../../Helpers/auth';
import ButtonHOC from '../HOC/ArrowButton';

import Lottie from 'react-lottie';
import * as animationData from '../LottieFiles/lf30_editor_g9cdecsk.json';

const Activate = () => {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({ token: '', show: true });
  const navigate = useNavigate();
  const toast = useToast();
  let { token } = useParams();

  const defaultOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const theToken = token;
    if (theToken) {
      setFormData({ ...formData, theToken });
    }
  }, [token]);

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    axios
      .post(`https://spinwash.herokuapp.com/api/activation`, {
        token,
      })
      .then((res) => {
        setFormData({
          ...formData,
          show: false,
        });
        toast({
          title: res.data.message,
          status: 'success',
          duration: 2000,
        });
        authenticate(res);
        navigate('/profile');
        setLoader(false);
      })
      .catch((err) => {
        toast({
          title: err.response.data.errors,
          status: 'error',
          duration: 5000,
        });
        setLoader(false);
      });
  };

  return (
    <Container
      mb={'6rem'}
      w={'80vw'}
      maxW={'xl'}
      minW={'fit-content'}
      px={['0rem', '2rem', '3rem', '5rem']}
      py={'2rem'}
      mx={'auto'}
      h='90vh'
      pt={{ base: '3rem', md: '5rem' }}
    >
      <VStack p={['1rem', '1rem', '2rem']}>
        <Center pr='2rem'>
          <Lottie options={defaultOptionsLottie} height={200} width={280} />
        </Center>
        <Center pb={{ base: '2rem', md: '3rem' }} flexDirection={'column'}>
          <Heading
            alignItems={'center'}
            fontSize={{ base: '2xl', md: '4xl' }}
            mx='auto'
            w='fit-content'
            textAlign='center'
          >
            Just one more step...
          </Heading>
          <Text
            textAlign='center'
            fontSize={{ base: 'sm', md: 'xl' }}
            py='0.5rem'
          >
            {' '}
            Click below to activate your Spinwash account{' '}
          </Text>
        </Center>
        <VStack>
          <form onSubmit={handleSubmit}>
            <Button
              variant={'unstyled'}
              as='button'
              display='flex'
              justifyContent={'center'}
              alignItems='center'
              width='fit-content'
              mx='auto'
              alignSelf={'center'}
              isLoading={loader}
            >
              <ButtonHOC variant='dark'>Activate Account</ButtonHOC>
            </Button>
          </form>
          <Text fontSize={'sm'} py={'1rem'}>
            {' '}
            or{' '}
            <Text as='span' textColor={'spinwash.300'} fontWeight={'500'}>
              <Link to='/register'>Register</Link>
            </Text>{' '}
            again
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};
export { Activate };
