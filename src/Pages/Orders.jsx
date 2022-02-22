import {
  Center,
  Container,
  Heading,
  HStack,
  VStack,
  Stack,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowButton from '../Components/HOC/ArrowButton';

const Data = [
  {
    address:
      'Current order, Adi Cplx, Apos;petblr-53, Chickpet, Banglore, Karnatka',
    dropOff: 'Thu Feb 24 2022 00:00:00 GMT+0530',
    dropOffTime: '07 PM',
    pickup: 'Wed Feb 23 2022 00:00:00 GMT+0530',
    pickupTime: '06 PM',
    requirements: 'This is an order',
  },
  {
    address:
      'Current order, Adi Cplx, Apos;petblr-53, Chickpet, Banglore, Karnatka',
    dropOff: 'Sun Feb 26 2022 00:00:00 GMT+0530',
    dropOffTime: '07 PM',
    pickup: 'Mon Feb 28 2022 00:00:00 GMT+0530',
    pickupTime: '06 PM',
    requirements: 'This is an order',
  },
  {
    address:
      'Prev Order, Adi Cplx, Apos;petblr-53, Chickpet, Banglore, Karnatka',
    dropOff: 'Thu Feb 20 2022 00:00:00 GMT+0530',
    dropOffTime: '06 PM',
    pickup: 'Wed Feb 21 2022 00:00:00 GMT+0530',
    pickupTime: '07 PM',
    requirements: 'This is an order',
  },
  {
    address:
      'Prev Order, Adi Cplx, Apos;petblr-53, Chickpet, Banglore, Karnatka',
    dropOff: 'Thu Feb 10 2022 00:00:00 GMT+0530',
    dropOffTime: '01 PM',
    pickup: 'Wed Feb 13 2022 00:00:00 GMT+0530',
    pickupTime: '02 PM',
    requirements: 'This is an order',
  },
  {
    address:
      'Prev Order, Adi Cplx, Apos;petblr-53, Chickpet, Banglore, Karnatka',
    dropOff: 'Thu Feb 20 2022 00:00:00 GMT+0530',
    dropOffTime: '06 PM',
    pickup: 'Wed Feb 21 2022 00:00:00 GMT+0530',
    pickupTime: '07 PM',
    requirements: 'This is an order',
  },
  {
    address:
      'Prev Order, Adi Cplx, Apos;petblr-53, Chickpet, Banglore, Karnatka',
    dropOff: 'Thu Feb 10 2022 00:00:00 GMT+0530',
    dropOffTime: '01 PM',
    pickup: 'Wed Feb 13 2022 00:00:00 GMT+0530',
    pickupTime: '02 PM',
    requirements: 'This is an order',
  },
];

const Orders = () => {
  const now = new Date();
  const todayDate = JSON.stringify(now.getDate());
  const thisMonth = now.toLocaleString('default', { month: 'short' });
  // console.log(todayDate + ' ' + thisMonth);

  const presentOrders = [];
  const previousOrders = [];

  for (let i = 0; i < Data.length; i++) {
    const dropOffDate = Data[i].dropOff;
    var splittedDropOffDate = dropOffDate.split(/(\s+)/);
    const getDropOffDateData = Date.parse(
      `${splittedDropOffDate[2]} ${splittedDropOffDate[4]} ${splittedDropOffDate[6]} `
    );
    console.log(getDropOffDateData);
    if (getDropOffDateData >= now.getTime()) {
      presentOrders.push(Data[i]);
    } else {
      previousOrders.push(Data[i]);
    }
  }
  console.log('present orders ', presentOrders);
  console.log('previous orders ', previousOrders);

  return (
    <Container maxW='8xl' py='3rem'>
      <Heading fontSize={{ base: '4xl', md: '5xl' }}>Your Orders</Heading>
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
            <Table variant='striped' colorScheme='blue' rounded='0'>
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
                      <Text>{order.address}</Text>
                    </Td>
                    <Td>
                      <Text>
                        {order.pickup.substring(0, 15)} - {order.pickupTime}
                      </Text>
                    </Td>
                    <Td>
                      {' '}
                      <Text>
                        {order.dropOff.substring(0, 15)} - {order.dropOffTime}
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
            <Table variant='striped' colorScheme='blue' rounded='0'>
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
                      <Text>{order.address}</Text>
                    </Td>
                    <Td>
                      <Text>
                        {order.pickup.substring(0, 15)} - {order.pickupTime}
                      </Text>
                    </Td>
                    <Td>
                      {' '}
                      <Text>
                        {order.dropOff.substring(0, 15)} - {order.dropOffTime}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Container>
      ) : (
        <Box my='5rem'>
          <Text fontSize={'xl'} my='1rem'>
            You havent made any orders
          </Text>
          <Link to='/'>
            <ArrowButton variant='dark'>Book Now</ArrowButton>
          </Link>
        </Box>
      )}
    </Container>
  );
};

export { Orders };
