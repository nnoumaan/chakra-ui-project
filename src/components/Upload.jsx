import {
  Button,
  Container,
  HStack,
  Input,
  VStack,
  color,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <VStack color={'purple.500'} justifyContent={'center'} h={'full'}>
        <AiOutlineCloudUpload size={'100vmax'} />

        <form>
          <HStack>
            <Input
              type="file"
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: '120%',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  transition:'.1s ease-in',
                  '&:hover': {
                    backgroundColor: 'purple',
                    color: 'white',
                  }
                },
              }}
            />
            <Button variant={'solid'} colorScheme={'purple'} type='submit'>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
