import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Menu shadow='xl'>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
      >
        <Avatar
          showBorder
          size={'md'}
          src='https://avatars.githubusercontent.com/u/74172466?v=4'
        />
      </MenuButton>
      <MenuList color='spinwash.500'>
        <MenuGroup title='Account'>
          <MenuItem fontSize='md' px='2rem'>
            <Link to='/profile'>Profile</Link>
          </MenuItem>
          <MenuItem fontSize='md' px='2rem'>
            <Link to='/orders'>Orders</Link>
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem fontSize='md' px='1rem'>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
