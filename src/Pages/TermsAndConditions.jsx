import {
  Box,
  Container,
  Heading,
  VStack,
  ListItem,
  OrderedList,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Data from '../Data/TermsAndConditions.json';

const MotionBox = motion(Box);

const TermsAndConditions = () => {
  return (
    <Container maxW='full' p='0'>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        justifyContent='space-between'
        maxW='9xl'
        mx='auto'
        padding='0'
        spacing='0'
      >
        <VStack
          alignItems={'start'}
          zIndex={'1'}
          p={{ base: '2rem 0rem 0rem 0rem', lg: '8rem 2rem 4rem 2rem' }}
          spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
          ml={{ base: 'auto', xl: '8rem' }}
          mr={{ base: 'auto', xl: '-20rem' }}
          maxW={{ base: '90vw', xl: '60vw' }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
          >
            <Heading
              fontWeight={'500'}
              fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
            >
              Terms and Conditions
            </Heading>
          </MotionBox>
          <MotionBox
            as='flex'
            flexDirection='row'
            alignSelf='start'
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.7, ease: 'easeInOut' },
            }}
          >
            {Data.map((item, parentKey) => (
              <VStack
                p={{ base: '1rem', md: '2rem' }}
                alignItems={'start'}
                key={parentKey}
              >
                <Heading
                  fontWeight={'500'}
                  fontSize={{ base: 'lg', md: '2xl' }}
                >
                  {item.heading}
                </Heading>
                <OrderedList
                  alignItems={'start'}
                  sx={{ listStyleType: 'none' }}
                >
                  {item.points.map((point, key) => (
                    <ListItem
                      _before={{
                        content: `'${parentKey + 1}.${key + 1}'`,
                        fontWeight: '400',
                        paddingRight: '0.7em',
                      }}
                      fontWeight={'300'}
                      fontSize={{ base: 'sm', md: '18px' }}
                      p={{ base: '0.2rem', md: '0.4rem' }}
                      key={key}
                    >
                      {point}
                    </ListItem>
                  ))}
                </OrderedList>
              </VStack>
            ))}
          </MotionBox>
        </VStack>
      </Stack>
    </Container>
  );
};

export { TermsAndConditions };
