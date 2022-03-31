import { Heading, HStack, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Data from '../../Data/PriceListData.json';

const MotionVStack = motion(VStack);

const ServicesPriceList = ({ data: serviceKey }) => {
  const [priceListData, setPriceListData] = useState(search(serviceKey));

  function search(nameKey) {
    for (var i = 0; i < Data.length; i++) {
      if (Data[i].id === nameKey) {
        return Data[i];
      }
    }
  }
  useEffect(() => {
    setPriceListData(search(serviceKey));
    console.log(priceListData);
  }, [priceListData, serviceKey]);

  return (
    <MotionVStack
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 1, ease: 'easeInOut' },
      }}
      mx='auto'
      alignItems={'start'}
      maxW='80vw'
      spacing={'2rem'}
      py={{ base: '2rem', md: '4rem' }}
    >
      {priceListData && (
        <>
          <Heading fontSize={{ base: '2xl', md: '3xl' }}>Price List</Heading>
          <Wrap justify={'space-between'} spacing='1rem'>
            {priceListData.items.map((item) => (
              <HStack
                fontSize={{ base: 'xm', md: 'xl' }}
                minW={{ base: '12rem', lg: '26rem' }}
                w={{ base: '100%', lg: '30vw' }}
                justifyContent={'space-between'}
                alignItems='center'
              >
                <Text>{item.name}</Text>
                <Text fontWeight={'500'} textAlign='end'>
                  {item.price}
                </Text>
              </HStack>
            ))}
          </Wrap>
          {priceListData.note && (
            <Stack
              alignSelf='center'
              py={{ base: '2rem', md: '4rem' }}
              w='full'
              mx='auto'
            >
              <Text
                w='full'
                //border='2px dashed'
                p={{ base: '1rem 2rem', md: '2rem 3rem' }}
                textAlign={'center'}
                // borderColor={'spinwash.500'}
                bg='spinwash.100'
                //  rounded='md'
                fontWeight={'500'}
                fontSize={{ base: 'md', md: 'xl' }}
              >
                {priceListData.note}
              </Text>
            </Stack>
          )}
        </>
      )}
    </MotionVStack>
  );
};

export default ServicesPriceList;
