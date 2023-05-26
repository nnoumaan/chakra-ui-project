import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box minH="40vh" bgColor={'blackAlpha.900'} p={16}>
      <Stack  direction={['column', 'row']}  px={'4'} >
        <VStack w={'full'}  alignItems={'stretch'} p={2}>
          <Heading size={'lg'} textDecoration={'underline'} color={'whiteAlpha.900'} textAlign={['center','none']} >Subscribe to Our Newslater</Heading>{' '}
        
        <HStack pos={'relative'}>
          <Input outline={'none'} border={'none'} placeholder={"Enter Email ..."}  mt={5} color='white' />
          <Button colorScheme="purple" variant={'solid'}  p={0} top={5} borderBottomRadius={'5px,0px'}  bgColor={'purple'} pos={'absolute'} right={0}  zIndex={100}>
            <AiOutlineSend size={20} />
          </Button>
        </HStack>
        </VStack>

        <VStack w={'full'} borderRight={['none','1px solid white']} borderLeft={['none','1px solid white']}>
          <Heading size={'lg'} textDecoration={'underline'} color={'whiteAlpha.900'}  >VideoHub</Heading>


          <HStack><Text mt={5} color={'whiteAlpha.900'}>@All Right Reserved</Text></HStack>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'lg'} textDecoration={'underline'} color={'whiteAlpha.900'}>Social</Heading>
          <VStack>
            <Button colorScheme='purple' variant={'link'}> <a href='https://www.youtube.com' style={{textDecoration:'underline'}} target='_blank'>Youtube</a></Button>
            <Button colorScheme='purple' variant={'link'}> <a href='https://www.github.com' style={{textDecoration:'underline'}} target='_blank'>GitHub</a></Button>
            <Button colorScheme='purple' variant={'link'}> <a href='https://www.facebook.com' style={{textDecoration:'underline'}} target='_blank'>Facebook</a></Button>
          </VStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
