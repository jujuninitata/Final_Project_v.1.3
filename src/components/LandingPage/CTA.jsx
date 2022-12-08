import { chakra, Box, Flex, Stack, Link, Container } from '@chakra-ui/react';
import React from 'react';

const CTA = () => {
  return (
    <Container maxW={'7xl'} py={12}>
      <Flex
        // bg='#edf3f8'
        _dark={{
          bg: '#3e3e3e',
        }}
        // p={50}
        w='full'
        alignItems='center'
        justifyContent='center'>
        <Flex
          justify='center'
          bgGradient='linear-gradient(216deg, rgba(50,125,207,1) 0%, rgba(6,6,161,1) 55%, rgba(11,20,57,1) 100%)'
          _dark={{
            bg: 'gray.800',
          }}
          borderRadius='lg'
          shadow={'xl'}
          w='full'>
          <Box
            w={{
              base: 'full',
              md: '75%',
              lg: '50%',
            }}
            borderRadius='lg'
            px={4}
            py={20}
            textAlign={{
              base: 'left',
              md: 'center',
            }}>
            <chakra.span
              fontSize={{
                base: '3xl',
                sm: '4xl',
              }}
              fontWeight='extrabold'
              letterSpacing='tight'
              lineHeight='shorter'
              color='gray.100'
              _dark={{
                color: 'gray.100',
              }}
              mb={6}>
              <chakra.span display='block'>Ready to dive in?</chakra.span>
              <chakra.span
                display='block'
                color='brand.200'
                _dark={{
                  color: 'gray.500',
                }}>
                Apply for job today.
              </chakra.span>
            </chakra.span>
            <Stack
              justifyContent={{
                base: 'left',
                md: 'center',
              }}
              direction={{
                base: 'column',
                sm: 'row',
              }}
              spacing={2}
              mt={2}>
              <Box display='inline-flex' rounded='md' shadow='md'>
                <Link
                  w='full'
                  display='inline-flex'
                  alignItems='center'
                  justifyContent='center'
                  px={5}
                  py={3}
                  border='solid transparent'
                  fontWeight='bold'
                  rounded='md'
                  _light={{
                    color: 'white',
                  }}
                  bg='brand.600'
                  _dark={{
                    bg: 'brand.500',
                  }}
                  _hover={{
                    bg: 'brand.700',
                    _dark: {
                      bg: 'brand.600',
                    },
                  }}>
                  Get started
                </Link>
              </Box>
              <Box ml={3} display='inline-flex' rounded='md' shadow='md'>
                <Link
                  w='full'
                  display='inline-flex'
                  alignItems='center'
                  justifyContent='center'
                  px={5}
                  py={3}
                  border='solid transparent'
                  fontWeight='bold'
                  rounded='md'
                  color='brand.600'
                  bg='white'
                  _hover={{
                    bg: 'brand.50',
                  }}>
                  Learn more
                </Link>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default CTA;
