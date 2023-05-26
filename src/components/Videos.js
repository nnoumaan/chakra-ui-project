import { Button, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const myList = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
];

const Videos = () => {

  const [mySrc , setmySrc] = useState(myList[0])
  return (
    <Stack direction={['column', 'row']} w={'full'} h={'100vh'} p={10}>
      <VStack w={'full'} pl={5} >
        <video
        
          src={mySrc}
          autoPlay
          controls
          controlsList="nodownload"
          style={{ width: '100%' }}
        >
        
        </video>
        <HStack w={'full'} p={'4'}>
          <Heading>Noumaan</Heading>
        </HStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        spacing={'5'}
        pl={'4'}
        pr={'40px'}
      >
        {myList.map((src,ind)=>{ 
                return  <Button h={14} key={ind} colorScheme="purple" variant={'outline'} onClick={()=>{setmySrc(src)}}>Video  {ind + 1}</Button>



        })}
      </VStack>
    </Stack>
  );
};

export default Videos;
