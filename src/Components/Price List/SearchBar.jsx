import { Box, Center, HStack, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';

function SearchBar({ placeholder, dark, setItem, Data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = Data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <VStack w='100%'>
      <HStack
        background={dark ? 'spinwash.500' : 'spinwash.100'}
        className='searchInputs'
        w='100%'
      >
        <Input
          color={dark ? 'spinwash.100' : 'spinwash.500'}
          fontSize={{ base: 'md', md: 'xl' }}
          _placeholder={{ color: 'spinwash.200' }}
          _hover={{ border: '0px', outline: '0px' }}
          _focus={{ border: '0px', outline: '0px' }}
          _active={{ border: '0px', outline: '0px' }}
          border='0px'
          outline={'0px'}
          type='text'
          background={dark ? 'spinwash.500' : 'spinwash.100'}
          px={{ base: '1rem', md: '2rem' }}
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <Center
          w={{ base: '4rem', md: '6rem' }}
          h={{ base: '3rem', md: '4rem' }}
          color={dark ? 'spinwash.5100' : 'spinwash.100'}
          bg={dark ? 'spinwash.100' : 'spinwash.500'}
        >
          {filteredData.length === 0 ? (
            <RiSearchLine size={22} />
          ) : (
            <RiCloseLine id='clearBtn' size={28} onClick={clearInput} />
          )}
        </Center>
      </HStack>
      {filteredData.length != 0 && (
        <Box
          color='spinwash.500'
          background='white'
          className='dataResult'
          p='1rem 2rem'
          w='100%'
          maxH='20rem'
          h='fit-content'
          shadow='xl'
          overflow='scroll'
          sx={{
            '&::-webkit-scrollbar': {
              borderRadius: '0px',
              backgroundColor: `#1B4D7A`,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: `#1B4D7A`,
            },
          }}
        >
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Box
                w='100%'
                display='flex'
                alignItems='start'
                justifyContent={'space-between'}
                as='button'
                onClick={() => {
                  setItem(value.parentId);
                  clearInput();
                }}
                py='0.3rem'
                fontSize={{ base: 'md', md: 'xl' }}
              >
                <Box>{value.name}</Box> <Box>{value.price}</Box>
              </Box>
            );
          })}
        </Box>
      )}
    </VStack>
  );
}

export default SearchBar;
