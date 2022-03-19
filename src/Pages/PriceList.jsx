import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import Data from '../Data/PriceListData.json';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroImage from '../Components/Images/Hero.webp';
import BookNow from '../Components/Home/BookNow';
import SearchBar from '../Components/Price List/SearchBar';
import SearchData from '../Data/SearchData.json';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionStack = motion(Stack);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 40 },
};

const PriceList = () => {
  const [category, setCategory] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    Data.filter((cat) => {
      if (cat?.id == category) {
        return cat;
      } else {
        return null;
      }
    });
  }, [category]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container maxW='full' p='0'>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        justifyContent='space-between'
        maxW='9xl'
        mx='auto'
        bg='spinwash.300'
        padding='0'
        spacing='0'
      >
        <VStack
          zIndex={'1'}
          color='white'
          p={{ base: '2rem 0rem 0rem 0rem', lg: '8rem 2rem 4rem 2rem' }}
          spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
          ml={{ base: 'auto', xl: '8rem' }}
          mr={{ base: 'auto', xl: '-20rem' }}
          maxW={{ base: '80vw', xl: '44vw' }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
          >
            <Heading fontSize={{ base: '4xl', xl: '7xl' }}>
              Price List For Our Services
            </Heading>
          </MotionBox>
          <MotionBox
            as='flex'
            alignSelf='start'
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.6, ease: 'easeInOut' },
            }}
          >
            <Box
              w={['70vw', '50vw', '30vw']}
              bg='white'
              mt={'1rem'}
              maxH={{ base: '1rem', md: '4.08rem' }}
            >
              <SearchBar
                setItem={setCategory}
                dark={false}
                Data={SearchData}
                placeholder='Search for Item'
              />
            </Box>
          </MotionBox>
        </VStack>
        <Center>
          <Image
            zIndex={'0'}
            src={HeroImage}
            w='clamp(20rem, 34vw,70rem)'
            align={'flex-end'}
            mt='auto'
          />
        </Center>
      </Stack>
      <Wrap
        maxW='9xl'
        p={['1rem', '2rem', '3rem', '4rem']}
        spacing={{ base: '0.4rem', md: '1rem' }}
        align={'center'}
        justify='center'
      >
        {Data.map((item) => (
          <MotionBox
            key={item.key}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 1.2,
                ease: 'easeInOut',
              },
            }}
            as='button'
            onClick={() => {
              setCategory(item.id);
            }}
            display='flex'
            alignItems='center'
            justifyContent='center'
            w={['7.1rem', '10rem', '12rem', '16rem']}
            h='full'
            minH='3.5rem'
            p={['0.4rem 0.8rem', '0.8rem 1.6rem', '1rem 2rem', '1.2rem 2.4rem']}
            bg='spinwash.100'
            _hover={{
              bg: 'spinwash.500',
              color: 'white',
              transition: 'all 0.5s',
            }}
            _focus={{
              bg: 'spinwash.500',
              color: 'white',
              transition: 'all 0.5s',
            }}
          >
            <Heading
              fontWeight={{ base: '300', md: '400' }}
              fontSize={['sx', 'sm', 'md', 'xl']}
            >
              {item.title}
            </Heading>
          </MotionBox>
        ))}
      </Wrap>
      <MotionVStack
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 1.8, ease: 'easeInOut' },
        }}
        mx='auto'
        alignItems={'start'}
        maxW='80vw'
        spacing={'2rem'}
        py='2rem'
      >
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>
          {Data[category].title}
        </Heading>
        <Wrap justify={'space-between'} spacing='1rem'>
          {Data[category].items.map((item) => (
            <HStack
              fontSize={{ base: 'xm', md: 'xl' }}
              minW={{ base: '20rem', md: '40rem' }}
              justifyContent={'space-between'}
              alignItems='center'
            >
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </HStack>
          ))}
        </Wrap>
      </MotionVStack>
      <MotionStack
        ref={ref}
        animate={controls}
        variants={variant}
        initial='hidden'
        direction={{ base: 'column', lg: 'row' }}
        mx='auto'
        px={{ base: '0', md: '1rem' }}
        maxW='8xl'
        w='full'
        align='center'
        justifyContent='space-between'
        my={{ base: '2rem', md: '6rem' }}
      >
        <BookNow />
        <VStack
          bg='spinwash.100'
          maxW={'fit-content'}
          alignItems='start'
          spacing='1rem'
          mx='auto'
          p='2rem'
        >
          <Heading fontWeight={'500'}>Extra Services</Heading>
          <Text
            maxW='36rem'
            fontWeight={'300'}
            fontSize={{ base: 'xs', md: 'md' }}
          >
            For all leather, suede, fur and shoe cleaning please contact us via
            phone or email for more information.
          </Text>
          <Text
            maxW='40rem'
            fontWeight={'400'}
            fontSize={{ base: 'xs', md: 'md' }}
          >
            Get £10 off when you spend £40!
          </Text>
          <Box bg={'white'} p='1rem 2rem'>
            MINUS10
          </Box>
        </VStack>
      </MotionStack>
    </Container>
  );
};

export { PriceList };
