import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      m="auto"
      boxSize="fit-content"
      boxShadow="2xl"
      p="6"
      rounded="md"
      bg="white"
    >
      <FormControl>
        <form onSubmit={handleSubmit}>
          <FormLabel>
            Email
            <Input type="email" name="email" placeholder="Your Email" />
          </FormLabel>
          <FormLabel>
            Password
            <Input
              type="password"
              name="password"
              placeholder="Your password"
            />
          </FormLabel>
          <Button type="submit">Log In</Button>
        </form>
      </FormControl>
    </Box>
  );
};
