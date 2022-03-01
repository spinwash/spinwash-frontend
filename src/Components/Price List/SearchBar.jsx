import { Box, Center, HStack, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';

function SearchBar({ placeholder, data, dark }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
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
    <Box w='100%'>
      <HStack
        background={dark ? 'spinwash.500' : 'spinwash.100'}
        className='searchInputs'
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
            <RiSearchLine size={20} />
          ) : (
            <RiCloseLine id='clearBtn' size={20} onClick={clearInput} />
          )}
        </Center>
      </HStack>
      {filteredData.length != 0 && (
        <Box className='dataResult'>
          {filteredData.slice(0, 15).map((value, key) => {
            return <Text>{value.title} </Text>;
          })}
        </Box>
      )}
    </Box>
  );
}

export default SearchBar;
