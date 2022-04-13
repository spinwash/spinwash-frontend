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
  Button,
} from '@chakra-ui/react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../../Styles/date-picker.css';

import Login from '../Authentication/Login';
import ArrowButton from '../HOC/ArrowButton';

import { HiOutlineArrowRight } from 'react-icons/hi';
import { Controller, useForm } from 'react-hook-form';
import Lottie from 'react-lottie';
import * as animationData from '../LottieFiles/lf30_editor_wcn2guyh.json';
import { isAuth } from '../../Helpers/auth';
import axios from 'axios';
import { Link } from 'react-router-dom';

const now = new Date();

export default function BookingBar(props) {
  const [timing, setTiming] = useState(['Select Date First']);
  const [dropOffTiming, setDropOffTiming] = useState(['Select Date First']);
  const [charges, setCharges] = useState(false);
  const [notPossible, setNotPossible] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [hover, setHover] = useState(false);
  const [submitSpinner, setSubmitSpinner] = useState(false);

  function convertTo24Hour(time) {
    var hours = parseInt(time?.substr(0, 2));
    if (time?.indexOf('am') != -1 && hours == 12) {
      time = time?.replace('12', '0');
    }
    if (time?.indexOf('pm') != -1 && hours < 12) {
      time = time?.replace(hours, hours + 12);
    }
    return time?.replace(/(am|pm)/, '');
  }

  const [minDate, setMinDate] = useState(now);

  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultOptions: {
      address: props.addressData && props.addressData,
    },
  });

  useEffect(() => {
    setValue('address', props.addressData && props.addressData);
  }, [props.addressData, setValue]);

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
  const collectionDateData = watch('collectionDate');
  const dropOffDateData = watch('dropOffDate');
  const timePickup = convertTo24Hour(watch('pickupTime'));
  const timedropOff = convertTo24Hour(watch('dropOffTime'));

  const collectionDate = JSON.stringify(collection?.getDay());
  const dropOffDate = JSON.stringify(dropOff?.getDay());

  function addedTime(t) {
    const timeData = t.toString().split(' ');
    let value = '';
    if (parseInt(timeData[0]) === 11) {
      value = 12;
      return value + ' pm';
    } else if (parseInt(timeData[0]) === 12) {
      value = 1;
      return value + ' ' + timeData[1];
    } else {
      value = parseInt(timeData[0]) + 1;
      return value + ' ' + timeData[1];
    }
  }

  useEffect(() => {
    console.log('time diff  👉🏻 ', timedropOff - timePickup);
    // if the date is same only then this code snippet will run
    if (Date.parse(collection) === Date.parse(dropOff)) {
      // console.log(
      //   'same date choosen',
      //   Date.parse(collection) === Date.parse(dropOff)
      // );
      if (timedropOff - timePickup >= 0) {
        // console.log('positive time choosen'); // as the time is negative we will check if its less than 12 or greater than 12
        if (timedropOff - timePickup === 12) {
          // console.log('equal to 12 choosen');
          setCharges(true);
          setNotPossible(false);
        } else if (timedropOff - timePickup < 12) {
          //  console.log('less than 12 choosen');
          setNotPossible(true);
          setCharges(false);
        } else {
          // console.log('greater than 12 choosen');
          setCharges(false);
          setNotPossible(false);
        }
      } else {
        // console.log('Negative time choosen');
        setNotPossible(true);
      }
    } else {
      if (timedropOff - timePickup < 0) {
        console.log('less than 0 choosen');
        setCharges(false);
        setNotPossible(true);
      } else {
        setCharges(false);
        setNotPossible(false);
      }
    }
  }, [
    collection,
    dropOff,
    timedropOff,
    timePickup,
    collectionDateData,
    dropOffDateData,
  ]);

  useEffect(() => {
    if (collectionDate === '6') {
      setTiming([
        '08 am',
        '09 am',
        '10 am',
        '11 am',
        '12 pm',
        '01 pm',
        '02 pm',
        '03 pm',
        '04 pm',
        '05 pm',
        '06 pm',
      ]);
    } else {
      setTiming([
        '07 am',
        '08 am',
        '09 am',
        '10 am',
        '11 am',
        '12 pm',
        '01 pm',
        '02 pm',
        '03 pm',
        '04 pm',
        '05 pm',
        '06 pm',
        '07 pm',
      ]);
    }
  }, [collectionDate]);

  useEffect(() => {
    if (dropOffDate === '6') {
      setDropOffTiming([
        '07 am',
        '08 am',
        '09 am',
        '10 am',
        '11 am',
        '12 pm',
        '01 pm',
        '02 pm',
        '03 pm',
        '04 pm',
        '05 pm',
        '06 pm',
      ]);
    } else {
      setDropOffTiming([
        '07 am',
        '08 am',
        '09 am',
        '10 am',
        '11 am',
        '12 pm',
        '01 pm',
        '02 pm',
        '03 pm',
        '04 pm',
        '05 pm',
        '06 pm',
        '07 pm',
      ]);
    }
  }, [dropOffDate]);

  useEffect(() => {
    setMinDate(dropOff);
  }, [dropOff]);

  const onSubmit = (data) => {
    setSubmitSpinner(true);
    const dataToSend = {
      ...data,
      pickup: data.pickup.toISOString().split('T')[0],
      dropOff: data.dropOff.toISOString().split('T')[0],
    };
    axios
      .post(
        `https://spinwash.herokuapp.com/api/user/createOrder/${isAuth()._id}`,
        dataToSend
      )
      .then((res) => {
        setOrderPlaced(true);
        setSubmitSpinner(false);
      })
      .catch((err) => {
        setSubmitSpinner(false);
      });
  };

  return (
    <Center h={{ base: '3.6rem', sm: '5rem', xl: '6rem' }} bg='white'>
      <Center
        alignItems={{ base: 'flex-end', lg: 'center' }}
        color='spinwash.500'
        w={{ base: '75vw', sm: '80vw', md: '64vw', lg: '50rem' }}
      >
        <form id='hook-form' onSubmit={handleSubmit(onSubmit)}>
          <HStack
            p={{ base: '0.4rem', sm: '1rem' }}
            spacing={{ base: 'auto', sm: '4' }}
            justify='space-between'
            w={{ base: '74vw', sm: '80vw', md: '64vw', lg: '50rem' }}
          >
            <FormControl display={{ base: 'none', sm: 'block' }} isRequired>
              <Input
                h={{ base: '3rem', sm: '4rem' }}
                minW='4rem'
                _placeholder={{
                  color: 'spinwash.500',
                }}
                p={{ base: '0.5rem', sm: '1rem' }}
                bg='spinwash.100'
                rounded='0'
                //border={errors.address ? '2px solid red' : '0'}
                placeholder='Address'
                size={{ base: 'md', sm: 'lg' }}
                defaultValue={props.addressData ? '' : props.addressData}
                {...register('address', {
                  required: true,
                })}
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
                    rules={{ required: true }}
                    name='pickup'
                    render={({ field }) => (
                      <DatePicker
                        filterDate={isWeekday}
                        dateFormat='dd-eee'
                        placeholderText='Pick up'
                        onChange={(date) => field.onChange(date)}
                        minDate={now}
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
                    {...register('pickupTime', { required: true })}
                  >
                    {timing.map((time) => (
                      <option style={{ backgroundColor: 'white' }} value={time}>
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
                    rules={{ required: true }}
                    name='dropOff'
                    render={({ field }) => (
                      <DatePicker
                        filterDate={isWeekday}
                        placeholderText='Drop off'
                        dateFormat='dd-eee'
                        minDate={collection}
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
                    {...register('dropOffTime', { required: true })}
                  >
                    {dropOffTiming.map((time) => (
                      <option style={{ backgroundColor: 'white' }} value={time}>
                        {time}
                      </option>
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
                            You will receive an order confirmation mail with
                            order details soon. Thanks for choosing Spinwash.
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
                            <b>
                              Your Items will be picked up between{' '}
                              {watch('pickupTime')
                                ? `${watch('pickupTime')} to ${addedTime(
                                    watch('pickupTime')
                                  )}.`
                                : '1 hr of selected time. '}{' '}
                              and dropped off between{' '}
                              {watch('dropOffTime')
                                ? `${watch('dropOffTime')} to ${addedTime(
                                    watch('dropOffTime')
                                  )}.`
                                : '1 hr of selected time. '}
                              {/*   on the{' '}
                              {watch('pickup')?.toISOString().split('T')[0]},*/}
                            </b>
                            <br /> Please confirm if your items are for dry
                            clean/wash and press, press only (ironing) or
                            service wash ( wash dry and fold). <br /> Also if
                            you require any alterations or have any specific
                            requirements please let us know the details.
                          </Text>
                        </VStack>
                        {charges || notPossible ? (
                          <VStack>
                            <Text
                              border={'2px dotted #d6d6d6'}
                              borderColor={notPossible ? 'red.500' : '#d6d6d6'}
                              rounded='md'
                              bg={notPossible ? 'red.100' : 'spinwash.100'}
                              color={notPossible ? 'red.500' : 'spinwash.500'}
                              p='1rem'
                              maxW='26rem'
                              textAlign={'center'}
                              fontSize={{ base: 'sm', md: 'md' }}
                            >
                              {notPossible
                                ? 'Minimum delivery time is 12 Working hrs'
                                : '20% Extra will be Charged for same day delivery'}
                            </Text>
                          </VStack>
                        ) : (
                          ''
                        )}
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
                            defaultValue={props.addressData}
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
                    justifyContent='center'
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
                      <Button
                        mt='1rem'
                        mb='2rem'
                        display='flex'
                        alignSelf='center'
                        w='fit-content'
                        variant='unstyled'
                        type='submit'
                        form='hook-form'
                        isDisabled={notPossible}
                        isLoading={submitSpinner}
                      >
                        <Center>
                          <ArrowButton variant='dark'>
                            Confirm Order
                          </ArrowButton>
                        </Center>
                      </Button>
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
