
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Heading,
    Button,
    Spacer,
  } from '@chakra-ui/react';
  import Link from 'next/link';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleClick = () => (isOpen ? onClose() : onOpen());
  
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={"center"} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={handleClick}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading size="md">Logo</Heading>
            </Box>
            </HStack>
            <Spacer />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              
            >
                <Button>
                    <Link href="./">Home</Link>
                </Button>
                <Button>
                    <Link href="./productos">Productos</Link>
                </Button>
                <Button>
                    <Link href="./nosotros">Nosotros</Link>
                </Button>
              
            </HStack>
          
        </Flex>
  
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link href="./">Home</Link>
            <Link href="./productos">Productos</Link>
            <Link href="./nosotros">Nosotros</Link>  
            </Stack>
          </Box>
        ) : null}
      </Box>
    );
  };
  
  export default Navbar;
  