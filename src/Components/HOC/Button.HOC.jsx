import { Box } from '@chakra-ui/react';
import React from 'react';

const ButtonHOC = (props) => {
  return (
    <Box
      as='button'
      bg={props.variant == 'dark' ? 'spinwash.500' : 'white'}
      p='0.4rem 1.2rem'
      color={props.variant == 'dark' ? 'white' : 'spinwash.500'}
      fontWeight={'600'}
      _hover={{
        transition: 'all 0.5s',
        transform: 'scale(1.02)',
        backgroundColor: `${props.variant} == 'dark' ?  white : #1B4D7A`,
        color: `${props.variant} == 'dark' ? #1B4D7A : white`,
      }}
      _active={{
        transition: 'all 0.5s',
        transform: 'scale(1.02)',
      }}
    >
      {props.children}
    </Box>
  );
};

export default ButtonHOC;
