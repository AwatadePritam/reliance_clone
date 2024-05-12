import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import CarouselWithMultiSlides from './CarouselWithMultiSlides';

const SectionSix = () => {

   const bottomSlide = [
    {
      "componentType": "productrangerotatingcomponent1",
      "visible": true,
      "name": "Explore Our Range Of Products",
      "isDealTimerComponent": false,
      "dealTimerDetails": null,
      "data": [
        {
            "componentType": "item_000022UZ",
            "visible": true,
            "name": "Air Conditioners",
            "isDealTimerComponent": false,
            "dealTimerDetails": null,
            "url": "/air-conditioners/c/S101510",
            "imageUrl": "/medias/Explore-Our-Range-of-Products-AC.png?context=bWFzdGVyfGltYWdlc3wxNzI3NnxpbWFnZS9wbmd8aW1hZ2VzL2hmMy9oNDMvOTg5MjQwNzQ0MzQ4Ni5wbmd8ODkxZDlkYTUxODhkM2RiOWUzMTU4ZDZhYmVkYTM3MzE2MDEyNDEzODMzNWZlZWQ5ZDQwMzNmMWM1OTliZGYwZA",
            "altText": "Explore-Our-Range-of-Products-AC.png",
            "color": null,
            "textColor": null,
            "title": null,
            "alternateImageUrl": "",
            "productName": null,
            "brandName": null,
            "categoryName": null,
            "headline": "Air Conditioners",
            "content": null,
            "maspRatio": null,
            "daspRatio": null
          },
        {
          "componentType": "item_00001V4X",
          "visible": true,
          "name": "Speakers & Headsets",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/headphones-headsets/c/S101021",
          "imageUrl": "/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
          "altText": "Speaker-Headset-180x180-15-01-2019.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Speakers & Headsets",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "item_000022UZ",
          "visible": true,
          "name": "Air Conditioners",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/air-conditioners/c/S101510",
          "imageUrl": "/medias/Explore-Our-Range-of-Products-AC.png?context=bWFzdGVyfGltYWdlc3wxNzI3NnxpbWFnZS9wbmd8aW1hZ2VzL2hmMy9oNDMvOTg5MjQwNzQ0MzQ4Ni5wbmd8ODkxZDlkYTUxODhkM2RiOWUzMTU4ZDZhYmVkYTM3MzE2MDEyNDEzODMzNWZlZWQ5ZDQwMzNmMWM1OTliZGYwZA",
          "altText": "Explore-Our-Range-of-Products-AC.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Air Conditioners",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "productrangebanner2",
          "visible": true,
          "name": "Mobiles",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/smart-phones/c/S101711",
          "imageUrl": "/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
          "altText": "iphone pro 11-01.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Smartphones",
          "content": "Content",
          "maspRatio": null,
          "daspRatio": null
        },
        {
            "componentType": "item_0000H8DH",
            "visible": true,
            "name": "Mixer Grinders",
            "isDealTimerComponent": false,
            "dealTimerDetails": null,
            "url": "/mixer-grinders/c/S10163113",
            "imageUrl": "/medias/Mixer-Explore.png?context=bWFzdGVyfGltYWdlc3wyMTk1MnxpbWFnZS9wbmd8aW1hZ2VzL2gzZi9oODcvMTAwMTE0MDU2NDc5MDIucG5nfGJjOWNlM2FkZGUxMWE1ODIyZmNjNWJiNDU1NjI4ODQyYWM1M2Q3ZWU3NDU5YTgyZjFiN2JjNmJhOGI1YzUwMDE",
            "altText": "Mixer-Explore.png",
            "color": null,
            "textColor": null,
            "title": null,
            "alternateImageUrl": "",
            "productName": null,
            "brandName": null,
            "categoryName": null,
            "headline": "Mixer Grinders",
            "content": null,
            "maspRatio": null,
            "daspRatio": null
          },
        {
          "componentType": "productrangebanner1",
          "visible": true,
          "name": "Televisions",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/televisions/c/S101812",
          "imageUrl": "/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
          "altText": "TV-180x180-15-01-2019.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Televisions",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "item_0000H8DH",
          "visible": true,
          "name": "Mixer Grinders",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": " /mixer-grinders/c/S10163113",
          "imageUrl": "/medias/Mixer-Explore.png?context=bWFzdGVyfGltYWdlc3wyMTk1MnxpbWFnZS9wbmd8aW1hZ2VzL2gzZi9oODcvMTAwMTE0MDU2NDc5MDIucG5nfGJjOWNlM2FkZGUxMWE1ODIyZmNjNWJiNDU1NjI4ODQyYWM1M2Q3ZWU3NDU5YTgyZjFiN2JjNmJhOGI1YzUwMDE",
          "altText": "Mixer-Explore.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Mixer Grinders",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "item_00003340",
          "visible": true,
          "name": "Smart Wearables",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": " /wearable-technology/c/S101722",
          "imageUrl": "/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
          "altText": "Watch--180x180-27_02_2020.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Smart Wearables",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "item_00001V4U",
          "visible": true,
          "name": "Laptops",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/laptops/c/S101210",
          "imageUrl": "/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
          "altText": "Laptop-180x180-15-01-2019.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Laptops",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "productrangebanner3",
          "visible": true,
          "name": "Refrigerators",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/refrigerators/c/S101513",
          "imageUrl": "/medias/Explore-Our-Range-of-Products-Ref.png?context=bWFzdGVyfGltYWdlc3wxNDQwMXxpbWFnZS9wbmd8aW1hZ2VzL2hlZC9oMjQvOTg5MjQwNzUwOTAyMi5wbmd8NTc5ZWE5ZGEzYTYzODYwNDNlNTRhNjExZjcyZGI4NzQ1YmE0NDVjYmUwY2M3MzRiZjFkMWZmNDY3NTMxYjNkMA",
          "altText": "Explore-Our-Range-of-Products-Ref.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Refrigerators",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "item_0000FOTC",
          "visible": true,
          "name": "Speakers & Soundbars",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/tv-speakers-soundbars/c/S101811",
          "imageUrl": "/medias/Explore-Our-Range-of-Products-Speakers-Soundbars.png?context=bWFzdGVyfGltYWdlc3w5NDU5fGltYWdlL3BuZ3xpbWFnZXMvaGFiL2gyOS85OTg0Nzg3OTA2NTkwLnBuZ3xiODAxZmFmY2M1ZGI5YjE3YzhlY2I5MmI0NjNhZDkyOGY2NWFjM2I5YTU1NGZhOTFhNzQ1NTZhN2ZhMTcwNzFh",
          "altText": "Explore-Our-Range-of-Products-Speakers-&-Soundbars.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Speakers & Soundbars",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "item_0000KX38",
          "visible": true,
          "name": "microwave ovens",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/microwave-ovens/c/S101618",
          "imageUrl": "/medias/Microwave-Explore-HP-Section-Icon.png?context=bWFzdGVyfGltYWdlc3wyODgwM3xpbWFnZS9wbmd8aW1hZ2VzL2gyOS9oODUvMTAwNTY5NjAxNDc0ODYucG5nfGQ3ZTZjNTExZWFmZDkyN2Q2Y2M0N2NkMWRlZGUwYWFmZjQzZGNlMDc1YjIyMjY5NmE1NGZmNzk1YzU1YzQxNDc",
          "altText": "Microwave-Explore-HP-Section---Icon.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Microwave Ovens",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "productrangebanner4",
          "visible": true,
          "name": "Washing Machines",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/washing-machines/c/S101518",
          "imageUrl": "/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
          "altText": "Washing-Machine-180x180-15-01-2019.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Washing Machines",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
          "componentType": "item_00001V4W",
          "visible": true,
          "name": "Cameras",
          "isDealTimerComponent": false,
          "dealTimerDetails": null,
          "url": "/dslr-cameras/c/S101110",
          "imageUrl": "/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
          "altText": "Camera-180x180-15-01-2019.png",
          "color": null,
          "textColor": null,
          "title": null,
          "alternateImageUrl": "",
          "productName": null,
          "brandName": null,
          "categoryName": null,
          "headline": "Cameras",
          "content": null,
          "maspRatio": null,
          "daspRatio": null
        },
        {
            "componentType": "item_00001V4W",
            "visible": true,
            "name": "Cameras",
            "isDealTimerComponent": false,
            "dealTimerDetails": null,
            "url": "/dslr-cameras/c/S101110",
            "imageUrl": "/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
            "altText": "Camera-180x180-15-01-2019.png",
            "color": null,
            "textColor": null,
            "title": null,
            "alternateImageUrl": "",
            "productName": null,
            "brandName": null,
            "categoryName": null,
            "headline": "Cameras",
            "content": null,
            "maspRatio": null,
            "daspRatio": null
          }
      ],
      "timeout": null,
      "viewAllUrl": null,
      "orientation": null,
      "viewAllLinkLabel": null,
      "title": null,
      "content": null,
      "bgColor": null,
      "showCarouselButton": null,
      "link": {
        "name": "View All",
        "url": "/brand/c/BRAND?searchQuery=:relevance:availability:Exclude%20out%20of%20Stock&page=0"
      },
      "heading": "Explore Our Range Of Products",
      "maspRatio": null,
      "daspRatio": null
    }
  ]

  const slideNumberEleven_data  = bottomSlide[0].data;

  return (
    
    <Flex w={'100%'} bg={' #F9F9F9'} >

        <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'5px'}>
           <Flex w={'100%'} bg={'#F9F9F9'} justifyContent={'center'} fontWeight={'500'}>
            <Flex justifyContent={'center'} w={'95%'} p={'20px 0px'} gap={'10px'}>
                    <Text  fontSize={'lg'} fontWeight={'700'}>EXPLORE OUR RANGE OF PRODUCTS</Text>
                   
                </Flex>
           </Flex>

            <Flex w={'100%'}   justifyContent={'center'} alignItems={'center'} >
             <CarouselWithMultiSlides multiSlidesData={slideNumberEleven_data} hideDeatilsFlag={true} />
            </Flex>

           

 
        </Flex>    
    </Flex>
  )
}

export default SectionSix
