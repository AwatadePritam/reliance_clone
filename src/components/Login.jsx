import { Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, updateFormData } from '../redux/actions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
     const dispatch = useDispatch()
     const email = useSelector((store)=>store.email)
     const password = useSelector((store)=>store.password)
     const navigator = useNavigate()
     const token = useSelector((store)=>store.token)

     useEffect(()=>{
      if(token){
        navigator('/')
        
      }
     },[token])

  return (
    <Flex w={"100%"} justifyContent={'center'} alignItems={'center'} p={'20px'}  >
     
    <Flex w={'98%'} justifyContent={'center'} alignItems={'center'} gap={'20px'} direction={['column-reverse','column-reverse','column-reverse','row']}>
      <Flex bg={'red'} w={'70%'} >
            <Image src={'https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg'}/>
      </Flex>

      <Flex w={"30%"} direction={'column'} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" p={'10px'}  >
        <Flex gap={'8px'}>
        <Text>
          <Text color={'#003380'}  fontSize={'16px'} fontWeight={'500'} as={"span"} >Email</Text> : eve.holt@reqres.in
        </Text>
        <Text>
        <Text color={'#003380'}  fontSize={'16px'} fontWeight={'500'}as={"span"} >Password</Text> : cityslicka
        </Text>
        </Flex>
        <Text  p={'10px 0px'}  color={'#000000'} fontSize={'17px'} fontWeight={'600'} bg={'#F9FAFD'}>Login / Register</Text>
       <Flex direction={'column'} gap={'20px'}>
       <Input onChange={(e)=>{dispatch(updateFormData(e.target.value,e.target.name))}} name='email'  placeholder='Enter Your Email' />
        <Input onChange={(e)=>{dispatch(updateFormData(e.target.value,e.target.name))}}   placeholder='Enter Your Password' name='password' />
        <Button onClick={()=>{dispatch(login({email:email, password:password}))}}   bg={'#D32F2F'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={'600'} >Proceed</Button>
       </Flex>

      </Flex>
    </Flex>
   </Flex>
    
  )
}

export default Login