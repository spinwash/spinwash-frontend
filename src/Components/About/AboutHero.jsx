import { Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polygon,
} from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import EdenPark from './EDENPARK.svg';
import Attire from './ATTIRE.svg';

const MotionBox = motion(Box);

const containerStyle = {
  width: 'full',
  height: '24rem',
};

const position = { lat: 18.466, lng: -66.118 };

const options = {
  fillColor: '#E1F6FF',
  fillOpacity: 0.3,
  strokeColor: '#1B4D7A',
  strokeOpacity: 1,
  strokeWeight: 1,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const paths = [
  { lat: 25.774, lng: -80.19 },
  { lat: 18.466, lng: -66.118 },
  { lat: 32.321, lng: -64.757 },
  { lat: 35.774, lng: -120.19 },
  { lat: 25.774, lng: -100.19 },
];

const AboutHero = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'ChIJF27lkrQBdkgR618XtZrh7L0',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = (polygon) => {
    console.log('polygon: ', polygon);
  };

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      <Stack
        zIndex={'1'}
        direction={{ base: 'column', lg: 'row' }}
        p={{ base: '1rem', sm: '2rem', lg: '8rem 2rem 4rem 2rem' }}
        spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
        maxW='8xl'
        justifyContent={'space-between'}
        mx='auto'
      >
        <MotionBox
          maxW='50rem'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='flex-start'
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
        >
          <Heading
            fontWeight={'600'}
            fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
          >
            About Spinwash
          </Heading>
          <Text fontSize={{ base: 'xl', md: '3xl' }} py='1.5rem'>
            Who are We
          </Text>
          <Text fontSize={{ base: 'sm', md: 'xl' }}>
            We work with local dry cleaners to make sure your dry cleaning,
            alteration and laundry needs are met along with making sure each
            order is cleaned to the highest standard. <br />
            <br /> We offer many services such as dry cleaning, laundry service,
            curtain cleaning, duvet cleaning, repairs, alterations, shirt
            service and iron only options. We also offer cleaning for fur,
            leather and suede cleaning.
            <br />
            <br />
            We have listed all the areas we provide our services in at the
            moment. Our team has amassed over 25 years in this industry making
            us qualified to deal with any query you can have. Feel free to
            contact us through the email or phone number listed on our website.
          </Text>
          {/* <Box
            w='full'
            minH={{ base: '20rem', md: '24rem' }}
            h='full'
            bg='gray.100'
            mt={'2rem'}
          >
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <Polygon onLoad={onLoad} paths={paths} options={options} />
              </GoogleMap>
            ) : (
              ''
            )}
            </Box>*/}
        </MotionBox>
        <MotionBox
          maxW={{ base: 'full', md: '25rem' }}
          bg='spinwash.100'
          p='2rem'
          as='flex'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.6, ease: 'easeInOut' },
          }}
          fontWeight={'300'}
          fontSize={{ base: 'sm', md: 'lg' }}
        >
          <VStack p='2rem 1rem' align={'start'}>
            <Text py='0.5rem' fontWeight='500' fontSize='xl'>
              Customer Support
            </Text>
            <Text>Monday - Friday : 8:00 am - 8: 00pm</Text>
            <Text>Saturday : 8:00 am - 6:30pm</Text>
          </VStack>
          <VStack p='1rem' align={'start'}>
            <Text py='0.5rem' fontWeight='500' fontSize='xl'>
              Main Office
            </Text>
            <Text>523A Upper Elmers End Road, Beckenham, Kent, BR3 3DE</Text>
          </VStack>
          <VStack p='2rem 1rem' align={'start'}>
            <Text py='0.5rem' fontWeight='500' fontSize='xl'>
              Contact
            </Text>
            <Text>020 8125 3074</Text>
            <Text>info@spinwash.co.uk</Text>
            <a
              href='https://www.facebook.com/spinwash01'
              target='_blank'
              rel='noreferrer'
            >
              <Text>Instagram</Text>
            </a>
            <a
              href='https://www.instagram.com/spinwash_'
              target='_blank'
              rel='noreferrer'
            >
              <Text>Facebook</Text>
            </a>
          </VStack>
        </MotionBox>
      </Stack>
      <Stack
        zIndex={'1'}
        direction={{ base: 'column', lg: 'row' }}
        p={{ base: '1rem', sm: '2rem', lg: '8rem 2rem 4rem 2rem' }}
        spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
        maxW='8xl'
        justifyContent={'space-between'}
        mx='auto'
      >
        <MotionBox
          w='full'
          display='flex'
          flexDirection='column'
          justifyContent='flex-start'
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
        >
          <Text
            fontSize={{ base: 'xl', md: '3xl' }}
            py='2rem'
            textAlign={'center'}
          >
            In Partnership with
          </Text>
          <Stack
            p='2rem'
            direction={{ base: 'column', sm: 'row' }}
            mx='auto'
            w='full'
            maxW='4xl'
            justifyContent='space-between'
            spacing='4rem'
          >
            <VStack alignItems={'start'}>
              <Image src={Attire} w={{ base: '10rem', md: '15rem' }} />
              <VStack pt='1rem' alignItems={'start'}>
                <Text fontSize={{ base: 'sm', md: 'xl' }} fontWeight='bold'>
                  Located in Hayes
                </Text>
                <Text fontSize={{ base: 'sm', md: 'xl' }}>
                  34 Station Approach
                </Text>
                <Text fontSize={{ base: 'sm', md: 'xl' }}>BR2 7EJ</Text>
                <Text fontSize={{ base: 'sm', md: 'xl' }}>Bromley</Text>
              </VStack>
            </VStack>
            <VStack alignItems={'start'}>
              <Image src={EdenPark} w={{ base: '6rem', md: '8rem' }} />
              <VStack pt='1rem' alignItems={'start'}>
                <Text fontSize={{ base: 'sm', md: 'xl' }} fontWeight='bold'>
                  Located in Eden Park
                </Text>
                <Text fontSize={{ base: 'sm', md: 'xl' }}>
                  523 Upper Elmers End Road
                </Text>
                <Text fontSize={{ base: 'sm', md: 'xl' }}>BR3 3DE</Text>
                <Text fontSize={{ base: 'sm', md: 'xl' }}>Bromley</Text>
              </VStack>
            </VStack>
          </Stack>
        </MotionBox>
      </Stack>
    </>
  );
};

export default AboutHero;
