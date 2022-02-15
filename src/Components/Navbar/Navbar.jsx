import React from 'react';
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

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const btnRef = React.useRef();
  return (
    <Container
      bg='spinwash.300'
      display={{ base: 'flex', lg: 'none' }}
      maxW='full'
      h='4rem'
      alignItems={'center'}
      justifyContent='space-between'
    >
      <Box as='button' ref={btnRef} onClick={onOpen}>
        <HiOutlineMenuAlt2 color='white' size='2rem' />
      </Box>
      <Center display={{ base: 'none', sm: 'flex' }}>
        <Logo />
      </Center>
      <Box as='button' onClick={onOpenModal}>
        <ButtonHOC variant='light'>Login</ButtonHOC>
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
        <DrawerContent backgroundColor='white'>
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
          <DrawerFooter>
            <LogoDark />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};
const DeskNavbar = () => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  return (
    <Container
      maxW='full'
      bg='spinwash.300'
      display={{ base: 'none', lg: 'flex' }}
      flexDirection={'row'}
      alignItems='center'
    >
      <Center mx='auto' justifyContent={'space-between'} maxW='8xl' w='full'>
        <Logo />
        <HStack
          fontSize={'xl'}
          align='start'
          m=' 1rem'
          spacing='2rem'
          fontWeight={'500'}
          color='white'
          alignItems={'center'}
        >
          <Text>Order</Text>
          <Text>Service</Text>
          <Text>Areas</Text>
          <Text>Pricing</Text>
          <Box as='button' onClick={onOpenModal}>
            <ButtonHOC variant='dark'>Login</ButtonHOC>
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
