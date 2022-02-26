import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
const ButtonHOC = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      display='flex'
      alignItems={'center'}
      justifyContent='space-between'
      gap='1rem'
      as='button'
      bg={props.variant === 'dark' ? 'spinwash.500' : 'white'}
      p='0.5rem 1.5rem'
      color={props.variant === 'dark' ? 'white' : 'spinwash.500'}
      fontWeight={'600'}
      fontSize={{ base: 'sm', md: 'md' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.children}
      <Box transform={hover && 'rotate(45deg)'} transition='all 0.5s'>
        <HiOutlineArrowRight size='20' />
      </Box>
    </Box>
  );
};

export default ButtonHOC;
