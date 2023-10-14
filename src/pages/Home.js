import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container
    // backgroundImage="url('image/Blob.jpg')"
    // backgroundPosition="center"
    // backgroundRepeat="no-repeat"
    >
      <Box boxSize="fit-content" boxShadow="2xl" p="6" rounded="md" bg="white">
        <Heading my="30px">
          Welcome to ContactKeeper - Your Digital Contact Management Solution!
        </Heading>
        <Text as="cite">
          At ContactKeeper, we understand the importance of staying connected
          with your network. Our user-friendly platform is designed to help you
          effortlessly organize and manage all your valuable contacts in one
          secure place. Say goodbye to the hassle of lost business cards or
          forgotten phone numbers.
        </Text>
        <Image
          width="200px"
          src="https://static.vecteezy.com/system/resources/previews/019/997/809/original/holding-phone-in-one-hands-empty-screen-phone-mockup-editable-smartphone-template-illustration-on-isolated-background-vector.jpg"
        />
      </Box>
    </Container>
  );
}

// backgroundImage =
// "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kXyPaMMSUJ3mJR0YTO6M2wPBZ7LhmGbQSdq4XAJQy7_QHCQWXYfpblY9hapqJ-i54pI&usqp=CAU')";
// backgroundPosition = 'center';
// backgroundRepeat = 'no-repeat';
