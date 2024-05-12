import { Flex } from '@chakra-ui/react'
import React from 'react'
import SingleMenu from './SingleMenu'

const Menus = () => {
  return (
   <Flex w={'100%'} justifyContent={'center'} alignItems={'center'}>
       <Flex w={'90%'}>
        <SingleMenu/>
      </Flex> 
   </Flex>
  )
}

export default Menus