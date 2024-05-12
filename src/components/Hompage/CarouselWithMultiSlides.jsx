import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import '../../App.css';
import { Link } from 'react-router-dom';

 const CarouselWithMultiSlides = ({multiSlidesData,hideDeatilsFlag=false}) => {
    const baseUrl = 'https://www.reliancedigital.in';

    const trimProductName = (productName) =>{
        const maxLength = 60;
        const  trimmedProductName = productName.length > maxLength ? productName.slice(0, maxLength) + '...' : productName;

        return trimmedProductName

    }
    
  return (
    <>
      <Swiper  modules={[ Pagination, Navigation]} className="mySwiper" 

       breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      slidesPerGroup={5}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      style={{padding:'0px 50px'}}
      >
      {
        multiSlidesData.map((item,index) =>(
                     <SwiperSlide key={index}  >
                    <Link to={`/products${item.url}`} key={index} >

                        <Box p={4} rounded="md" h={'420px'} display={'flex'} flexDirection={'column'} cursor={'pointer'} className='myBox'>
                            <Flex h={'50%'} direction={'column'}>
                                {
                                    item.teaserType && (
                                        <Text fontSize={'x-small'} w={'max-content'} margin={'5px 0px'}  fontWeight={'500'} color={'white'} bg={'#007FAD'} padding={'3px 5px'}  borderTopLeftRadius={'xl'} borderBottomRightRadius={'xl'}>{item.teaserType}</Text>
                                    )
                                }
                                <Image m={'auto'} p={'20px'}   _hover={{transform:`scale(1.1)`,transition:'0.3s'}} src={baseUrl + `${item.imageUrl}`} h={'180px'} w={'180px'} />
                            </Flex>
                            <Text textAlign={hideDeatilsFlag? 'center' : 'left'}  fontWeight={'500'} fontSize={'13px'} id='productName' >{`${trimProductName(item.name)}`}</Text>
                            {
                            !hideDeatilsFlag && (
                                
                                <>
                                    <Text color={'gray'} fontSize={'12px'}  >Offer Price :<Text color={'black'} fontWeight={'500'} fontSize={'13px'} as={'span'}> ₹{item.sellingPrice}</Text></Text>
                                    <Text color={'gray'} fontSize={'12px'}  >M.R.P : <Text  textDecoration={'line-through'} as={'span'}>₹{item.mrp}</Text></Text>
                                    <Text color={'gray'} fontSize={'12px'}  >You Save : {item.discount}</Text>
                                </>
                            )  

                            }

                        {
                            item.averageRating !== 0 &&  !hideDeatilsFlag && (
                                <Flex gap={'10px'}>
                                <Text>{item.averageRating}</Text>
                                <Text>({item.numberOfRatings})</Text>

                                </Flex>
                            )
                        } 
                        {
                            item.hasPP && (
                            <Box w={'max-content'}margin={'5px 0px'} bg={'#EFFCF5'} padding={'3px 5px'} rounded={'full'} border={'1px solid green'}>
                                <Text fontWeight={'500'} color={'green'}  fontSize={'x-small'}>OFFERS AVAILABLE</Text>
                            </Box>
                            )
                        }


                        </Box>
                        </Link>

                    </SwiperSlide>
        ))
      }
      </Swiper>
    </>
  );
}

export default CarouselWithMultiSlides


