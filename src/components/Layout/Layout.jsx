import { Box, Container } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box>
      <Container maxW="2xl" bg="#ffff">
        <Box py="15" px="5" borderBottom="2px" borderBottomColor="#FF7235">
          <AppBar />
        </Box>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </Box>
  );
};
