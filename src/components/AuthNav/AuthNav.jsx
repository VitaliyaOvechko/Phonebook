import { Button, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Flex gap="5">
      <Button colorScheme="blackAlpha">
        <NavLink to="/register">Register</NavLink>
      </Button>
      <Button colorScheme="blackAlpha">
        <NavLink to="/login">Log In</NavLink>
      </Button>
    </Flex>
  );
};
