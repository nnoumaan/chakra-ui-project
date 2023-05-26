import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <form>
        <VStack
          spacing={'8'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
          alignItems={'stretch'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>

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

          <Button alignSelf={'flex-end'} colorScheme="purple" variant={'link'}>
            <Link to={'/forgetpassword'}>forget password?</Link>
          </Button>
          <Button variant={'solid'} type="submit" colorScheme="purple">
            Login
          </Button>
          <Text alignSelf={'flex-end'}>
            New User ?{' '}
            <Button
              colorScheme="purple"
              variant={'link'}
              textDecoration={'underline'}
            >
              {' '}
              <Link to={'/signup'}> Signup</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
