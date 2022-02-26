import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  MenuGroup,
  MenuDivider,
  Box,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signout } from '../../Helpers/auth';

const Profile = ({ userProfilePicture, profilePictureData }) => {
  const navigate = useNavigate();
  const [profilePicture, setprofilePicture] = useState(userProfilePicture);

  useEffect(() => {
    setprofilePicture(profilePicture);
  }, [profilePicture]);

  return (
    <Menu shadow='sm' rounded='0'>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
      >
        <Avatar
          showBorder
          borderColor={'white'}
          size={'md'}
          src={profilePicture}
        />
      </MenuButton>
      <MenuList bgColor='white' color='spinwash.500'>
        <MenuGroup title='Account'>
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
        <MenuDivider color='spinwash.500' />
        <MenuItem _hover={{ bgColor: 'spinwash.100' }} fontSize='md' px='1rem'>
          <Box
            as='button'
            onClick={() => {
              signout();
              navigate('/');
            }}
          >
            Logout
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
