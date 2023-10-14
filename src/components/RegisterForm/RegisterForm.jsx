import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
      <FormControl onSubmit={handleSubmit}>
        <form>
          <FormLabel>
            Username
            <Input type="text" name="name" required placeholder="Your Name" />
          </FormLabel>
          <FormLabel>
            Email
            <Input
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
            />
          </FormLabel>
          <FormLabel>
            Password
            <Input
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </FormLabel>
          <Button type="submit">Register</Button>
        </form>
      </FormControl>
    </Box>
  );
};
