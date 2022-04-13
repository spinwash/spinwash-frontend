import {
  Heading,
  VStack,
  Wrap,
  Select,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Box,
  Textarea,
  Container,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ChangeProfilePicture from './ChangeProfilePicture';
import ArrowButton from '../HOC/ArrowButton';
import axios from 'axios';
import { isAuth, setLocalStorage } from '../../Helpers/auth';

const EditProfile = ({ data, setEditMode, setData }) => {
  const [newImage, setNewImage] = useState(isAuth()?.profilePicture);
  const toast = useToast();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      preferences: data.preferences,
      shirtFoldingPreference: data.shirtFoldingPreference,
      shirtWashingPreference: data.shirtWashingPreference,
      beddingPreference: data.beddingPreference,
    },
  });

  const changeProfilePictureHandler = (image) => {
    setNewImage(image);
  };

  const onSubmit = (data) => {
    data._id = isAuth()?._id;
    data.profilePicture = newImage;

    axios
      .put(`https://spinwash.herokuapp.com/api/user/update`, data)
      .then((res) => {
        setData(res.data);
        setLocalStorage('user', res.data);
        toast({
          title: 'Changes Saved Successfully',
          description: 'It will take time to reflect the changes',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));

    setEditMode(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        maxW='8xl'
        display='flex'
        flexDirection={'column'}
        gap={{ base: '3rem', md: '4rem' }}
      >
        <VStack alignItems={'start'} gap='2rem'>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'500'}>
            Account
          </Heading>
          <VStack px='1rem'>
            <Wrap spacing={{ base: '2rem', md: '3rem' }} mx='auto'>
              <Stack w='70vw'>
                <ChangeProfilePicture
                  sendDataToParent={changeProfilePictureHandler}
                />
              </Stack>
              <FormControl w={{ base: '80vw', md: '40vw', xl: '34rem' }}>
                <FormLabel
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Name
                </FormLabel>
                <Input
                  borderColor={'spinwash.500'}
                  _hover={{ borderColor: 'spinwash.500' }}
                  mb={'1rem'}
                  type='text'
                  name='name'
                  placeholder='Full Name'
                  bg={'white'}
                  size={'lg'}
                  borderRadius={'0'}
                  {...register('name')}
                />
              </FormControl>
              <FormControl w={{ base: '80vw', md: '40vw', xl: '34rem' }}>
                <FormLabel
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Email
                </FormLabel>
                <Input
                  borderColor={'spinwash.500'}
                  _hover={{ borderColor: 'spinwash.500' }}
                  isDisabled
                  mb={'1rem'}
                  type='email'
                  name='email'
                  placeholder='Email'
                  bg={'white'}
                  size={'lg'}
                  borderRadius={'0'}
                  {...register('email')}
                />
              </FormControl>
              <FormControl w={{ base: '80vw', md: '40vw', xl: '34rem' }}>
                <FormLabel
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Phone Number
                </FormLabel>
                <Input
                  borderColor={'spinwash.500'}
                  _hover={{ borderColor: 'spinwash.500' }}
                  mb={'1rem'}
                  type='number'
                  name='phoneNumber'
                  placeholder='Phone Number'
                  bg={'white'}
                  size={'lg'}
                  borderRadius={'0'}
                  {...register('phoneNumber')}
                />
              </FormControl>
              <FormControl w={{ base: '80vw', md: '40vw', xl: '34rem' }}>
                <FormLabel
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Address
                </FormLabel>
                <Input
                  borderColor={'spinwash.500'}
                  _hover={{ borderColor: 'spinwash.500' }}
                  mb={'1rem'}
                  type='text'
                  name='address'
                  placeholder='Address'
                  bg={'white'}
                  size={'lg'}
                  borderRadius={'0'}
                  {...register('address')}
                />
              </FormControl>
            </Wrap>
          </VStack>
        </VStack>
        <VStack alignItems={'start'} gap='2rem'>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'500'}>
            Preferences
          </Heading>
          <VStack px='1rem'>
            <Wrap spacing={{ base: '2rem', md: '3rem' }}>
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading
                  my='0.5rem'
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Shirt Cleaning Preferences
                </Heading>
                <VStack pl='1rem'>
                  <Select
                    placeholder={data?.shirtWashingPreference}
                    {...register('shirtWashingPreference')}
                  >
                    <option value='Wash And Press'>Wash and Press</option>
                    <option value='Press Only'>Press Only</option>
                    <option value='Dry Clean And Press'>
                      Dry Clean and Press
                    </option>
                  </Select>{' '}
                </VStack>
              </VStack>{' '}
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading
                  my='0.5rem'
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Shirt Delivery Preferences
                </Heading>
                <VStack pl='1rem'>
                  <Select
                    placeholder={data?.shirtFoldingPreference}
                    {...register('shirtFoldingPreference')}
                  >
                    <option value='Hung'>Hung</option>
                    <option value='Folded'>Fold</option>
                  </Select>{' '}
                </VStack>
              </VStack>
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading
                  my='0.5rem'
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Bedding Preferences
                </Heading>
                <VStack pl='1rem'>
                  <Select
                    placeholder={data?.beddingPreference}
                    {...register('beddingPreference')}
                  >
                    <option value='Wash And Press'>Wash And Press</option>
                    <option value='Press Only'>Press Only</option>
                    <option value='Wash And Fold'>Wash And Fold</option>
                  </Select>{' '}
                </VStack>
              </VStack>
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading
                  my='0.5rem'
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Any Personal Cleaning, Pressing & Packaging, Preferences
                </Heading>
                <FormControl pl='1rem'>
                  <Textarea
                    borderColor={'spinwash.500'}
                    _hover={{
                      borderColor: 'spinwash.500',
                    }}
                    type='text'
                    placeholder='Preferences'
                    {...register('preferences')}
                  />
                </FormControl>
              </VStack>
            </Wrap>
          </VStack>
        </VStack>
        <Box p='2' as='button' action='submit'>
          <ArrowButton variant='dark'>Save Changes</ArrowButton>
        </Box>
      </Container>
    </form>
  );
};

export { EditProfile };
