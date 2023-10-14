import { Button, Flex, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Flex gap="5" alignItems="center">
      <Text fontSize="16px" color="#BDBDBD">
        Welcome,{user.name}
      </Text>
      <Button bg="#FF7235" color="white" type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Flex>
  );
};
