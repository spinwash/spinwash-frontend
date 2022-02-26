import {
  Box,
  Center,
  Button,
  useToast,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  AlertTitle,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Container,
  Tooltip,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Modal,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import ArrowButton from '../HOC/ArrowButton';
import Login from './Login';
import axios from 'axios';
import { authenticate } from '../../Helpers/auth';

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

const Register = () => {
  const [loader, setLoader] = useState(false);
  const [loaderGoogle, setLoaderGoogle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = () => {
    console.log('Submitted');
  };

  const googleSuccess = (tokenId) => {
    setLoaderGoogle(true);
    axios
      .post('/api/googlelogin', {
        idToken: tokenId.tokenId,
      })
      .then((res) => {
        toast({
          title: 'Google Signin Successful',
          status: 'success',
          duration: 3000,
        });
        //successfully logedin
         authenticate(res);
        // navigate('/');
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: 'Google Login Error',
          status: 'error',
          duration: 3000,
        });
      });
    setLoaderGoogle(false);
  };

  const googleFailure = () => {
    console.log('google failure');
  };
  return (
    <Container
      w='fit-content'
      h='90vh'
      display='flex'
      alignItems={'center'}
      justify='center'
    >
      <VStack
        my='auto'
        spacing={{ base: '1.2rem', md: '2rem' }}
        mx={{ base: '0.5rem', md: '2rem' }}
      >
        <Heading
          alignItems={'center'}
          fontSize={{ base: '2xl', md: '4xl' }}
          mx='auto'
          w='fit-content'
        >
          Signup
        </Heading>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy={'single_host_origin'}
          render={(renderProps) => (
            <Button
              px={16}
              border='none'
              borderRadius={'0'}
              w={{ base: '16rem', sm: '18rem', md: '25rem' }}
              h={{ base: '2.8rem', md: '3.5rem' }}
              maxW={'md'}
              variant={'outline'}
              leftIcon={<FcGoogle size='1.85em' />}
              bg={'white'}
              _hover={{
                bgColor: 'gray.100',
              }}
              onClick={renderProps.onClick}
              isLoading={loaderGoogle}
            >
              <Center
                fontWeight={'500'}
                fontSize={{ base: 'sm', md: 'xl' }}
                pl={'0.5rem'}
              >
                <Text textColor={'spinwash.500'}>Signup with Google</Text>
              </Center>
            </Button>
          )}
        />{' '}
        <Text fontSize={{ base: 'xs', md: 'sm' }}>or</Text>
        <VStack w='full'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl w='full' isRequired mb='1rem'>
              <Input
                outline='2px solid #1B4D7A'
                type={'text'}
                mb={'1rem'}
                borderRadius={'0'}
                bg={'white'}
                px='0.5rem'
                h={{ base: '3rem', md: '3.6rem' }}
                size={{ base: 'sm', md: 'lg' }}
                placeholder='Full Name'
                _placeholder={{ color: 'gray.400' }}
                {...register('name', {
                  required: 'Please enter Password',
                  minLength: { value: 4, message: 'Too Short' },
                })}
              />
              {errors.name && <AlertPop title={errors.name.message} />}
            </FormControl>
            <FormControl w='full' isRequired>
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
              {/*errors.email && <AlertPop title={errors.email} />*/}
            </FormControl>
            <FormControl
              py={'1rem'}
              w={{ base: 'full', md: '20rem' }}
              isRequired
            >
              <Tooltip
                hasArrow
                w={{ base: '16rem', md: '16rem' }}
                color='white'
                label='Minimum 8 Charackters, including Upper / lowercase and numbers'
                arrowSize={8}
                placement='top'
                closeOnClick={false}
                bg='blue.500'
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
                    placeholder='Password'
                    _placeholder={{ color: 'gray.400' }}
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Please enter Password',
                      minLength: { value: 8, message: 'Minimum 8 Characters' },
                      pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                        message: 'Use a strong password',
                      },
                    })}
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
            <Box
              as='button'
              display='flex'
              justifyContent={'center'}
              alignItems='center'
              width='fit-content'
              mx='auto'
              alignSelf={'center'}
            >
              <ArrowButton variant='dark'>Signup</ArrowButton>
            </Box>
          </form>
        </VStack>
        <Text fontSize={{ base: 'sm', md: 'md' }} py={'1rem'}>
          Already have an account{' '}
          <Box as='button' onClick={onOpenModal}>
            <Text
              as='span'
              textColor={'blue.500'}
              _hover={{ textDecoration: 'underline' }}
            >
              Login
            </Text>
          </Box>
          <Modal
            isOpen={isOpenModal}
            size='xl'
            onClose={onCloseModal}
            isCentered
          >
            <ModalOverlay />
            <Login closeModel={onCloseModal} />
          </Modal>
        </Text>
      </VStack>
    </Container>
  );
};

export default Register;
