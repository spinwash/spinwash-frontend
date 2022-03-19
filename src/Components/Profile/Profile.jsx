import {
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
  Checkbox,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { isAuth } from '../../Helpers/auth';

const UserProfile = ({ data }) => {
  const [coupenState, setCoupenState] = useState(true);
  const id = isAuth()?._id;

  useEffect(() => {
    axios
      .get(`/api/user/${id}`)
      .then((res) => {
        setCoupenState(res.data.referralCodeUsed);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <VStack alignItems={'start'} gap='2rem'>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'500'}>
          Account
        </Heading>

        <VStack px='1rem'>
          <Wrap spacing={{ base: '2rem', md: '3rem' }} mx='auto'>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                Name
              </Heading>
              <Text fontWeight={400}>{data?.name}</Text>
            </VStack>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                Email
              </Heading>
              <Text fontWeight={300}>{data?.email}</Text>
            </VStack>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                Phone Number
              </Heading>
              <Text fontWeight={300}>{data?.phoneNumber}</Text>
            </VStack>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                Address
              </Heading>
              <Text fontWeight={300}>{data?.address}</Text>
            </VStack>
            {!coupenState && (
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                  Referral Code
                </Heading>
                <Text
                  border={'2px dashed #1B4D7A'}
                  rounded='md'
                  p='1rem'
                  bg='spinwash.100'
                  fontWeight={400}
                >
                  {data?._id.slice(0, data?._id.length / 2)}
                </Text>
              </VStack>
            )}
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
                Shirts
              </Heading>
              <HStack pl='1rem'>
                <Checkbox
                  size='md'
                  outline='1px solid #1B4D7A'
                  colorScheme='white'
                  defaultChecked={data?.shirtHung === 'true' ? true : false}
                />
                <Text as='span'>Shirt Hung</Text>
              </HStack>
              <HStack pl='1rem'>
                <Checkbox
                  size='md'
                  outline='1px solid #1B4D7A'
                  colorScheme='white'
                  defaultChecked={data.shirtFolded}
                />
                <Text as='span'>Shirt Folded</Text>
              </HStack>
              <HStack pl='1rem'>
                <Checkbox
                  size='md'
                  outline='1px solid #1B4D7A'
                  colorScheme='white'
                  defaultChecked={data.shirtDryCleanAndPress}
                />
                <Text as='span'>shirt DryClean And Press</Text>
              </HStack>
              <HStack pl='1rem'>
                <Checkbox
                  size='md'
                  outline='1px solid #1B4D7A'
                  colorScheme='white'
                  defaultChecked={data.shirtPressOnly}
                />
                <Text as='span'>shirtPressOnly</Text>
              </HStack>
              <HStack pl='1rem'>
                <Checkbox
                  size='md'
                  outline='1px solid #1B4D7A'
                  colorScheme='white'
                  defaultChecked={data.shirtWashAndPress}
                />
                <Text as='span'>shirt Wash And Press</Text>
              </HStack>
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
                Bedding
              </Heading>
              <HStack pl='1rem'>
                <Checkbox
                  outline='1px solid #1B4D7A'
                  size='md'
                  colorScheme='white'
                  defaultChecked={data?.beddingWashAndPress}
                />
                <Text as='span'>Wash and Press</Text>
              </HStack>
              <HStack pl='1rem'>
                <Checkbox
                  size='md'
                  outline='1px solid #1B4D7A'
                  colorScheme='white'
                  defaultChecked={data?.beddingWashAndFold}
                />
                <Text as='span'>Wash and fold</Text>
              </HStack>
              <HStack pl='1rem'>
                <Checkbox
                  size='md'
                  outline='1px solid #1B4D7A'
                  colorScheme='white'
                  defaultChecked={data?.beddingPressOnly}
                />
                <Text as='span'>Press only</Text>
              </HStack>
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
              <HStack pl='1rem'>
                <Text>{data?.preferences}</Text>
              </HStack>
            </VStack>
          </Wrap>
        </VStack>
      </VStack>
    </>
  );
};

export { UserProfile };
