import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ onSearch }) => {
 

  return (
      <InputGroup w={'90%'}  >
        <Input
        rounded={'full'}
        bg={'white'}
        color={'black'} 
        placeholder="Find your favorite products"
        _placeholder={{ color: 'gray.500' }}  
      />
        <InputRightElement>
        <IconButton
          _hover={{ bg: 'transparent !important' }}
          bg={'transparent'}
          rounded={'full'}
          color={'gray.500'}
          aria-label="Find your favorite products"
          icon={<SearchIcon />}
          type="submit"
        />
        </InputRightElement>
      </InputGroup>
  );
};

export default SearchBar;
