import { Box, Input, Image, Text, Center, FormLabel } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { TiCamera } from 'react-icons/ti';
import { useDropzone } from 'react-dropzone';
//import { isAuth } from '../../Helpers/auth';

const ChangeProfilePicture = ({ sendDataToParent }) => {
  const [image, setImage] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const acceptedFile = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(acceptedFile);
  });

  useEffect(() => {
    sendDataToParent(image);
  }, [image, sendDataToParent]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/png',
    multiple: false,
  });

  return (
    <Box
      maxW='fit-content'
      border='2px solid'
      bg={'transparent'}
      rounded={'full'}
    >
      <FormLabel
        for='file'
        position={'absolute'}
        color={'white'}
        w={{ base: '6rem', md: '8rem' }}
        h={{ base: '6rem', md: '8rem' }}
        rounded={'full'}
        bg={'#ffffff70'}
        opacity={'0.5'}
        _hover={{
          opacity: 1,
          transition: 'all .3s ease',
          cursor: 'pointer',
        }}
        {...getRootProps()}
      >
        <Input {...getInputProps()} />{' '}
        <Center
          w={{ base: '6rem', md: '8rem' }}
          h={{ base: '6rem', md: '8rem' }}
        >
          <TiCamera size={40} color='#1B4D7A' />
        </Center>
      </FormLabel>
      <Image
        overflow='hidden'
        border='0px'
        rounded={'full'}
        w={{ base: '6rem', md: '8rem' }}
        h={{ base: '6rem', md: '8rem' }}
        fit={'cover'}
        src={image}
      />
    </Box>
  );
};

export default ChangeProfilePicture;
