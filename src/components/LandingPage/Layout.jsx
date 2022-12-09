import { Box, VStack } from '@chakra-ui/react';
import { Header } from './Header';

const Layout = ({ children }) => {
  return (
    <Box bg='gray.50'>
      <VStack spacing={10} w='full' align='center'>
        <Header name='Biller' />
        {children}
      </VStack>
    </Box>
  );
};

export default Layout;
