import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polygon,
} from '@react-google-maps/api';
import { useCallback, useState } from 'react';

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
        p={{ base: '2rem 0rem 0rem 0rem', lg: '8rem 2rem 4rem 2rem' }}
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
            You can have almost anything cleaned, pressed or repaired through
            Spinwash. If you have an item you would like us to take care of but
            can't see it listed please give us a call on 020 7060 4939 to
            clarify the price. <br />
            <br /> For any high value services not listed on the pricing page
            we'll always contact you to get your permission before going ahead
            with the work.
          </Text>
          <Box
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
          </Box>
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
            <Text>Saturday : 8:00 am - 7: 00pm</Text>
            <Text>Sunday : 10:00 am - 4: 00pm</Text>
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
            <Text>Instagram</Text>
            <Text>Facebook</Text>
          </VStack>
        </MotionBox>
      </Stack>
    </>
  );
};

export default AboutHero;
