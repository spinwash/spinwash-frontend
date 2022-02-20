import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import {
  FormLabel,
  FormControl,
  Input,
  Heading,
  Text,
  Button,
  Center,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import ArrowButton from '../HOC/ArrowButton';

const AlertPop = (props) => {
  return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle mr={4} textColor={'red'} fontWeight={'500'}>
        {props.title}
      </AlertTitle>
    </Alert>
  );
};
const ForgotPassword = (props) => {
  const [loader, setloader] = useState(false);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <VStack p={['1rem', '1rem', '2rem']} pb={'4rem'}>
      <Center my={'1rem'} flexDirection={'column'}>
        <Heading fontWeight={'400'} mb={'0.5rem'} letterSpacing={'wider'}>
          Reset Password
        </Heading>
        <Center py={[2, 2, 4]} w={'full'}></Center>
        <Text
          fontSize={{ base: 'xs', md: 'sm' }}
          maxW={'25rem'}
          textAlign={'center'}
        >
          {' '}
          Enter the email address you've used to sign up with us and we'll send
          you a reset link!
        </Text>
      </Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl py={'1rem'} w={{ base: 'full', md: '20rem' }} isRequired>
          <Input
            outline='2px solid #1B4D7A'
            mb={'1rem'}
            borderRadius={'0'}
            bg={'white'}
            px='0.5rem'
            h={{ base: '3rem', md: '3.6rem' }}
            size={{ base: 'sm', md: 'lg' }}
            placeholder='Email'
            _placeholder={{ color: 'gray.400' }}
            {...register('email', {
              required: 'Please enter registered email',
              pattern: {
                value:
                  /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && <AlertPop title={errors.email.message} />}
        </FormControl>
        <Box
          as='button'
          display='flex'
          justifyContent={'center'}
          alignItems='center'
          width='fit-content'
          mx='auto'
          alignSelf={'center'}
        >
          <ArrowButton variant='dark'>Get Reset Link</ArrowButton>
        </Box>
      </form>

      <Box
        as='button'
        onClick={() => props.showScreenFunction(false)}
        fontSize={'sm'}
        py={'1rem'}
      >
        {' '}
        Back to Login{' '}
      </Box>
    </VStack>
  );
};

export { ForgotPassword };
