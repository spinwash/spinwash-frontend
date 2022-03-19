import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Container,
  Text,
  Box,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const Faq = () => {
  return (
    <Container maxW='7xl' py={{ base: '4rem', md: '8rem' }}>
      <Heading
        pb={{ base: '1rem', md: '2rem' }}
        textAlign={'center'}
        fontWeight={'500'}
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple mx='auto' maxW='2xl'>
        <AccordionItem my='1rem' border='0'>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    fontWeight={'500'}
                    fontSize={{ base: 'sm', md: 'lg' }}
                    flex='1'
                    textAlign='left'
                    pr={'1rem'}
                  >
                    quis nostrud exercitation ?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize={{ base: 'xs', md: 'md' }}
                fontWeight={'300'}
                pb={4}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem my='1rem' border='0'>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    fontWeight={'500'}
                    fontSize={{ base: 'sm', md: 'lg' }}
                    flex='1'
                    textAlign='left'
                    pr={'1rem'}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, ?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize={{ base: 'xs', md: 'md' }}
                fontWeight={'300'}
                pb={4}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem my='1rem' border='0'>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    fontWeight={'500'}
                    fontSize={{ base: 'sm', md: 'lg' }}
                    flex='1'
                    textAlign='left'
                    pr={'1rem'}
                  >
                    Lorem ipsum dolor sit amet, consectetur ut aliquam, ?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize={{ base: 'xs', md: 'md' }}
                fontWeight={'300'}
                pb={4}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem my='1rem' border='0'>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    fontWeight={'500'}
                    fontSize={{ base: 'sm', md: 'lg' }}
                    flex='1'
                    textAlign='left'
                    pr={'1rem'}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize={{ base: 'xs', md: 'md' }}
                fontWeight={'300'}
                pb={4}
              >
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem my='1rem' border='0'>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    fontWeight={'500'}
                    fontSize={{ base: 'sm', md: 'lg' }}
                    flex='1'
                    textAlign='left'
                    pr={'1rem'}
                  >
                    amet, consectetur ut aliquam, ?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize={{ base: 'xs', md: 'md' }}
                fontWeight={'300'}
                pb={4}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Faq;
