import { ArrowForwardIcon, Icon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  MenuGroup,
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signout } from '../../Helpers/auth';

const Profile = ({ userProfilePicture }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();

  return (
    <Menu shadow='sm' rounded='0'>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
        display={'flex'}
        flexDirection={'column'}
      >
        <Avatar
          showBorder
          borderColor={'white'}
          size={'md'}
          src={userProfilePicture}
        />
      </MenuButton>

      <MenuList
        border='0px'
        outline='0px'
        rounded='0'
        shadow='2xl'
        bgColor='white'
        color='spinwash.500'
      >
        <MenuGroup fontSize='lg' fontWeight={'500'} title='Account'>
          <MenuItem
            _hover={{ bgColor: 'spinwash.100' }}
            fontSize='md'
            px='2rem'
          >
            <Link to='/'>Home</Link>
          </MenuItem>
          <MenuItem
            _hover={{ bgColor: 'spinwash.100' }}
            fontSize='md'
            px='2rem'
          >
            <Link to='/profile'>Profile</Link>
          </MenuItem>
          <MenuItem
            _hover={{ bgColor: 'spinwash.100' }}
            fontSize='md'
            px='2rem'
          >
            <Link to='/orders'>Orders</Link>
          </MenuItem>
        </MenuGroup>
        <MenuItem _hover={{ bgColor: 'spinwash.100' }} fontSize='md' px='1rem'>
          <Box
            w='full'
            role='group'
            display='flex'
            justifyContent={'space-between'}
            alignItems='center'
            flexDirection={'row'}
            as='button'
            onClick={onOpen}
          >
            <Box fontWeight={'500'}>Log out</Box>
            <Icon
              as={ArrowForwardIcon}
              transition={'all .25s ease-in-out'}
              w={5}
              h={5}
              _groupHover={{ transform: 'translateX(8px)' }}
            />
          </Box>
        </MenuItem>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent
            bg='white'
            maxW='22rem'
            m='1rem'
            borderRadius={'0'}
          >
            <AlertDialogHeader>Log out</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>Are you sure you want to Log out</AlertDialogBody>
            <AlertDialogFooter>
              <Button
                variant={'unstyled'}
                bgColor={'gray.100'}
                rounded='0'
                p='0rem 1.4rem'
                ref={cancelRef}
                onClick={onClose}
              >
                No
              </Button>
              <Button
                variant={'unstyled'}
                border='2px solid'
                borderColor={'spinwash.500'}
                bgColor='spinwash.500'
                color='white'
                rounded='0'
                p='0rem 1.4rem'
                ml={3}
                onClick={() => {
                  signout();
                  onClose();
                  navigate('/');
                }}
              >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </MenuList>
    </Menu>
  );
};

export default Profile;
