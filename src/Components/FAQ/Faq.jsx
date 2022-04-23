import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Container,
  Box,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  Stack,
  Text,
  VStack,
  Button,
  Input,
  FormControl,
  Textarea,
  Wrap,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ArrowButton from '../HOC/ArrowButton';
import axios from 'axios';

const MotionContainer = motion(Container);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 40 },
};

const AlertPop = (props) => {
  return (
    <Alert status='error'>
      <AlertIcon color={'red.400'} />
      <AlertTitle mr={4} textColor={'red.400'} fontWeight={'500'}>
        {props.title}
      </AlertTitle>
    </Alert>
  );
};
const Faq = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [loader, setLoader] = useState(false);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoader(true);
    axios
      .post(`https://spinwash.herokuapp.com/api/contactUS`, data)
      .then((res) => {
        toast({
          title: res.data.message,
          status: 'success',
          duration: 3000,
        });
        reset();
        setLoader(false);
      })
      .catch((err) => {
        toast({
          title: 'Error occurred',
          status: 'error',
          duration: 3000,
        });
        setLoader(false);
      });
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionContainer
      animate={controls}
      variants={variant}
      initial='hidden'
      maxW='7xl'
      py={{ base: '4rem', md: '8rem' }}
    >
      <Heading
        ref={ref}
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
                Firstly you place an order with us through our website, once we
                have received your order one of our drivers will collect your
                items from your address. After that we clean your clothes and
                drop them back off to you at your chosen time.
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
                    How long do you require for fur, leather, suede cleaning?
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
                We require a minimum of 5 working days to clean fur, leather and
                suede items.
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
      <VStack
        px={{ base: '1rem', md: '0' }}
        w='full'
        mt={{ base: '5rem', md: '9rem' }}
        // maxW={'fit-content'}
        maxW='3xl'
        alignItems={{ base: 'start', md: 'center' }}
        spacing='1rem'
        mx='auto'
        //  p={{ base: '2rem', md: '2rem 4rem' }}
      >
        <Heading
          textAlign={{ base: 'start', md: 'center' }}
          fontWeight={'500'}
          fontSize={{ base: 'xl', md: '3xl' }}
        >
          Contact US
        </Heading>
        <Text
          textAlign={{ base: 'start', md: 'center' }}
          fontSize={{ base: 'sm', md: 'lg' }}
          maxW='32rem'
        >
          Feel free to talk to us if you have any questions. Just fill the form
          and we will get in touch with you shortly
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            mx='auto'
            alignSelf={'center'}
            fontSize={{ base: 'sm', md: 'lg' }}
            minW={{ base: '16rem', md: '28rem' }}
            alignItems={'start'}
          >
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: '0.4rem', md: '2rem' }}
              p='0'
            >
              <FormControl w='full' isRequired>
                <Input
                  _hover={{
                    borderBottom: '2px solid #1B4D7A',
                  }}
                  //outline='1px solid #1B4D7A'
                  borderBottom={'2px solid #1B4D7A'}
                  mb={'1rem'}
                  borderRadius={'0'}
                  bg={'white'}
                  px='0.5rem'
                  h={{ base: '3rem', md: '3.6rem' }}
                  size={{ base: 'sm', md: 'lg' }}
                  placeholder='Name'
                  _placeholder={{ color: 'gray.400' }}
                  {...register('name', {
                    required: 'Please enter your name',
                  })}
                />
                {errors.name && <AlertPop title={errors.name.message} />}
              </FormControl>
              <FormControl w='full' isRequired>
                <Input
                  _hover={{
                    borderBottom: '2px solid #1B4D7A',
                  }}
                  //outline='1px solid #1B4D7A'
                  borderBottom={'2px solid #1B4D7A'}
                  mb={'1rem'}
                  borderRadius={'0'}
                  bg={'white'}
                  px='0.5rem'
                  h={{ base: '3rem', md: '3.6rem' }}
                  size={{ base: 'sm', md: 'lg' }}
                  placeholder='Email'
                  _placeholder={{ color: 'gray.400' }}
                  {...register('email', {
                    required: 'Please enter registered email',
                    pattern: {
                      value:
                        /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Enter a valid email',
                    },
                  })}
                />
                {errors.email && <AlertPop title={errors.email.message} />}
              </FormControl>
            </Stack>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: '0.4rem', md: '2rem' }}
              p='0'
            >
              <FormControl
                pr={{ base: '1.5rem', md: '0rem' }}
                w='full'
                isRequired
              >
                <Textarea
                  // outline='1px solid #1B4D7A'
                  _hover={{
                    borderBottom: '2px solid #1B4D7A',
                  }}
                  //outline='1px solid #1B4D7A'
                  borderBottom={'2px solid #1B4D7A'}
                  borderRadius={'0'}
                  bg={'white'}
                  px='0.5rem'
                  h={{ base: '3rem', md: '3.6rem' }}
                  size={{ base: 'sm', md: 'lg' }}
                  placeholder='Message'
                  _placeholder={{ color: 'gray.400' }}
                  {...register('message', {
                    required: 'Message can not be empty',
                  })}
                />
              </FormControl>
              <Button
                pt={{ base: '3rem', md: '0rem' }}
                pl={{ base: '0rem', md: '0.5rem' }}
                isLoading={loader}
                variant={'unstyled'}
                display='flex'
                justifyContent={'center'}
                alignItems='center'
                width='fit-content'
                alignSelf={{ base: 'start', md: 'end' }}
              >
                <ArrowButton variant='dark'>Send Message</ArrowButton>
              </Button>
            </Stack>
          </VStack>
        </form>
      </VStack>
    </MotionContainer>
  );
};

export default Faq;
