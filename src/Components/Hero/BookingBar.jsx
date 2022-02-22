import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  Input,
  HStack,
  Text,
  Center,
  Stack,
  Box,
  Select,
  ModalContent,
  ModalBody,
  ModalCloseButton,
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
export default function BookingBar() {
  const [buttonClick, setButtonClick] = useState(false);
  const [timing, setTiming] = useState(['Select Date First']);
  const [dropOffTiming, setDropOffTiming] = useState(['Select Date First']);

  const [startDate, setStartDate] = useState(null);
  const [hover, setHover] = useState(false);

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const isWeekday = (date) => {
    const day = date.getDay(date);
    return day !== 0;
  };

  const { handleSubmit, register, watch, control } = useForm();

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

  const onSubmit = (data) => console.log(data);

  return (
    <Center h={{ base: '4.7rem', md: '5rem', xl: '6rem' }} w='full' bg='white'>
      <Center
        alignItems={{ base: 'flex-end', lg: 'center' }}
        color='spinwash.500'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack p='1rem' spacing={{ base: '1', md: '4' }}>
            <Input
              h='4rem'
              _placeholder={{
                color: 'spinwash.500',
              }}
              bg='spinwash.100'
              border='0'
              rounded='0'
              placeholder='Address'
              size='lg'
              {...register('address')}
            />
            <Stack spacing='0' direction={{ base: 'column', md: 'row' }}>
              <HStack minW={'8rem'}>
                <Center>
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
                    w='6rem'
                    placeholder='Time'
                    border='0'
                    _active={{ border: '0px' }}
                    _focus={{ border: '0px' }}
                    name='pickupTime'
                    {...register('pickupTime')}
                  >
                    {timing.map((time) => (
                      <option
                        border='0px solid white'
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
                <Center>
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
                    w='6rem'
                    placeholder='Time'
                    border='0'
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
              as='button'
              onClick={onOpenModal}
              display='flex'
              h='4rem'
              alignItems={'center'}
              bg={'spinwash.500'}
              p='0.5rem 1.5rem'
              mr='1rem'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Box transform={hover && 'rotate(45deg)'} transition='all 0.5s'>
                <HiOutlineArrowRight color='white' size='20' />
              </Box>
            </Box>
            <Modal
              isOpen={isOpenModal}
              size='xl'
              onClose={onCloseModal}
              isCentered
            >
              <ModalOverlay />
              <ModalContent bg='white' rounded='none' shadow='md'>
                <ModalCloseButton />
                <ModalBody
                  mt={{ base: '10vh', md: '3rem' }}
                  mb={{ base: '0', md: '3rem' }}
                >
                  <VStack gap='1rem'>
                    <Heading>Order Confirmation</Heading>
                    <VStack py='0.5rem' gap='1rem'>
                      <Text fontSize={'xl'}>Requirements</Text>
                      <Text fontSize={'sm'} textAlign={'center'} px='2rem'>
                        Please confirm if your items are for dry clean/wash and
                        press, press only (ironing) or service wash ( wash dry
                        and fold). Also if you require any alterations or have
                        any specific requirements please let us know the details
                      </Text>
                    </VStack>
                    <Input
                      rounded={0}
                      m='2.5rem'
                      {...register('requirements')}
                    />
                    <Box as='button' onClick={onSubmit}>
                      <ArrowButton variant='dark'> Confirm Order</ArrowButton>
                    </Box>
                  </VStack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </HStack>
        </form>
      </Center>
    </Center>
  );
}
