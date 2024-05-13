import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { PiCaretDownBold } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../redux/actions';

const SingleCartItem = ({cartItem}) => {

    const baseUrl = 'https://www.reliancedigital.in';
    const productName = cartItem?.structuredData?.name;
    const productPrice = cartItem?.productData?.price?.formattedValue;
    const productMRP = cartItem?.productData?.price?.mrp;
    const productDiscount = cartItem?.productData?.price?.discount;
    
    const slideshowArray = cartItem?.productData?.media; 
    const productImageUrl = baseUrl + slideshowArray[0].productImageUrl;
    const quantity = cartItem?.p_quantity;
    const productID = cartItem?.structuredData?.productID;

    console.log(productName, productPrice, productMRP, productDiscount, productImageUrl)

    const dispatch = useDispatch();
    
    return (
    <Flex w={'100%'} direction={'column'}>
        <Flex bg={'white'} w={'100%'} p={'10px 10px'}  border={'1px solid #E0E0E1'} rounded={'4px'}>
                    <Flex w={'98%'} justifyContent={'space-between'} >
                        <Flex w={'60%%'} direction={'column'}>
                           <Flex justifyContent={'flex-end'}> 
                            <Text  color={'#003380'} fontSize={'14px'} fontWeight={'600'}>{productName}</Text>
                            </Flex>
                           <Flex>
                                
                                <Image  boxSize='150px'
                                objectFit='cover' src={productImageUrl}/>
                                
                           </Flex>
                           <Flex gap={'10px'}>
                               <Text>QTY</Text>
                               <Text>{quantity}</Text>
                           </Flex>
                           <Flex bg={'red'}>
                                    

                           </Flex>
                        </Flex>
                        <Flex w={'40%'} direction={'column'} alignItems={'flex-end'} >
                            <Text color={'#000000'} fontSize={'18px'} fontWeight={'600'} >{productPrice}</Text>
                            <Text color={'#666666'} fontSize={'14px'} fontWeight={'400'} >M.R.P.: {productMRP} Inclusive of all taxes</Text>
                            <Text color={'#666666'} fontSize={'14px'} fontWeight={'400'} >You Save: {productDiscount}</Text>
                            <Text color={'#15967C'} fontSize={'13px'} fontWeight={'500'} >Free Shipping</Text>
                            <Text color={'#003380'} fontSize={'12px'} fontWeight={'500'} >Standard Delivery: 14 May (Tue)-15 May (Wed)</Text>
                            <Text color={'#666666'} fontSize={'12px'} fontWeight={'500'} >*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</Text>
                        </Flex>
                    </Flex>

                          
                   
                </Flex>

                          <Flex w={'100%'} bg={'white'} border={'1px solid #E0E0E1'} rounded={'4px'} p={'10px'} color={'#1774EF'} fontSize={'13px'} fontWeight={'500'}>
                            <Flex w={'50%'} justifyContent={'center'} borderRight={'1px solid #E0E0E1' }>
                                <Button w={'100%'} color={'#1774EF'} variant={'ghost'}
                                onClick={()=>{dispatch(deleteProductFromCart(productID))}}

                                >Remove</Button>
                            </Flex>
                            <Flex w={'50%'} fontSize={'16px'} justifyContent={'center'}>
                                <Text>Move to whishlist</Text>
                            </Flex>        

                           </Flex>

    </Flex>
  )
}

export default SingleCartItem