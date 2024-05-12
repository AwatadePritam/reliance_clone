import { Button, Flex, IconButton, Input, ListItem, StatDownArrow, Text, UnorderedList } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchSingleProductDetails } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import SliderWithThumbnail from './SliderWithThumbnail';


const SingleProductDetailsPage = () => {


    const params = useParams();
    const {url} = params;
    const productId = url;

    const singleProductDetails = useSelector((store) => store.singleProductDetails );
    const dispatch = useDispatch();

    const productName = singleProductDetails?.structuredData?.name;
    const productPrice = singleProductDetails?.productData?.price?.formattedValue;
    const productMRP = singleProductDetails?.productData?.price?.mrp;
    const productDiscount = singleProductDetails?.productData?.price?.discount;
    
    const slideshowArray = singleProductDetails?.productData?.media;
    console.log(slideshowArray)

    console.log(productName,'xxx')
    useEffect(()=>{

        dispatch(fetchSingleProductDetails(productId));

        window.scrollTo(0, 0);

    },[])


  return (
   
          <Flex w={'100%'} direction={'column'}>
        {
            singleProductDetails && (
                <Flex w={'100%'} direction={['column','column','row','row']} bg={'yellow'} justifyContent={['center','center','center','center']} alignItems={['center','center','start','start']}>
                <Flex w={['90%','90%','42%','42%']} bg={'green'}>
                       <SliderWithThumbnail slideshowArray={slideshowArray} />
                </Flex>

                <Flex w={['90%','90%','58%','58%']} bg={'red'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Flex w={'100%'}  direction={'column'} >
                            
                            <Flex w={'80%'} direction={'column'} p={'20px 15px'} gap={'10px'}>
                            <Text fontSize={'medium'} fontWeight={'500'} >{productName}                            </Text>
                            
                                <Flex>
                                   <Text>Add to Compare</Text> 
                                    Share
                                    Print
                                </Flex>  
                            </Flex>
                            
                        </Flex>

                        <Flex w={'100%'} direction={['column','column','row','row']}>
                            <Flex w={['100%','100%','50%','50%']}  bg={'orange'} direction={'column'}>
                                <Flex p={'20px 15px'} gap={'10px'} direction={'column'}>
                                    <Text fontWeight={'700'} fontSize={'small'}>Gain more with offers (7)</Text>
                                    <Text fontSize={'small'}>7.5% Instant Discount with HSBC Credit Cards Read-T&C </Text>
                                    <Text fontSize={'small'}>7.5% Discount Upto 2000 with Amex Credit Card Read-T&C </Text>
                                    <Text fontSize={'small'}>Flat 1000 Instant Discount with AU Credit Card Read-T&C</Text>
                                    <Flex  alignItems={'center'} bg={'#DDEDFB'} w={'max-content'} p={'3px 8px'} h={'25px'} gap={'5px'}>
                                        <Text fontSize={'small'} color={'#003380'}>
                                        See More 
                                        </Text >
                                        
                                        <MdOutlineKeyboardArrowDown color='#003380' />
                                    </Flex>
                                </Flex>

                                <Flex p={'20px 15px'} gap={'10px'} direction={'column'}>
                                    <Text fontWeight={'700'} fontSize={'small'}>Save more with EMI/Cashback (8)</Text>
                                    <Text fontSize={'small'}>Additional Cashback on Credit Card No-Cost EMIs.  </Text>
                                    <Text fontSize={'small'}>Additional Cashback on Credit Card Low-cost EMIs. </Text>
                                    <Text fontSize={'small'}>Additional Cashback on Debit Card Low-cost EMIs.</Text>
                                    <Flex  alignItems={'center'} bg={'#DDEDFB'} w={'max-content'} p={'3px 8px'} h={'25px'} gap={'5px'}>
                                        <Text fontSize={'small'} color={'#003380'}>
                                        See More 
                                        </Text >
                                        
                                        <MdOutlineKeyboardArrowDown color='#003380' />
                                    </Flex>
                                </Flex>

                                <Flex p={'20px 15px'} gap={'10px'} direction={'column'}>
                                    <Text fontWeight={'700'} fontSize={'small'}>Warranty</Text>
                                    <UnorderedList>
                                        <ListItem>
                                        <Text fontSize={'small'}><Text fontWeight={'700'} fontSize={'small'} as={'span'}>Warranty: </Text>1 Year manufacturer warranty  </Text>
                                        </ListItem>
                                    </UnorderedList>
                                    
                                </Flex>

                                <Flex p={'20px 15px'} gap={'10px'} direction={'column'}>
                                    <Text fontWeight={'700'} fontSize={'small'}>Key Features</Text>
                                    <UnorderedList>
                                        <ListItem>
                                        <Text fontSize={'small'}>Supported Apps: NetFlix, Prime Video, Samsung TV Plus, Disney + Hotstar </Text>
                                        </ListItem>

                                        <ListItem>
                                            <Text fontSize={'small'}>Operating System: Tizen </Text>
                                        </ListItem>
                                        <ListItem>
                                        <Text fontSize={'small'}>Resolution: 3840 x 2160 4K Ultra HD </Text>
                                        </ListItem>
                                        
                                        
                                    </UnorderedList>
                                    <Flex  alignItems={'center'} bg={'#DDEDFB'} w={'max-content'} p={'3px 8px'} h={'25px'} gap={'5px'}>
                                        <Text fontSize={'small'} color={'#003380'}>
                                        See More 
                                        </Text >
                                        
                                        <MdOutlineKeyboardArrowDown color='#003380' />
                                    </Flex>
                                    
                                </Flex>

                                <Flex p={'20px 15px'} gap={'10px'} direction={'column'}>
                                    <Text fontWeight={'700'} fontSize={'small'}>Return Policy</Text>
                                    <UnorderedList>
                                        <ListItem>
                                        <Text fontSize={'small'}>For return eligibility. Read-T&C </Text>
                                        </ListItem>

                                        <ListItem>
                                            <Text fontSize={'small'}>All accessories, product & packaging need to be returned in original condition.</Text>
                                        </ListItem>
                                        
                                        
                                        
                                    </UnorderedList>
                                    <Text fontWeight={'700'} fontSize={'small'}>Got Feedback to share on this page? report here.</Text>
                                    
                                </Flex>



                            </Flex>

                            <Flex w={['100%','100%','50%','50%']} bg={'purple'} direction={'column'} p={'20px'} >
                                        <Flex bg={'green'} direction={'column'} gap={'10px'}>
                                                <Flex>
                                                    <Text fontSize={'medium'}>Offer Price: </Text>
                                                    <Text fontSize={'large'}color={'#003380'}>  {productPrice}</Text>
                                                </Flex>
                                                <Flex>
                                                    <Text>MRP: <Text  textDecoration={'line-through'}as={'span'}>₹ {productMRP}</Text> (Inclusive of all taxes)</Text>
                                                   
                                                </Flex>
                                                <Text color={'#43A04D'}>You Save: {productDiscount}</Text>
                                                <Text> EMIs (Credit Cards) from ₹1599.42/month | View-Plans</Text>
                                                <Text>FREE Shipping!</Text>

                                                <Input placeholder='Enter / Detect Pin Code'/>
                                                
                                        </Flex>



                                        <Flex w={'100%'} gap={'10px'} p={'20px 0px'}>
                                                <Button w={'100%'} bg={'#E42529'} color={'white'} _hover={{bg:'#003380'}} cursor={'pointer'}
                                                onClick={()=>{dispatch(addToCart(singleProductDetails))}}
                                                >
                                                    Add to Cart
                                                </Button>
                                                <Button w={'100%'} bg={'#FC6027'} color={'white'} _hover={{bg:'#FC6027'}} cursor={'pointer'}>Buy Now</Button>
                                        </Flex>
                            </Flex>
                        </Flex>
                </Flex>

            </Flex>

            )
        }

          </Flex>


 )
}

export default SingleProductDetailsPage