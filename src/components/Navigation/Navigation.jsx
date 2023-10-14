import { Flex, Link } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex gap="5">
      <Link
        as="b"
        fontSize="lg"
        color="#3546AB"
        _hover={{
          color: '#FF7235',
          borderBottom: '1px',
          borderBottomColor: '#FF7235',
        }}
        _focus={{
          color: '#FF7235',
          borderBottom: '1px',
          borderBottomColor: '#FF7235',
        }}
      >
        <NavLink to="/">Home</NavLink>
      </Link>
      {isLoggedIn && (
        <Link
          as="b"
          fontSize="lg"
          color="#3546AB"
          _hover={{
            color: '#FF7235',
            borderBottom: '1px',
            borderBottomColor: '#FF7235',
          }}
          _focus={{
            color: '#FF7235',
            borderBottom: '1px',
            borderBottomColor: '#FF7235',
          }}
        >
          <NavLink to="/contacts">Contacts</NavLink>
        </Link>
      )}
    </Flex>
  );
};
