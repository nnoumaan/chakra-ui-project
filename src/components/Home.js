import {
  Box,
  Container,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const customHeading = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  p: '4',
  size: '3xl',
  borderRadius: '1px',
};

const Home = () => {
  return (
    <Box>
      <MyCarousal />
      <Container maxW={'container.xl'} h={'100vh'} p="16">
        <Heading
          textTransform="upperCase"
          borderBottom="2px solid"
          m="auto"
          py="2"
          w={'fit-content'}
        >
          Services
        </Heading>

        <Stack
          direction={['column', 'row']}
          h={'full'}
          p="4"
          alignItems={'center'}
        >
          <Img
            src={img5}
            filter={'hue-rotate(-138deg)'}
            h={['40', '400']}
          ></Img>

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
            fontSize={'large'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            nam tempora sed ullam assumenda voluptas sapiente. Aliquam hic iure
            earum totam corrupti id at ipsum, exercitationem cumque repellendus,
            nemo quae. Eum distinctio quos nihil, maxime doloribus aspernatur
            voluptate culpa cumque necessitatibus architecto magni alias
            accusamus quibusdam odit ipsa sed qui eius deserunt. Voluptate dolor
            dolorum excepturi architecto sapiente molestias quam!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousal = () => (
  <Carousel
    infiniteLoop
    autoPlay
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    h={'100vh'}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...customHeading}>
        Future is Coming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...customHeading}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...customHeading}>
        Gaming Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...customHeading}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
