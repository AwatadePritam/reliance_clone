import React from 'react'
import {Flex} from '@chakra-ui/react'
import CarouselMain from './CarouselMain'
import SectionOne from './SectionOne'
import SectionSecond from './SectionSecond'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'

const HomePage = () => {

  
  return (
    <Flex w={'100%'}  direction={'column'}    >
      <SectionOne/>
      <SectionSecond/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>

        
    </Flex>
  )
}

export default HomePage