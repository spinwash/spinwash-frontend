import {
  Container,
  Heading,
  Stack,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowButton from '../Components/HOC/ArrowButton';
import Lottie from 'react-lottie';
import * as animationData from '../Components/LottieFiles/lf30_editor_oesdryt1.json';
import axios from 'axios';
import { isAuth } from '../Helpers/auth';

const Orders = (props) => {
  const [Data, setData] = useState(props.Data);
  const id = isAuth()?._id;

  useEffect(() => {
    axios
      .get(`https://spinwash.herokuapp.com/api/user/${id}`)
      .then((res) => {
        setData(res.data.order);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const now = new Date();

  const presentOrders = [];
  const previousOrders = [];

  for (let i = 0; i < Data.length; i++) {
    const dropOffDate = Data[i].dropOff;
    const getDropOffDateData = Date.parse(dropOffDate);
    console.log(JSON.stringify(Data[i].dropOff).substring(1, 11));
    Data[i].dropOff = JSON.stringify(Data[i].dropOff).substring(1, 11);
    Data[i].pickup = JSON.stringify(Data[i].pickup).substring(1, 11);

    if (getDropOffDateData >= now.getTime()) {
      presentOrders.push(Data[i]);
    } else {
      previousOrders.push(Data[i]);
    }
  }

  const defaultOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container maxW='8xl' py='3rem'>
      <Stack
        w='100%'
        justify={{ base: 'start', sm: 'space-between' }}
        align={{ base: 'start', sm: 'center' }}
        direction={{ base: 'column', sm: 'row' }}
      >
        <Heading fontSize={{ base: '4xl', md: '5xl' }}>Your Orders</Heading>
        <Box as='button'>
          {Data.length > 0 ? (
            <Link to='/'>
              <ArrowButton variant='dark'>Create Order</ArrowButton>
            </Link>
          ) : (
            ''
          )}
        </Box>
      </Stack>
      {Data.length > 0 ? (
        <Container
          overflow='hidden'
          maxW={'8xl'}
          fontSize={{ base: 'xs', md: 'md' }}
          my={{ base: '3rem', md: '4rem' }}
          display='flex'
          gap={{ base: '3rem', md: '6rem' }}
          flexDirection='column'
          p={{ base: '0', md: '2rem' }}
        >
          <Box>
            <Heading
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight={'500'}
              mb='1rem'
            >
              Current Orders
            </Heading>
            <Table
              //color='gray.400'
              variant='simple'
              colorScheme='blue'
              rounded='0'
            >
              <Thead>
                <Tr>
                  <Th>Address</Th>
                  <Th>Pickup</Th>
                  <Th>DropOff</Th>
                </Tr>
              </Thead>
              <Tbody>
                {presentOrders.map((order) => (
                  <Tr>
                    <Td px={{ base: '8px', md: '14px' }}>
                      <Text isTruncated maxW={{ base: '6rem', sm: '15rem' }}>
                        {order.address}
                      </Text>
                    </Td>
                    <Td>
                      <Text>
                        {order.pickup} - {order.pickupTime}
                      </Text>
                    </Td>
                    <Td>
                      {' '}
                      <Text>
                        {order.dropOff} - {order.dropOffTime}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          <Box>
            <Heading
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight={'500'}
              mb='1rem'
            >
              Previous Orders
            </Heading>
            <Table variant='simple' colorScheme='blue' rounded='0'>
              <Thead>
                <Tr>
                  <Th>Address</Th>
                  <Th>Pickup</Th>
                  <Th>DropOff</Th>
                </Tr>
              </Thead>
              <Tbody>
                {previousOrders.map((order) => (
                  <Tr>
                    <Td px={{ base: '8px', md: '14px' }}>
                      <Text isTruncated maxW={{ base: '6rem', sm: '15rem' }}>
                        {order.address}
                      </Text>
                    </Td>
                    <Td>
                      <Text>
                        {order.pickup} - {order.pickupTime}
                      </Text>
                    </Td>
                    <Td>
                      {' '}
                      <Text>
                        {order.dropOff} - {order.dropOffTime}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Container>
      ) : (
        <Center
          // gap={{ base: '2rem', md: '3rem' }}
          flexDirection='column'
          h='50vh'
        >
          <Lottie options={defaultOptionsLottie} height={300} width={250} />
          <Heading fontSize={{ base: 'xl', md: '2xl' }}>
            Create Your First Order with us
          </Heading>
          <Box as='button' my='1rem'>
            <Link to='/'>
              <ArrowButton variant='dark'>Create Order</ArrowButton>
            </Link>
          </Box>
        </Center>
      )}
    </Container>
  );
};

export { Orders };
