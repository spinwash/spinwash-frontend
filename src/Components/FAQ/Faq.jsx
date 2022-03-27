import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Container,
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
                    Is there a shop where I can drop or collect my clothes at?
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
                No, there isn’t a shop where you can drop or collect your
                clothes. We will collect and drop off your clothes.
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
                    Which areas do you currently operate in?
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
                You can check which areas we cover in the section labelled
                ‘Areas Covered’.
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
                    What days and time do you operate in?
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
                We operate from 7:00am to 8:00pm between Monday to Friday and
                from 8:00am to 6:00pm on Saturdays.
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
                    How does this whole process work?
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
                Firstly you place an order with us through our, once we have
                received your order one of our drivers will collect the clothes
                from your address. After that we clean your clothes and drop
                them back off to you.
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
                    How do I pay?
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
                Once we have collected your clothes we will send you an invoice
                on the email you provide us with which will have a payment link
                you can follow.
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
                    How long do you require for suede, fur & leather cleaning?
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
                We require a minimum of 7 working days to clean suede, fur or
                leather items.
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
                    How do I let you know any requirements I have for my order/
                    items?
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
                You can let us know in the additional information section when
                placing your order or you can let our driver know when he
                collects the order.
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
                    Do I need to do anything before my order?
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
                Yes, remove any collar stiffeners and empty the pockets of the
                items.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Faq;
