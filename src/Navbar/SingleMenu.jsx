import React from 'react'
import {ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'

const SingleMenu = () => {
  return (
    <Menu>
  <MenuButton as={Button}rounded={'none'}   color={'white'} rightIcon={<ChevronDownIcon />} variant={'ghost'} _hover={{bg:'#E42529'}} >
    MOBILES & TABLETS
  </MenuButton>


  <MenuButton as={Button}rounded={'none'}  color={'white'} rightIcon={<ChevronDownIcon />} variant={'ghost'} _hover={{bg:'#E42529'}} >
    TELEVISIONS
  </MenuButton>
  

  <MenuButton as={Button}rounded={'none'}  color={'white'} rightIcon={<ChevronDownIcon />} variant={'ghost'} _hover={{bg:'#E42529'}} >
    AUDIO
  </MenuButton>
  

  <MenuButton as={Button}rounded={'none'}  color={'white'} rightIcon={<ChevronDownIcon />} variant={'ghost'} _hover={{bg:'#E42529'}} >
    HOME APPLIANCES
  </MenuButton>
  

  <MenuButton as={Button}rounded={'none'}  color={'white'} rightIcon={<ChevronDownIcon />} variant={'ghost'} _hover={{bg:'#E42529'}} >
    COMPUTERS
  </MenuButton>
  

  <MenuButton as={Button}rounded={'none'}  color={'white'} rightIcon={<ChevronDownIcon />} variant={'ghost'} _hover={{bg:'#E42529'}} >
    CAMERAS
  </MenuButton>


  <MenuButton as={Button}rounded={'none'}  color={'white'} rightIcon={<ChevronDownIcon />} variant={'ghost'} _hover={{bg:'#E42529'}} >
    KITCHEN APPLIANCES
  </MenuButton>
  

  <MenuButton as={Button}rounded={'none'}  color={'white'} rightIcon={<ChevronDownIcon />} variant={'ghost'} _hover={{bg:'#E42529'}} >
    ACCESSORIES
  </MenuButton>
  
</Menu>
  )
}

export default SingleMenu