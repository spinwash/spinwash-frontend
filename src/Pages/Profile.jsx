import { Container, Heading, Stack, Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ArrowButton from '../Components/HOC/ArrowButton';
import { EditProfile, UserProfile } from '../Components/Profile/Index';
import { isAuth } from '../Helpers/auth';

const Profile = () => {
  const { _id } = isAuth();
  const [editMode, setEditMode] = useState(false);
  const [Data, setData] = useState(isAuth());

  useEffect(() => {
    axios
      .get(`https://spinwash.herokuapp.com/api/user/${_id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id, editMode, setEditMode]);

  return (
    <Container maxW='8xl' py='3rem'>
      <Stack
        w='100%'
        justify={{ base: 'start', sm: 'space-between' }}
        align={{ base: 'start', sm: 'center' }}
        direction={{ base: 'column', sm: 'row' }}
      >
        <Heading fontSize={{ base: '4xl', md: '5xl' }}>Your Profile</Heading>
        <Box as='button' onClick={() => setEditMode(!editMode)}>
          <ArrowButton variant='dark'>
            {editMode ? 'Cancel' : 'Edit Profile'}
          </ArrowButton>
        </Box>
      </Stack>
      <Container
        overflow='hidden'
        maxW={'8xl'}
        fontSize={{ base: 'xs', md: 'md' }}
        my={{ base: '3rem', md: '4rem' }}
        display='flex'
        gap={{ base: '5rem', md: '6rem' }}
        flexDirection='column'
        p={{ base: '0', md: '2rem' }}
      >
        {editMode ? (
          <EditProfile
            data={Data}
            setEditMode={setEditMode}
            setData={setData}
          />
        ) : (
          <UserProfile data={Data} />
        )}
      </Container>
    </Container>
  );
};

export { Profile };
