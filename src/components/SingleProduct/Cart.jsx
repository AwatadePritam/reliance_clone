import { Box, Button, Flex, Image, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { PiCaretDownBold } from "react-icons/pi";
import { Input } from '@chakra-ui/react'
import SingleCartItem from '../SingleCartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartData = useSelector((store)=>store.cartData)
    const itemCount = cartData.length;

    const totalPriceOfCart = cartData.reduce((totalPrice,item) => totalPrice+item.productData.price.value, 0);
  return (
        <Flex bg={'#F5F7F7'} w={'100%'} alignItems={'center'} justifyContent={'center'} >


       <Flex bg={'#F5F7F7'} w={'90%'} pt={'20px'} gap={'50px'} direction={['column','column','column','row']}  >

           <Flex  direction={'column'} w={['90%','90%','90%','60%']} gap={'10px'} >
                <Flex justifyContent={'space-between'} direction={'row'} p={'15px 12px'} border={'1px solid #E0E0E1'} rounded={'4px'} bg={'white'}>
                    <Text color={'#000000'} fontSize={'16px'} fontWeight={'600'} >My Cart <Text as={'span'}> ({itemCount} Items)</Text></Text>
                    <Text color={'#333333'} fontSize={'13px'} fontWeight={'500'} >Shipping to:  411001</Text>
                </Flex>

                <Flex w={'100%'} direction={'column'}>
                   {
                    cartData.length > 0 && (
                        cartData.map((cartItem,index)=>(
                            <SingleCartItem key={index} cartItem={cartItem} />
                        ))
                    )
                   }
                </Flex>

                
            </Flex>




            <Flex  direction={'column'} w={['90%','90%','90%','40%']} p={'0px 40px'}  >
                <Flex direction={'column'} gap={'20px'}  >
                    <Flex w={'100%'} alignItems={'center'} justifyContent={'center'} bg={'#D32F2F'} rounded={'4px'} >
                        <Button  bg={'#D32F2F'} _hover={{bg:'#D32F2F'}} color={'#FFFFFF'} fontSize={'13px'} fontWeight={'600'}>CHECKOUT</Button>
                    </Flex>
                    <Flex  direction={'column'} w={'100%'}  alignItems={'center'} justifyContent={'center'}  border={'1px solid #E0E0E1'}   rounded={'4px'}  p={'20px 10px'} bg={'white'} >
                        <Flex w={'100%'} >
                        <Input placeholder='Enter Coupon Code' />
                        <Button color={'#1774EF'} fontSize={'14px'} fontWeight={'600'} >APPLY</Button>
                        </Flex>

                        <Flex w={'100%'} direction={'column'}  borderTop={'1px solid #E0E0E1'} gap={'10px'} marginTop={'15px'} marginBottom={'10px'}>
                                <Flex  p={'0px 5px'}>
                                    <Text  color={'#4C4C4C'} fontSize={'14px'} fontWeight={'600'}  >PRICE DETAILS</Text>
                                </Flex>
                                <Flex justifyContent={'space-between'} p={'0px 5px'}  >
                                    <Text color={'#4C4C4C'} fontSize={'13px'} fontWeight={'400'}>
                                    Price ({itemCount} Items)
                                    </Text>
                                    <Text color={'#4C4C4C'} fontSize={'13px'} fontWeight={'600'}>
                                    ₹{totalPriceOfCart}
                                    </Text>
                                </Flex>
                                <Flex   justifyContent={'space-between'} p={'0px 5px'}>
                                    <Text color={'#4C4C4C'} fontSize={'13px'} fontWeight={'400'}>
                                      Delivery Charges
                                    </Text>
                                    <Text color={'#43A047'} fontSize={'13px'} fontWeight={'600'}>
                                    FREE
                                    </Text>
                                </Flex>
                        </Flex>

                        <Flex  w={'100%'}  justifyContent={'space-between'} p={'10px 5px'}  borderTop={'1px solid #E0E0E1'} borderBottom={'1px solid #E0E0E1'} >
                           <Text color={'#4C4C4C'} fontSize={'14px'} fontWeight={'600'} >AMOUNT PAYABLE</Text>
                            <Text color={'#003380'} fontSize={'14px'} fontWeight={'600'} >₹{totalPriceOfCart}</Text>
                        </Flex>

                        <Flex  w={'100%'} p={'10px 5px'}>
                            <Text  color={'#666666'} fontSize={'12px'} fontWeight={'500'}>
                            Safe and Secure Payments. Easy returns. 100% Authentic products.
                            </Text>
                        </Flex>
                        
                    </Flex>
                </Flex>
              
            </Flex>


       </Flex>

       
        </Flex>

  )
}

export default Cart

