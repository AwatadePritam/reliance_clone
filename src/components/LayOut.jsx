import React from 'react'
import NavBar from '../Navbar/NavBar'
import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import AddToCart from './SingleProduct/Cart'

const LayOut = () => {
  return (
    
    <Flex w={"100vw"}   direction={'column'}  >
      <NavBar/>




      <Flex w={'100%'} >
        <Outlet/>
      </Flex>
       
       
       
       
        <Footer/>

    </Flex>
  )
}

export default LayOut