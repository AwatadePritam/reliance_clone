import React from 'react'
import {Flex} from '@chakra-ui/react'
import CarouselMain from './CarouselMain'
const SectionOne = () => {

  const allSlides =[
    { id: 1,
      imgUrl:'https://www.reliancedigital.in/medias/Reliance-Audio-Summer-Sale-1365x260-B.jpg?context=bWFzdGVyfGltYWdlc3wxODYwNTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDhlL2gyOC8xMDEzOTk3ODgyNTc1OC5qcGd8Y2JlMzgxZWFkOWE4NGYyOWU2YTYzZWM3MWRjZTQxYjA3YTM0ODcwMzFhZmE1MWFjYTFmMmIyMzAxZGFkMGU1Mw'
    },
    { id: 2,
      imgUrl:'https://www.reliancedigital.in/medias/Great-deals-on-the-Newest-ACs-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjU3MTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDFmL2hhZC8xMDEyOTU4MjUyMjM5OC5qcGd8MjQyZDdjZjdjOWQ4ZjgwODNiOTVkYjU5ODZlZjE0YTE5MWJkYWViMjdkMzhiZDcyY2E3MjIwY2ExYzIwNjJkZA'
    }
  ]
  return (
    <Flex  w={'100%'} h={'300px'}>
        <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'5px'}>
            <Flex w={'100%'} h={'300px'} justifyContent={'center'} alignItems={'center'} >
             <CarouselMain allSlides={allSlides} />
            </Flex>
        </Flex>    
    </Flex>
  )
}

export default SectionOne