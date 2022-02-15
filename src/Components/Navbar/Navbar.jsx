import React, { useState, useEffect } from 'react';
import Logo from '../Logos/Logo';
import LogoDark from '../Logos/LogoDark';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import ButtonHOC from '../HOC/Button.HOC';
import {
  HStack,
  Container,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Modal,
  ModalOverlay,
  useDisclosure,
  VStack,
  Center,
  Text,
  Box,
} from '@chakra-ui/react';
import Login from '../Authentication/Login';
import { useLocation } from 'react-router-dom';

const MobileNav = () => {
  const [navbarDark, setNavbarDark] = useState(1);
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (pathname === '/') {
      setNavbarDark(0);
    }
    if (pathname === '/about') {
      setNavbarDark(0);
    }
    if (pathname === '/order') {
      setNavbarDark(0);
    }
  }, [pathname]);
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const btnRef = React.useRef();
  return (
    <Container
      bg={navbarDark ? 'white' : 'spinwash.300'}
      display={{ base: 'flex', lg: 'none' }}
      maxW='full'
      h='4rem'
      alignItems={'center'}
      justifyContent='space-between'
    >
      <Box as='button' ref={btnRef} onClick={onOpen}>
        <HiOutlineMenuAlt2
          color={navbarDark ? '#1B4D7A' : 'white'}
          size='2rem'
        />
      </Box>
      <Center display={{ base: 'none', sm: 'flex' }}>
        {navbarDark ? <LogoDark /> : <Logo />}
      </Center>
      <Box as='button' onClick={onOpenModal}>
        <ButtonHOC variant={{ navbarDark } ? 'dark' : 'light'}>Login</ButtonHOC>
      </Box>
      <Modal isOpen={isOpenModal} size='full' onClose={onCloseModal} isCentered>
        <ModalOverlay />
        <Login />
      </Modal>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={navbarDark ? 'spinwash.500' : 'white'}
          color={navbarDark ? 'white' : 'spinwash.500'}
        >
          <DrawerCloseButton size={'lg'} />
          <DrawerHeader>Spin Wash</DrawerHeader>
          <DrawerBody>
            <VStack
              fontSize={'2xl'}
              align='start'
              m=' 1rem 0.5rem'
              spacing='0.8rem'
              fontWeight={'500'}
            >
              <Text>Order</Text>
              <Text>Service</Text>
              <Text>Areas</Text>
              <Text>Pricing</Text>
            </VStack>
          </DrawerBody>
          <DrawerFooter>{navbarDark ? <Logo /> : <LogoDark />}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};
const DeskNavbar = () => {
  const [navbarDark, setNavbarDark] = useState(1);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setNavbarDark(0);
    }
    if (pathname === '/about') {
      setNavbarDark(0);
    }
    if (pathname === '/order') {
      setNavbarDark(0);
    }
  }, [pathname]);

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  return (
    <Container
      maxW='full'
      bg={navbarDark ? 'white' : 'spinwash.300'}
      display={{ base: 'none', lg: 'flex' }}
      flexDirection={'row'}
      alignItems='center'
    >
      <Center mx='auto' justifyContent={'space-between'} maxW='8xl' w='full'>
        {navbarDark ? <LogoDark /> : <Logo />}
        <HStack
          fontSize={'xl'}
          align='start'
          m=' 1rem'
          spacing='2rem'
          fontWeight={'500'}
          color={navbarDark ? 'spinwash.500' : 'white'}
          alignItems={'center'}
        >
          <Text>Order</Text>
          <Text>Service</Text>
          <Text>Areas</Text>
          <Text>Pricing</Text>
          <Box as='button' onClick={onOpenModal}>
            <ButtonHOC variant={{ navbarDark } ? 'dark' : 'light'}>
              Login
            </ButtonHOC>
          </Box>
          <Modal
            isOpen={isOpenModal}
            size='xl'
            onClose={onCloseModal}
            isCentered
          >
            <ModalOverlay />
            <Login />
          </Modal>
        </HStack>
      </Center>
    </Container>
  );
};

const Navbar = () => {
  return (
    <>
      <MobileNav />
      <DeskNavbar />
    </>
  );
};

export default Navbar;
