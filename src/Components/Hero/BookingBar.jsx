import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  Input,
  FormControl,
  HStack,
  Text,
  Center,
  Stack,
  Box,
  Select,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Heading,
  VStack,
  Textarea,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../Styles/date-picker.css';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Login from '../Authentication/Login';
import ArrowButton from '../HOC/ArrowButton';
import Lottie from 'react-lottie';
import * as animationData from '../LottieFiles/lf30_editor_wcn2guyh.json';
import { isAuth } from '../../Helpers/auth';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BookingBar(props) {
  const [timing, setTiming] = useState(['Select Date First']);
  const [dropOffTiming, setDropOffTiming] = useState(['Select Date First']);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [hover, setHover] = useState(false);

  const { handleSubmit, register, watch, control } = useForm({
    defaultOptions: { address: props.addressData },
  });

  console.log(props.addressData);

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const defaultOptionsLottie = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const isWeekday = (date) => {
    const day = date.getDay(date);
    return day !== 0;
  };

  const collection = watch('pickup');
  const dropOff = watch('dropOff');
  const collectionDate = JSON.stringify(collection?.getDay());
  const dropOffDate = JSON.stringify(dropOff?.getDay());

  useEffect(() => {
    if (collectionDate === '6') {
      setTiming([
        '07 AM',
        '08 AM',
        '09 AM',
        '10 AM',
        '11 AM',
        '12 PM',
        '01 PM',
        '02 PM',
        '03 PM',
        '04 PM',
        '05 PM',
        '06 PM',
      ]);
    } else {
      setTiming([
        '07 AM',
        '08 AM',
        '09 AM',
        '10 AM',
        '11 AM',
        '12 PM',
        '01 PM',
        '02 PM',
        '03 PM',
        '04 PM',
        '05 PM',
        '06 PM',
        '07 PM',
      ]);
    }
  }, [collectionDate]);

  useEffect(() => {
    if (dropOffDate === '6') {
      setDropOffTiming([
        '07 AM',
        '08 AM',
        '09 AM',
        '10 AM',
        '11 AM',
        '12 PM',
        '01 PM',
        '02 PM',
        '03 PM',
        '04 PM',
        '05 PM',
        '06 PM',
      ]);
    } else {
      setDropOffTiming([
        '07 AM',
        '08 AM',
        '09 AM',
        '10 AM',
        '11 AM',
        '12 PM',
        '01 PM',
        '02 PM',
        '03 PM',
        '04 PM',
        '05 PM',
        '06 PM',
        '07 PM',
      ]);
    }
  }, [dropOffDate]);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`https://spinwash.herokuapp.com/api/user/createOrder/${isAuth()._id}`, data)
      .then((res) => {
        console.log(res);
        setOrderPlaced(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Center h={{ base: '3.6rem', sm: '5rem', xl: '6rem' }} bg='white'>
      <Center
        alignItems={{ base: 'flex-end', lg: 'center' }}
        color='spinwash.500'
        w={{ base: '75vw', sm: '80vw', md: '64vw', lg: '38vw' }}
      >
        <form id='hook-form' onSubmit={handleSubmit(onSubmit)}>
          <HStack
            p={{ base: '0.4rem', sm: '1rem'}}
            spacing={{ base: 'auto', sm: '4' }}
            justify='space-between'
            w={{ base: '74vw', sm: '80vw', md: '64vw', lg: '38vw' }}
          >
            <FormControl display={{ base: 'none', sm: 'block' }}>
              <Input
                h={{ base: '3rem', sm: '4rem' }}
                minW='4rem'
                _placeholder={{
                  color: 'spinwash.500',
                }}
                p={{ base: '0.5rem', sm: '1rem' }}
                bg='spinwash.100'
                border='0'
                rounded='0'
                placeholder='Address'
                size={{ base: 'md', sm: 'lg' }}
                {...register('address')}
              />
            </FormControl>
            <Stack
              w={'full'}
              spacing='0'
              direction={{ base: 'column', xl: 'row' }}
            >
              <HStack minW={'8rem'}>
                <Center h={{ base: '1.6rem', sm: '2.2rem' }}>
                  <Controller
                    control={control}
                    name='pickup'
                    render={({ field }) => (
                      <DatePicker
                        filterDate={isWeekday}
                        dateFormat='dd-eee'
                        placeholderText='Pickup'
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    )}
                  />
                  <Select
                    iconSize={{ base: '16px', sm: '20px' }}
                    fontSize={{ base: 'xs', sm: 'md' }}
                    w={'6rem'}
                    border='0'
                    placeholder='Time'
                    _active={{ border: '0px' }}
                    _focus={{ border: '0px' }}
                    name='pickupTime'
                    {...register('pickupTime')}
                  >
                    {timing.map((time) => (
                      <option
                        border='1px solid green'
                        //border='0px solid white'
                        color='black'
                        backgroundColor='white'
                        value={time}
                      >
                        {time}
                      </option>
                    ))}
                  </Select>
                </Center>
              </HStack>
              <HStack>
                <Center h={{ base: '1.6rem', sm: '2.2rem' }}>
                  <Controller
                    control={control}
                    name='dropOff'
                    render={({ field }) => (
                      <DatePicker
                        filterDate={isWeekday}
                        placeholderText='DropOff'
                        dateFormat='dd-eee'
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    )}
                  />
                  <Select
                    iconSize={{ base: '16px', sm: '20px' }}
                    fontSize={{ base: 'xs', sm: 'md' }}
                    w={'6rem'}
                    border='0'
                    placeholder='Time'
                    _active={{ border: '0px' }}
                    _focus={{ border: '0px' }}
                    name='dropOffTime'
                    {...register('dropOffTime')}
                  >
                    {dropOffTiming.map((time) => (
                      <option value={time}>{time}</option>
                    ))}
                  </Select>
                </Center>
              </HStack>
            </Stack>
            <Box
              onClick={onOpenModal}
              display='flex'
              h={{ base: '3rem', sm: '4rem' }}
              alignItems={'center'}
              bg={'spinwash.500'}
              p={{ base: '0.8rem 1.5rem', sm: '0.5rem 1.5rem' }}
              mr={{ base: '0.2rem', sm: '1rem' }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Box transform={hover && 'rotate(45deg)'} transition='all 0.5s'>
                <HiOutlineArrowRight color='white' size='20' />
              </Box>
            </Box>
          </HStack>
          <Modal
            isOpen={isOpenModal}
            size='2xl'
            onClose={onCloseModal}
            allowPinchZoom
          >
            <ModalOverlay />
            <ModalContent
              maxW={{ base: '90vw', md: '60vw', lg: '50vw', xl: '30vw' }}
              bg='white'
              rounded='none'
              shadow='md'
            >
              <ModalCloseButton />
              {isAuth() ? (
                <>
                  <ModalBody
                    maxW={{ base: '90vw', md: '60vw', lg: '50vw', xl: '30vw' }}
                    mx={'auto'}
                    mt={{ base: '2rem', md: '3rem' }}
                    mb={'0'}
                  >
                    {orderPlaced ? (
                      <Center
                        gap={{ base: '2rem', md: '3rem' }}
                        flexDirection='column'
                        h='34vh'
                      >
                        <Lottie
                          options={defaultOptionsLottie}
                          height={150}
                          width={150}
                        />
                        <VStack>
                          <Heading
                            my='0.8rem'
                            fontSize={{ base: 'xl', md: '3xl' }}
                          >
                            Your order is complete!
                          </Heading>
                          <Text maxW='24rem' textAlign={'center'}>
                            You will receive a order Confirmation mail with
                            order details soon.
                          </Text>
                        </VStack>
                      </Center>
                    ) : (
                      <VStack gap={{ base: '0.5rem', md: '1rem' }}>
                        <Heading fontSize={{ base: 'xl', md: '4xl' }}>
                          Order Confirmation
                        </Heading>
                        <VStack
                          py={{ base: '0rem', md: '0.5rem' }}
                          gap={{ base: '0.5rem', md: '1rem' }}
                        >
                          <Text fontSize={{ base: 'md', md: 'xl' }}>
                            Requirements
                          </Text>
                          <Text
                            fontSize={{ base: 'xs', md: 'sm' }}
                            textAlign={'center'}
                            px={{ base: '0rem', md: '2rem' }}
                          >
                            Please confirm if your items are for dry clean/wash
                            and press, press only (ironing) or service wash (
                            wash dry and fold). Also if you require any
                            alterations or have any specific requirements please
                            let us know the details
                          </Text>
                        </VStack>
                        <FormControl display={{ base: 'block', sm: 'none' }}>
                          <Input
                            h={{ base: '3rem', sm: '4rem' }}
                            minW='4rem'
                            fontSize={'sm'}
                            _placeholder={{
                              color: 'spinwash.500',
                            }}
                            p={{ base: '1rem', sm: '1rem' }}
                            bg='spinwash.100'
                            border='0'
                            rounded='0'
                            placeholder='Address'
                            size={{ base: 'md', sm: 'lg' }}
                            {...register('address')}
                          />
                        </FormControl>
                        <Textarea
                          placeholder='Details'
                          fontSize={{ base: 'sm', md: 'sm' }}
                          borderColor={'spinwash.500'}
                          _hover={{ borderColor: 'spinwash.500' }}
                          rounded={0}
                          {...register('requirements')}
                        />
                      </VStack>
                    )}
                  </ModalBody>
                  <ModalFooter
                    display='flex'
                    alignItems={'center'}
                    justify='center'
                  >
                    {orderPlaced ? (
                      <Box h='10vh' w='full' as='button'>
                        <Center>
                          <Link to='/orders'>
                            <ArrowButton variant='dark'>
                              View orders
                            </ArrowButton>
                          </Link>
                        </Center>
                      </Box>
                    ) : (
                      <Box w='full' as='button' type='submit' form='hook-form'>
                        <Center>
                          <ArrowButton variant='dark'>
                            Confirm Order
                          </ArrowButton>
                        </Center>
                      </Box>
                    )}
                  </ModalFooter>
                </>
              ) : (
                <Login closeModel={onCloseModal} />
              )}
            </ModalContent>
          </Modal>
        </form>
      </Center>
    </Center>
  );
}
