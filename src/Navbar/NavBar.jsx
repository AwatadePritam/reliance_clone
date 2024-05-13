import { Button, Flex, Image, Menu, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Images/logo.png'
import SearchBar from '../components/SearchBar'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Menus from './Menus'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions'

const NavBar = () => {
  const token = useSelector((store)=>store.token);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  useEffect(()=>{
      navigator('/login')
  },[token])

  return (
    
    <Flex  w={"100%"} bg={'#E42529'} direction={'column'} justifyContent={'center'} alignItems={'center'} >

        <Flex w={'98%'} direction={'column'} justifyContent={'center'} alignItems={'center'} >
          <Flex w={'100%'}  padding={'5px 5px'} justifyContent={'end'}  >
              <Flex gap={'5px'} color={'white'} pr={'10px'} >
                  <Text cursor={'pointer'}  fontSize={'small'}>Find a store   |</Text>
                  <Text cursor={'pointer'} fontSize={'small'}>Buying guides  |</Text>
                  <Text cursor={'pointer'} fontSize={'small'}>Contact us </Text>
              </Flex>
          </Flex>
          
          <Flex w={'100%'} padding={'5px 5px' }  >
              <Flex  w={'25%'} pl={'25px'} >
                  <Image src={logo}/>
              </Flex>
              <Flex  w={'45%'} alignItems={'center'} justifyContent={'center'} padding={'0px 20px'} >
                <SearchBar/>
              </Flex>
              <Flex w={'30%'} pr={'10px'}>
                  <Flex gap={'5px'} color={'white'} justifyContent={'right'} alignItems={'center'} w={'100%'}>
                      <Flex> <Text cursor={'pointer'}  fontSize={'small'}>Select your Pin Code   |</Text></Flex>

                      <Flex gap={'5px'} >
                        <Link to={'/cart'} >
                       <Flex gap={'5px'} >
                       <FaShoppingCart />
                        <Text cursor={'pointer'} fontSize={'small'}>Cart  |</Text>
                       </Flex>
                        </Link>
                        
                      </Flex>
                      <Flex  gap={'5px'}> 

                       {
                        !token && (
                          <Link to={'/login'}>
                          <Flex gap={'5px'}>
                          <FaUser />
                           <Text cursor={'pointer'} fontSize={'small'}>Login </Text>
                          </Flex>
                          </Link>
                        )
                       }

                       {
                        token && (
                          <Button colorScheme={'blue'} onClick={()=>{dispatch(logout())}} >Logout</Button>

                        )
                       }

                      </Flex>

                  </Flex>
              </Flex>
          </Flex>

        </Flex>

        <Flex w={'100%'}  justifyContent={'end'} bg={'#003380'}  >
             <Menus/>
          </Flex>

    </Flex>
    
  )
}

export default NavBar