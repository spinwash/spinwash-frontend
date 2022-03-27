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
} from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signout } from '../../Helpers/auth';

const Profile = ({ userProfilePicture }) => {
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
          >
            <Box
              as='button'
              fontWeight={'500'}
              onClick={() => {
                signout();
                navigate('/');
              }}
            >
              Logout
            </Box>
            <Icon
              as={ArrowForwardIcon}
              transition={'all .25s ease-in-out'}
              w={5}
              h={5}
              _groupHover={{ transform: 'translateX(8px)' }}
            />
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
