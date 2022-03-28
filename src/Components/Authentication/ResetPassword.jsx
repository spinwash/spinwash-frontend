import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import {
  FormLabel,
  FormControl,
  Input,
  Heading,
  Text,
  Button,
  Center,
  Box,
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  VStack,
  useToast,
  InputRightElement,
  InputGroup,
  Tooltip,
} from '@chakra-ui/react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { isAuth } from '../../Helpers/auth';
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

const ResetPassword = () => {
  let params = useParams();
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoader(true);
    axios
      .put(`https://spinwash.herokuapp.com/api/password/reset`, {
        resetPasswordLink: params.token,
        newPassword: data.password,
      })
      .then((res) => {
        console.log(res);
        toast({
          title: res.data.message,
          status: 'success',
          duration: 6000,
        });
        setLoader(false);
        navigate('/');
      })
      .catch((err) => {
        console.log('error is ' + err);
        toast({
          title: err.response.data.error,
          status: 'error',
          duration: 6000,
        });
        setLoader(false);
      });
  };

  return (
    <Container
      w='fit-content'
      h='90vh'
      display='flex'
      alignItems={'center'}
      justify='center'
    >
      {isAuth() ? <Navigate replace to='/' /> : null}
      <VStack
        my='auto'
        spacing={{ base: '1.2rem', md: '2rem' }}
        mx={{ base: '0.5rem', md: '2rem' }}
      >
        <Center my={'1rem'} flexDirection={'column'}>
          <Heading
            alignItems={'center'}
            fontSize={{ base: '2xl', md: '4xl' }}
            mx='auto'
            w='fit-content'
          >
            Reset Password
          </Heading>
          <Center py={[2, 2, 4]} w={'full'}></Center>
          <Text
            fontSize={{ base: 'xs', md: 'sm' }}
            maxW={'25rem'}
            textAlign={'center'}
          >
            Your New Password Must be Different from Previous used Password.
            This makes your account more secure.
          </Text>
        </Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl py={'1rem'} w={{ base: 'full', md: '20rem' }} isRequired>
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>Password</FormLabel>
            <Tooltip
              label='Minimum 8 Charackters, including UPPER/lowercase and numbers'
              hasArrow
              arrowSize={8}
              placement='top'
              closeOnClick={false}
              bg='spinwash.400'
            >
              <InputGroup>
                <Input
                  outline='2px solid #1B4D7A'
                  mb={'1rem'}
                  borderRadius={'0'}
                  bg={'white'}
                  px='0.5rem'
                  h={{ base: '3rem', md: '3.6rem' }}
                  size={{ base: 'sm', md: 'lg' }}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  {...register('password')}
                />
                <InputRightElement>
                  <Center
                    flex={'1'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    h={{ base: '6', md: 'full' }}
                    mt={{ base: '2', md: '4' }}
                    mr='2'
                    size={{ sm: 'md', md: 'lg' }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <VscEyeClosed size='24' color={'spinwash.500'} />
                    ) : (
                      <VscEye size='24' color={'spinwash.500'} />
                    )}
                  </Center>
                </InputRightElement>
              </InputGroup>
            </Tooltip>
            {errors.password && <AlertPop title={errors.password.message} />}
          </FormControl>
          <FormControl py={'1rem'} w={{ base: 'full', md: '20rem' }} isRequired>
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>
              Confirm Password
            </FormLabel>
            <InputGroup>
              <Input
                outline='2px solid #1B4D7A'
                mb={'1rem'}
                borderRadius={'0'}
                bg={'white'}
                px='0.5rem'
                h={{ base: '3rem', md: '3.6rem' }}
                size={{ base: 'sm', md: 'lg' }}
                type={showPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                {...register('confirmPassword')}
              />
              <InputRightElement>
                <Center
                  flex={'1'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  h={{ base: '6', md: 'full' }}
                  mt={{ base: '2', md: '4' }}
                  mr='2'
                  size={{ sm: 'md', md: 'lg' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <VscEyeClosed size='24' color={'spinwash.500'} />
                  ) : (
                    <VscEye size='24' color={'spinwash.500'} />
                  )}
                </Center>
              </InputRightElement>
            </InputGroup>
            {errors.passwordConfirm && (
              <AlertPop title={errors.passwordConfirm.message} />
            )}
          </FormControl>
          <Button
            isLoading={loader}
            variant={'unstyled'}
            as='button'
            display='flex'
            justifyContent={'center'}
            alignItems='center'
            width='fit-content'
            mx='auto'
            alignSelf={'center'}
          >
            <ArrowButton variant='dark'>Get Reset Link</ArrowButton>
          </Button>
        </form>
        <Box
          as='button'
          onClick={() => navigate('/')}
          fontSize={'sm'}
          py={'1rem'}
        >
          {' '}
          Back to Login{' '}
        </Box>
      </VStack>
    </Container>
  );
};
export { ResetPassword };
