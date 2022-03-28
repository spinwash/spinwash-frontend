import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, VStack, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import axios from 'axios';
import BookingBar from '../Hero/BookingBar';
import { isAuth } from '../../Helpers/auth';
import { useLocation } from 'react-router-dom';
import ServicesPriceList from './ServicesPriceList';

const MotionBox = motion(Box);

const data = [
  {
    id: 'dryCleaning',
    key: '1',
    name: 'Dry Cleaning',
    text: 'We offer a wide range of dry cleaning, from suits to curtains we do it all. Dry cleaning is a process of cleaning clothes without the use of water instead water-free liquid solvent known as ‘perc’ (perchloroethylene) is used. ',
  },
  {
    id: 'bedding',
    key: '4',
    name: 'Bedding',
    text: 'Washing and pressing our bedding is one of our most popular service. We offer cleaning all sizes of duvets such as single, double, king and super king. We make sure your bedding returns to you neat and smelling fresh. We offer a service of just ironing your item(s) and returning them to you looking crispy. ',
  },
  {
    id: 'household',
    key: '5',
    name: 'Household',
    text: 'We clean an extensive range of household items such as cushion covers and rugs. We also offer a wash, dry and fold service for your clothes. Items such as tablecloths are washed and ironed. ',
  },
  {
    id: 'shirts',
    key: '2',
    name: 'Shirts',
    text: 'We have different options of cleaning shirts. We can either wash and press them or dry clean them. There is also a press only service. We can also return them on hangers or folded.',
  },
  {
    id: 'laundry',
    key: '3',
    name: 'Laundry',
    text: 'We have different options for laundry, we offer a service wash which consists of washing tumble drying and folding your clothes. The other items such as a top are washed and ironed.',
  },
  {
    id: 'ironing',
    key: '6',
    name: 'Ironing',
    text: 'We iron a vast number of items such as shirts, trousers and bed sets. Items such as trousers are returned to you on a hanger and bed sets are returned in polythene packing to keep it the items form getting any creases. ',
  },
  {
    id: 'curtains',
    key: '7',
    name: 'Curtains',
    text: 'We can dry clean your clothes or alter them depending on your need. This is another one of our most popular service. ',
  },
  {
    id: 'alterations',
    key: '11',
    name: 'Alterations',
    text: 'We offer a quick turn around on our alteration and repair service. Working with experienced tailors we make sure each item is dealt with great care and meets the requirements our customers ask. ',
  },
];

const ServicesHOC = () => {
  const [addressData, setAddressData] = useState();
  const [serviceData, setServiceData] = useState({});
  const id = isAuth()?.id;

  const { pathname } = useLocation();

  function search(nameKey) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === nameKey) {
        return data[i];
      }
    }
  }

  useEffect(() => {
    setServiceData(search(pathname.split('/')[2]));
    // console.log(search(pathname.split('/')[2]).key);
  }, [pathname]);

  useEffect(() => {
    axios
      .get(`https://spinwash.herokuapp.com/api/user/${id}`)
      .then((res) => {
        setAddressData(res.data.address);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      {' '}
      <Stack
        maxW='9xl'
        direction={{ base: 'column', lg: 'column' }}
        justifyContent='space-between'
        mx='auto'
        bg='spinwash.300'
        padding='0'
        spacing='0'
      >
        <VStack
          zIndex={'1'}
          color='white'
          p={{
            base: '2rem 0rem 4rem 0rem',
            sm: '6rem 2rem 6rem 2rem',
            lg: '4rem 2rem 4rem 2rem',
          }}
          spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
          ml={{ base: 'auto', xl: '8rem' }}
          mr={{ base: 'auto', xl: '-20rem' }}
          maxW={{ base: '80vw', xl: '44vw' }}
          alignItems={'start'}
        >
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
          >
            <Heading fontSize={{ base: '4xl', xl: '8xl' }}>
              {serviceData.name}
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.4, ease: 'easeInOut' },
            }}
          >
            <Text pb='1rem' fontSize={{ base: 'sm', md: 'md' }}>
              {serviceData.text}
            </Text>
          </MotionBox>
          <MotionBox
            bg='white'
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.6, ease: 'easeInOut' },
            }}
            w={{ base: '75vw', sm: '80vw', md: '64vw', lg: '38vw' }}
            alignSelf={'start'}
            display='flex'
          >
            <BookingBar addressData={addressData} />
          </MotionBox>
        </VStack>
      </Stack>
      <ServicesPriceList data={serviceData.key} />
    </>
  );
};

export default ServicesHOC;
