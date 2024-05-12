import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import { Flex, useColorMode } from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes'


function App() {
  const {colorMode,toggleColorMode} = useColorMode()

   

  console.log('rendering...')
  console.log(colorMode)
  
  
         
  return (
    <Flex w={"100%"} direction={'column'}  >
    
    <AllRoutes/>
   </Flex>
  )
}

export default App
