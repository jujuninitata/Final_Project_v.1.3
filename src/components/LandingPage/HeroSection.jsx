import { chakra, Box,Container, Heading,Stack } from '@chakra-ui/react';


const HeroSection = () => {
  return (
    <Container maxW='container.lg'>
      <Box pos='relative' overflow='hidden'>
        <Box maxW='7xl' mx='auto'>
          <Box
            pos='relative'
            pb={{
              base: 8,
              sm: 16,
              md: 20,
              lg: 28,
              xl: 32,
            }}
            w='full'
            border='solid 1px transparent'>
            <Box
              maxW={{
                base: '7xl',
              }}
              px={{
                base: 4,
                sm: 6,
                lg: 8,
              }}
              mt={{
                base: 12,
                md: 16,
                lg: 20,
                xl: 28,
              }}>
              <Box
                textAlign='center'
                w={{
                  base: 'full',
                  md: 11 / 12,
                  xl: 8 / 12,
                }}
                mx='auto'>
                <Heading size='3xl' mb={4} color='gray.700'>
                  <chakra.span
                    display={{
                      base: 'block',
                      xl: 'inline',
                    }}>
                    Grow your career by{' '}
                  </chakra.span>
                  <chakra.span
                    display={{
                      base: 'block',
                      xl: 'inline',
                    }}
                    color='brand.600'
                    _dark={{
                      color: 'brand.400',
                    }}>
                    joining us
                  </chakra.span>
                </Heading>
                <chakra.p
                  mt={{
                    base: 3,
                    sm: 5,
                    md: 5,
                  }}
                  mx={{
                    sm: 'auto',
                    lg: 0,
                  }}
                  mb={6}
                  fontSize={{
                    base: 'lg',
                    md: 'xl',
                  }}
                  color='gray.500'
                  lineHeight='base'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </chakra.p>
                <Stack
                  direction={{
                    base: 'column',
                    sm: 'column',
                    md: 'row',
                  }}
                  mb={{
                    base: 4,
                    md: 8,
                  }}
                  spacing={{
                    base: 4,
                    md: 2,
                  }}
                  justifyContent='center'>
                  <Box rounded='full' shadow='md'>
                    <chakra.a
                      w='full'
                      display='flex'
                      transition={'all .3s ease'}
                      alignItems='center'
                      justifyContent='center'
                      border='solid 1px transparent'
                      fontSize={{
                        base: 'md',
                        md: 'lg',
                      }}
                      rounded='md'
                      color='white'
                      bg='brand.600'
                      _hover={{
                        bg: 'brand.700',
                      }}
                      px={{
                        base: 8,
                        md: 10,
                      }}
                      py={{
                        base: 3,
                        md: 4,
                      }}
                      cursor='pointer'>
                      Get started
                    </chakra.a>
                  </Box>
                  <Box mt={[3, 0]} ml={[null, 3]}>
                    <chakra.a
                      w='full'
                      display='flex'
                      transition={'all .3s ease'}
                      alignItems='center'
                      justifyContent='center'
                      px={{
                        base: 8,
                        md: 10,
                      }}
                      py={{
                        base: 3,
                        md: 4,
                      }}
                      border='solid 1px'
                      borderColor='brand.700'
                      fontSize={{
                        base: 'md',
                        md: 'lg',
                      }}
                      rounded='md'
                      color='brand.700'
                      _hover={{
                        bg: 'brand.200',
                        color: 'white',
                        borderColor: 'brand.200',
                        transition: 'all 0.3s ease-in-out',
                      }}
                      cursor='pointer'>
                      Contact us
                    </chakra.a>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
