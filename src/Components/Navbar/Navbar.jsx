import React, { useState, useEffect } from 'react';
import Logo from '../Logos/Logo';
import LogoDark from '../Logos/LogoDark';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import ArrowButton from '../HOC/ArrowButton';
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  Modal,
  ModalOverlay,
  useDisclosure,
  Collapse,
  VStack,
  Center,
  Text,
  Stack,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react';
import Login from '../Authentication/Login';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Profile from './Profile';
import { isAuth } from '../../Helpers/auth';
import Lottie from 'react-lottie';
import { ArrowForwardIcon, Icon } from '@chakra-ui/icons';
import * as animationData from '../LottieFiles/lf30_editor_g9cdecsk.json';
import { motion } from 'framer-motion';
const MotionContainer = motion(Container);

const data = [
  {
    id: 'dryCleaning',
    key: '1',
    name: 'Dry Cleaning',
    text: 'A wide range of dry cleaning services',
  },
  {
    id: 'bedding',
    key: '4',
    name: 'Bedding',
    text: 'We make sure your bedding returns to you neat, smelling fresh and looking crispy. ',
  },
  {
    id: 'household',
    key: '5',
    name: 'Household',
    text: 'We clean an extensive range of household items such as cushion covers and rugs',
  },
  {
    id: 'shirts',
    key: '2',
    name: 'Shirts',
    text: 'We have different options of cleaning shirts',
  },
  {
    id: 'laundry',
    key: '3',
    name: 'Laundry',
    text: 'We have different options for laundry.',
  },
  {
    id: 'ironing',
    key: '6',
    name: 'Ironing',
    text: 'We iron a vast number of items such as shirts, trousers and bed sets',
  },
  {
    id: 'curtains',
    key: '7',
    name: 'Curtains',
    text: 'We can dry clean your clothes or alter them depending on your need',
  },
  {
    id: 'alterations',
    key: '11',
    name: 'Alterations',
    text: 'We also offer alteration and repair service',
  },
];

const menu = false;
const defaultOptionsLottie = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const MobileNav = ({ isAuth, navbarDark }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenMenu, onToggle: onToggleMenu } = useDisclosure();
  const profilePicture = isAuth()?.profilePicture;
  const navigate = useNavigate();

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const btnRef = React.useRef();
  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      zIndex='10'
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
      {isAuth() ? (
        <Box zIndex='10'>
          <Profile
            userProfilePicture={isAuth()?.profilePicture}
            profilePicture={profilePicture}
          />
        </Box>
      ) : (
        <Box as='button' onClick={onOpenModal}>
          <ArrowButton variant={{ navbarDark } ? 'dark' : 'light'}>
            Login
          </ArrowButton>
        </Box>
      )}
      <Modal isOpen={isOpenModal} size='full' onClose={onCloseModal} isCentered>
        <ModalOverlay />
        <Login closeModel={onCloseModal} />
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
          <DrawerHeader>
            <Box
              as='button'
              onClick={() => {
                navigate('/');
                onClose();
              }}
              fontWeight='500'
            >
              Spinwash
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <VStack
              fontSize={'2xl'}
              align='start'
              m=' 1rem 0.5rem'
              spacing='0.8rem'
              fontWeight={'500'}
            >
              <Stack w='full' spacing={4} onClick={onToggleMenu}>
                <Flex
                  py={2}
                  justify={'space-between'}
                  align={'center'}
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  <Text>Services</Text>
                  <Icon
                    as={ArrowForwardIcon}
                    transition={'all .25s ease-in-out'}
                    transform={isOpenMenu ? 'rotate(90deg)' : 'rotate(0deg)'}
                    w={6}
                    h={6}
                  />
                </Flex>
                <Collapse
                  in={isOpenMenu}
                  animateOpacity
                  style={{ marginTop: '0!important' }}
                >
                  <Stack
                    my={2}
                    pl={4}
                    align={'start'}
                    fontSize='lg'
                    fontWeight={'400'}
                  >
                    {data.map((child) => (
                      <Box
                        as='button'
                        onClick={() => {
                          navigate(`service/${child.id}`);
                          onClose();
                        }}
                      >
                        {child.name}
                      </Box>
                    ))}
                  </Stack>
                </Collapse>
              </Stack>
              <Box
                w='full'
                as='button'
                onClick={() => {
                  navigate('/pricing');
                  onClose();
                }}
              >
                <Text
                  _hover={{ color: 'spinwash.400', transition: 'all 0.3s' }}
                  textAlign='start'
                >
                  Pricing
                </Text>
              </Box>
              <Box
                w='full'
                as='button'
                onClick={() => {
                  navigate('/areas');
                  onClose();
                }}
              >
                <Text
                  _hover={{ color: 'spinwash.400', transition: 'all 0.3s' }}
                  textAlign='start'
                >
                  Areas
                </Text>
              </Box>
              <Box
                w='full'
                as='button'
                onClick={() => {
                  navigate('/about');
                  onClose();
                }}
              >
                <Text
                  _hover={{ color: 'spinwash.400', transition: 'all 0.3s' }}
                  textAlign='start'
                >
                  About
                </Text>
              </Box>
            </VStack>
          </DrawerBody>
          <DrawerFooter px='2rem'>
            {navbarDark ? <Logo /> : <LogoDark />}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </MotionContainer>
  );
};
const DeskNavbar = ({ isAuth, navbarDark }) => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      zIndex='10'
      maxW='full'
      pt={'1rem'}
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
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as='a'
                  _hover={{
                    textDecoration: 'none',
                    color: 'spinwash.500',
                  }}
                >
                  Services
                </Box>
              </PopoverTrigger>
              <PopoverContent
                my='1rem'
                border={0}
                boxShadow={'2xl'}
                bg={'white'}
                p={4}
                rounded={'0'}
                minW={'md'}
              >
                <Stack>
                  {data.map((service) => (
                    <Link to={`/service/${service.id}`}>
                      <Box
                        color='spinwash.500'
                        role={'group'}
                        display={'block'}
                        p={3}
                        rounded={'0'}
                        _hover={{
                          bg: 'spinwash.100',
                        }}
                      >
                        <Stack direction={'row'} align={'center'}>
                          <Box>
                            <Text
                              transition={'all .3s ease'}
                              _groupHover={{ color: 'spinwash.500' }}
                              fontSize='lg'
                              fontWeight={400}
                            >
                              {service.name}
                            </Text>
                            <Text
                              fontWeight={300}
                              fontSize={'sm'}
                              color='gray.400'
                            >
                              {service.text}
                            </Text>
                          </Box>
                          <Flex
                            transition={'all .3s ease'}
                            transform={'translateX(-10px)'}
                            opacity={0}
                            _groupHover={{
                              opacity: '100%',
                              transform: 'translateX(0)',
                            }}
                            justify={'flex-end'}
                            align={'center'}
                            flex={1}
                          >
                            <Icon
                              color={'spinwash.500'}
                              w={5}
                              h={5}
                              as={ArrowForwardIcon}
                            />
                          </Flex>
                        </Stack>
                      </Box>
                    </Link>
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>
          </Box>
          <NavLink to='/pricing'>
            <Text _hover={{ color: 'spinwash.400', transition: 'all 0.3s' }}>
              Pricing
            </Text>
          </NavLink>
          <NavLink to='/areas'>
            <Text _hover={{ color: 'spinwash.400', transition: 'all 0.3s' }}>
              Areas
            </Text>
          </NavLink>
          <NavLink to='/about'>
            <Text _hover={{ color: 'spinwash.400', transition: 'all 0.3s' }}>
              About
            </Text>
          </NavLink>
          {isAuth() ? (
            <Profile userProfilePicture={isAuth()?.profilePicture} />
          ) : (
            <Box as='button' onClick={onOpenModal}>
              <ArrowButton variant={{ navbarDark } ? 'dark' : 'light'}>
                Login
              </ArrowButton>
            </Box>
          )}
          <Modal
            isOpen={isOpenModal}
            size='xl'
            onClose={onCloseModal}
            isCentered
          >
            <ModalOverlay />
            <Login closeModel={onCloseModal} />
          </Modal>
        </HStack>
      </Center>
    </MotionContainer>
  );
};

const Navbar = () => {
  const [navbarDark, setNavbarDark] = useState(1);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setNavbarDark(0);
    } else if (pathname === '/pricing') {
      setNavbarDark(0);
    } else if (pathname.split('/')[1] === 'service') {
      setNavbarDark(0);
    } else {
      setNavbarDark(1);
    }
  }, [navbarDark, pathname, isAuth]);

  return (
    <>
      <MobileNav isAuth={isAuth} navbarDark={navbarDark} />
      <DeskNavbar isAuth={isAuth} navbarDark={navbarDark} />
    </>
  );
};

export default Navbar;
