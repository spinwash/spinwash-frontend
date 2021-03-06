import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SearchData from '../../Data/AreasData.json';
import SearchBar from '../Price List/SearchBar';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const Data = [
  {
    id: 0,
    area: 'Beckenham',
    parent: 'Bromley',
  },
  {
    id: 1,
    area: 'Bickley',
    parent: 'Bromley',
  },
  {
    id: 2,
    area: 'Biggin Hill',
    parent: 'Bromley',
  },
  {
    id: 3,
    area: 'Bromley Common',
    parent: 'Bromley',
  },
  {
    id: 4,
    area: 'Chiselhurst',
    parent: 'Bromley',
  },
  {
    id: 5,
    area: 'Crystal Palace',
    parent: 'Bromley',
  },
  {
    id: 6,
    area: 'Downham',
    parent: 'Bromley',
  },
  {
    id: 7,
    area: 'Elmstead',
    parent: 'Bromley',
  },
  {
    id: 8,
    area: 'Glades',
    parent: 'Bromley',
  },
  {
    id: 9,
    area: 'Hayes',
    parent: 'Bromley',
  },
  {
    id: 10,
    area: 'Keston Orpington',
    parent: 'Bromley',
  },
  {
    id: 11,
    area: 'Petts Wood',
    parent: 'Bromley',
  },
  {
    id: 12,
    area: 'Ruxley',
    parent: 'Bromley',
  },
  {
    id: 13,
    area: 'Shirley',
    parent: 'Bromley',
  },
  {
    id: 14,
    area: 'Shortlands',
    parent: 'Bromley',
  },
  {
    id: 15,
    area: 'St Mary Cray',
    parent: 'Bromley',
  },
  {
    id: 16,
    area: 'Sundridge',
    parent: 'Bromley',
  },
  {
    id: 0,
    area: 'Addington',
    parent: 'Croydon',
  },
  {
    id: 1,
    area: 'Addisoncombe',
    parent: 'Croydon',
  },
  {
    id: 2,
    area: 'Herne Hill ',
    parent: 'Croydon',
  },
  {
    id: 3,
    area: 'Thornton Heath',
    parent: 'Croydon',
  },
  {
    id: 0,
    area: 'Grove Park',
    parent: 'Lewisham',
  },
  {
    id: 1,
    area: 'Sidcup',
    parent: 'Lewisham',
  },
  {
    id: 2,
    area: 'Sydenham',
    parent: 'Lewisham',
  },
];

const AreaHero = () => {
  return (
    <>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        p={{ base: '1rem 2rem', md: '1rem' }}
        mx={{ base: '0', lg: 'auto' }}
        maxW='8xl'
      >
        <VStack
          zIndex={'1'}
          p={{
            base: '2rem 0rem 0rem 0rem',
            sm: '4rem 0rem 0rem 0rem',
            lg: '8rem 2rem 4rem 2rem',
          }}
          spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
          maxW={{ base: '80vw', xl: '44vw' }}
          alignItems='start'
          minH='25vh'
        >
          <MotionBox
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
              Areas We Currently Cover
            </Heading>
          </MotionBox>
          <MotionBox
            w='full'
            as='flex'
            alignSelf='start'
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.6, ease: 'easeInOut' },
            }}
          >
            <Box
              w={['70vw', '80vw', '30vw']}
              bg='white'
              mt={'1rem'}
              maxH={{ base: '1rem', md: '4.08rem' }}
            >
              <SearchBar
                //setItem={setCategory}
                Data={SearchData}
                dark={true}
                placeholder='Search for Place'
              />
            </Box>
          </MotionBox>
        </VStack>
      </Stack>
      <Container
        maxW='8xl'
        p={{ base: '2rem 0rem 0rem 0rem', xl: '0' }}
        my='4rem'
      >
        <Wrap
          px={'2rem'}
          align={{ base: 'start', sm: 'start' }}
          justify={{ base: 'start', sm: 'space-between', lg: 'space-between' }}
          maxW='4xl'
          mx={{ base: 'auto', md: '0', lg: '0', xl: '0' }}
        >
          <MotionVStack
            pb='1rem'
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.8, ease: 'easeInOut' },
            }}
            alignItems={'start'}
            minW={{ base: '18rem', sm: '14rem', xl: '15rem' }}
          >
            <Heading fontWeight={'500'} fontSize={{ base: 'xl', md: '3xl' }}>
              Bromley
            </Heading>
            {Data.map(
              (area) =>
                area.parent === 'Bromley' && (
                  <Text id={area.id} fontSize={{ base: 'sm', md: 'md' }}>
                    {area.area}
                  </Text>
                )
            )}
          </MotionVStack>
          <MotionVStack
            pb='1rem'
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: 1.2, ease: 'easeInOut' },
            }}
            minW={{ base: '18rem', sm: '14rem', xl: '15rem' }}
            alignItems={'start'}
          >
            <Heading fontWeight={'500'} fontSize={{ base: 'xl', md: '3xl' }}>
              Croydon
            </Heading>
            {Data.map(
              (area) =>
                area.parent === 'Croydon' && (
                  <Text id={area.id} fontSize={{ base: 'sm', md: 'md' }}>
                    {area.area}
                  </Text>
                )
            )}
          </MotionVStack>
          <MotionVStack
            pb='1rem'
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 1.6, ease: 'easeInOut' },
            }}
            minW={{ base: '18rem', sm: '14rem', xl: '15rem' }}
            alignItems={'start'}
          >
            <Heading fontWeight={'500'} fontSize={{ base: 'xl', md: '3xl' }}>
              Lewisham
            </Heading>
            {Data.map(
              (area) =>
                area.parent === 'Lewisham' && (
                  <Text id={area.id} fontSize={{ base: 'sm', md: 'md' }}>
                    {area.area}
                  </Text>
                )
            )}
          </MotionVStack>
        </Wrap>
      </Container>
    </>
  );
};

export default AreaHero;
