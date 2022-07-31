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
  AlertIcon,
  Alert,
  AlertTitle,
} from '@chakra-ui/react';
import { addMonths } from 'date-fns';
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

const AlertPop = (props) => {
  return (
    <Alert status='error'>
      <AlertIcon color={'red.400'} />
      <AlertTitle
        mr={4}
        textColor={'red.400'}
        fontWeight={'500'}
        fontSize={{ base: 'sm', md: 'md', lg: 'xl' }}
      >
        {props.title}
      </AlertTitle>
    </Alert>
  );
};

export default function BookingBar(props) {
  const [formErrorState, setFormErrorState] = useState({
    is: false,
    message: '',
  });
  const [formPassState, setFormPassState] = useState({
    is: false,
    message: '',
  });
  const [allowModal, setAllowModal] = useState(false);
  const [timing, setTiming] = useState(['Select Date First']);
  const [dropOffTiming, setDropOffTiming] = useState(['Select Date First']);
  const [charges, setCharges] = useState(false);
  const [notPossible, setNotPossible] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [hover, setHover] = useState(false);
  const [submitSpinner, setSubmitSpinner] = useState(false);

  function convertTo24Hour(time) {
    var hours = parseInt(time?.substr(0, 2));
    if (time?.indexOf('AM') != -1 && hours == 12) {
      time = time?.replace('12', '0');
    }
    if (time?.indexOf('PM') != -1 && hours < 12) {
      time = time?.replace(hours, hours + 12);
    }
    return time?.replace(/(AM|PM)/, '');
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
  let timePickupp = parseInt(timePickup);
  let timedropOfff = parseInt(timedropOff);

  function addedTime(t) {
    const timeData = t.toString().split(' ');
    let value = '';
    if (parseInt(timeData[0]) === 11) {
      value = 12;
      return value + ' PM';
    } else if (parseInt(timeData[0]) === 12) {
      value = 1;
      return value + ' ' + timeData[1];
    } else {
      value = parseInt(timeData[0]) + 1;
      return value + ' ' + timeData[1];
    }
  }

  useEffect(() => {
    if (collection?.getMonth() === dropOff?.getMonth()) {
      
      if (timePickupp) {
        console.log('same month');
        if (collection?.getDate() === now.getDate()) {
          console.log(
            'collection today chosen | time-diff = ',
            timePickupp - now.getHours()
          );
          if (timePickupp - now.getHours() < 3) {
            setFormErrorState({
              is: true,
              message: 'Minimum Time for pickup is 2 hrs',
            });
            setNotPossible(true);
            console.log('✖ less than 3 hours in today');
          } else {
            setFormErrorState({
              is: false,
              message: '',
            });
            setNotPossible(false);
            console.log('✔ greater than 3 hours in today');
          }
        } else {
          setNotPossible(false);
          setFormErrorState({
            is: false,
            message: 'Please Select the Timing Correctly',
          });
          console.log('pickup not today');
        }
        console.log(
          '-------------------------- time diff  👉🏻 ',
          timedropOfff - timePickupp
        );
        // if the date is same only then this code snippet will run
        if (Date.parse(collection) === Date.parse(dropOff)) {
          // console.log(
          //   'same date choosen',
          //   Date.parse(collection) === Date.parse(dropOff)
          // );

          if (timedropOfff - timePickupp >= 0) {
            // console.log('positive time choosen'); // as the time is negative we will check if its less than 12 or greater than 12
            if (timedropOfff - timePickupp === 12) {
              // console.log('equal to 12 choosen');
              setCharges(true);
              setNotPossible(false);
              
            } else if (timedropOfff - timePickupp < 12) {
              //  console.log('less than 12 choosen');
              setNotPossible(true);
              setFormErrorState({
                is: true,
                message: 'Minimum Delivery time is 12 hrs',
              });
              setCharges(false);
            } else {
              // console.log('greater than 12 choosen');
              setCharges(false);
              setNotPossible(false);
            }
          } else {
            // console.log('Negative time choosen');
            setNotPossible(true);
            setFormErrorState({
              is: true,
              message: 'Minimum Delivery time is 12 hrs',
            });
          }

          if (timedropOfff - timePickupp < 0 && timedropOfff > 0) {
            console.log('✖ less than 0 choosen');
            setCharges(false);
            setNotPossible(true);
            setAllowModal(false);
            setFormErrorState({
              is: true,
              message: 'Error! Please select the timing correctly',
            });
            console.log('--------- if of time pickup ----------');
          } else {
            console.log('✔ more than 0 choosen');
            setCharges(false);
            setNotPossible(false);
            setAllowModal(true);
          }
        }
      } else {
        setNotPossible(false);
        setAllowModal(true);
      }

      if (formErrorState.is) {
        setNotPossible(true);
        setAllowModal(false);
      } else {
        setNotPossible(false);
        setAllowModal(true);
      }

      if (collection?.getDate() > dropOff?.getDate()) {
        console.log('collection greater than dropOff ');
        setNotPossible(true);
        setAllowModal(false);
        setFormErrorState({
          is: true,
          message: 'Error! Please select the timing correctly',
        });
      }
    }
  }, [
    collection,
    dropOff,
    timedropOfff,
    timePickupp,
    collectionDateData,
    dropOffDateData,
    formErrorState.is,
    formPassState.is,
    allowModal,
  ]);

  useEffect(() => {
    if (collectionDate === '6') {
      setTiming([
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

  useEffect(() => {
    setMinDate(dropOff);
  }, [dropOff]);

  const onSubmit = (data) => {
    setSubmitSpinner(true);
    const dataToSend = {
      ...data,
      pickup: data.pickup.toLocaleDateString(),
      dropOff: data.dropOff.toLocaleDateString(),
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

  const handleArrowClick = () => {
    if (allowModal) {
      if (
        watch('pickupTime') &&
        watch('dropOffTime') &&
        watch('pickup') &&
        watch('address') &&
        watch('dropOff')
      ) {
        setFormErrorState({ is: false, message: '' });
        onOpenModal();
      } else {
        console.log('--------- else of handle click ----------');
        setFormErrorState({ is: true, message: 'fill all the details' });
      }
    }
  };

  return (
    <VStack>
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
                          maxDate={addMonths(new Date(), 3)}
                          calendarStartDay={1}
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
                        <option
                          style={{ backgroundColor: 'white' }}
                          value={`${time} to ${addedTime(time)}`}
                        >
                          {time} - {addedTime(time)}
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
                          maxDate={addMonths(new Date(), 3)}
                          calendarStartDay={1}
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
                        <option
                          style={{ backgroundColor: 'white' }}
                          value={`${time} to ${addedTime(time)}`}
                        >
                          {time} - {addedTime(time)}
                        </option>
                      ))}
                    </Select>
                  </Center>
                </HStack>
              </Stack>
              <Box
                onClick={handleArrowClick}
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
                      maxW={{
                        base: '90vw',
                        md: '60vw',
                        lg: '50vw',
                        xl: '30vw',
                      }}
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
                                  ? `${watch('pickupTime')}`
                                  : '1 hr of selected time. '}{' '}
                                and dropped off between{' '}
                                {watch('dropOffTime')
                                  ? `${watch('dropOffTime')}.`
                                  : '1 hr of selected time. '}
                                {/*   on the{' '}
                              {watch('pickup')?.toISOString().split('T')[0]},*/}
                              </b>
                              <br /> Please confirm if your items are for dry
                              clean/wash and press, press only (ironing) or
                              service wash ( Wash, Dry and Fold). <br /> Also if
                              you require any alterations or have any specific
                              requirements please let us know the details.
                            </Text>
                          </VStack>
                          {charges ? (
                            <VStack>
                              <Text
                                border={'2px dotted #d6d6d6'}
                                borderColor='#d6d6d6'
                                rounded='md'
                                bg='spinwash.100'
                                color='spinwash.500'
                                p='1rem'
                                maxW='26rem'
                                textAlign={'center'}
                                fontSize={{ base: 'sm', md: 'md' }}
                              >
                                25% Extra will be Charged for same day delivery
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
                          <FormControl w='full' mb='1rem'>
                            <Input
                              outline='2px solid #1B4D7A'
                              type={'text'}
                              mb={'1rem'}
                              borderRadius={'0'}
                              bg={'white'}
                              px='0.5rem'
                              h={{ base: '3rem', md: '3.6rem' }}
                              size={{ base: 'sm', md: 'lg' }}
                              placeholder='Promo Code'
                              _placeholder={{ color: 'gray.400' }}
                              {...register('promo')}
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
      {formErrorState.is && <AlertPop title={formErrorState.message} />}
    { timedropOfff - timePickupp === 12 && collection?.getDate() === dropOff?.getDate() ? <Alert status='info' color={'spinwash.500'}>
    <AlertIcon />We charge 25% more on same day orders
  </Alert> : '' }
    </VStack>
  );
}
