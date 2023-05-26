import React from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  VStack,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';

import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        top={4}
        left={4}
        color={'purple'}
        onClick={onOpen}
        wh={20}
        p={0}
        borderRadius={'full'}
        zIndex={1000}
        pos={'fixed'}
      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader p={3}>
            <h1>Funny Videos Hub</h1>
          </DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button colorScheme="purple" variant={'ghost'}>
                <Link to={'/'} onClick={onClose}>
                  Home
                </Link>
              </Button>
              <Button colorScheme="purple" variant={'ghost'}>
                <Link to={'/videos'} onClick={onClose}>
                  Videos
                </Link>
              </Button>
              <Button colorScheme="purple" variant={'ghost'} onClick={onClose}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button colorScheme="purple" variant={'ghost'} onClick={onClose}>
                <Link to={'/upload'}>Upload Videos</Link>
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack w={'full'} justifyContent={'space-evenly'}>
              <Button colorScheme="purple" variant={'solid'} onClick={onClose}>
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button
                colorScheme="purple"
                variant={'outline'}
                onClick={onClose}
              >
                <Link to={'/signup'}>Signup</Link>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
