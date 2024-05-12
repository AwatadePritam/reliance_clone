import { Flex , Text ,Image } from '@chakra-ui/react'
import React from 'react'
import googlePlay from '../Images/google_play_store.webp'
import iPhonePlay from '../Images/ios_app_store_icon.webp'
import { footerLinks } from '../data/footerLinks'
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";



const Footer = () => {

  const f_section_one = footerLinks.filter((item)=>item.category === 'PRODUCT CATEGORIES')
  const f_section_two = footerLinks.filter((item)=>item.category === 'SITE INFO')
  const f_section_three = footerLinks.filter((item)=>item.category === 'RESOURCE CENTRE')
  const f_section_four = footerLinks.filter((item)=>item.category === 'POLICIES')

  return (
    <Flex w={"100%"} bg={'#003380'} direction={'column'} color={'white'} pt={'20px'}>
      <Flex direction={'row'} alignItems={'start'} justifyContent={'center'} >
        <Flex p={'0px 24px'}  w={'24%'}  direction={'column'} >
          <Text fontWeight={'700'} >PRODUCT CATEGORIES</Text>
          <Flex justifyContent={'start'} alignItems={'left'} direction={'column'}  gap={'5px'}>
            {
              f_section_one.map((item)=>(
                  <Text key={item.id}>{item.linkName}</Text>
              )
              )
            }
          </Flex>
          <Flex direction={'column'} p={'10px 0px'}> 
           <Text fontWeight={'700'}>FOLLOW US</Text>
            <Flex gap={'10px'}>
            <AiFillFacebook />
            <FaTwitter />
            <TfiYoutube />
            </Flex>
          </Flex>
        </Flex>
        <Flex   p={'0px 24px'}  w={'28%'} direction={'column'} justifyContent={'space-between'} gap={'130px'}>
          
           <Flex direction={'column'}>
           <Text fontWeight={'700'} >SITE INFO</Text>
            <Flex justifyContent={'start'} alignItems={'left'} direction={'column'} gap={'5px'}>
            {
              f_section_two.map((item)=>(
                  <Text key={item.id}>{item.linkName}</Text>
              )
              )
            }
          </Flex>
           </Flex>
          
          <Flex  direction={'column'} w={'100%'} gap={'10px'}>
            <Flex >
              <Text fontWeight={'700'} fontSize={'15px'}>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</Text>
            </Flex>
            <Flex direction={'row'} w={'100%'} gap={'8px'}>
              <Flex  >
                  <Image src={googlePlay}  boxSize='42px' w={'125px'}  />
              </Flex>
              <Flex >
                 <Image src={iPhonePlay} boxSize='42px' w={'125px'} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex  p={'0px 24px'} w={'22%'}direction={'column'} >
        <Text fontWeight={'700'}>PRODUCT CATEGORIES</Text>
          <Flex justifyContent={'start'} alignItems={'left'} direction={'column'} gap={'5px'}>
            {
              f_section_three.map((item)=>(
                  <Text key={item.id}>{item.linkName}</Text>
              )
              )
            }
          </Flex>
        </Flex>
        <Flex  p={'0px 24px'}  w={'22%'} direction={'column'} >
        <Text fontWeight={'700'}>PRODUCT CATEGORIES</Text>
          <Flex justifyContent={'start'} alignItems={'left'} direction={'column'} gap={'5px'}>
            {
              f_section_four.map((item)=>(
                  <Text key={item.id}>{item.linkName}</Text>
              )
              )
            }
          </Flex>
        </Flex>
      </Flex>
      <Flex  w={'100%'} direction={'column'} alignItems={'center'} p={'20px 0px'} pb={'5px'}>
        <Flex >
          <Text fontSize={'14px'} fontWeight={'500'} textDecoration={'underline'} textUnderlineOffset={'5px'} color={'white'} p={'20px 0px'}>Disclaimer</Text>
        </Flex >
          <Flex w={'100%'} alignItems={'center'} justifyContent={'center'} padding={'0px 50px'} borderBottom="1px solid gray" textAlign={'center'}>
            <Text fontSize={'14px'} fontWeight={'500'} color={'white'} p={'20px 0px'}>
            Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
            </Text>
          </Flex>
        <Flex fontSize={'14px'} fontWeight={'500'} color={'white'} padding={'5px 0px'} p={'20px 0px'} pb={'5px'}  > 
          © 2024 Reliance Digital. All Rights Reserved.
          </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer