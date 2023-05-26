import React from 'react';
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Avatar } from '@chakra-ui/react';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <form>
        <VStack
          spacing={'5'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
          alignItems={'stretch'}
         
        >
          <Heading >Welcome To Our Community</Heading>
          <Avatar alignSelf={'center'} boxSize={'150px'} />

          <Input
            type="email"
            placeholder="E-mail"
            focusBorderColor="purple"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            focusBorderColor="purple"
            required
          />
          <Input
            type="password"
            placeholder="Re-enter Passowrd"
            focusBorderColor="purple"
            required
          />
          <Input 
            type="number"
            placeholder="Mobile No."
            focusBorderColor="purple"
            required
          />

          <Button variant={'solid'} type="submit" colorScheme="purple">
            Sign Up
          </Button>
          <Text alignSelf={'flex-end'}>
            Already User ?{' '}
            <Button
              colorScheme="purple"
              variant={'link'}
              textDecoration={'underline'}
            >
              {' '}
              <Link to={'/login'}> Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
