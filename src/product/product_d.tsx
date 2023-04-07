import React from "react";
import { GetStaticProps } from "next";

import { Productd } from "./apisproduct/type";
import apid from "./apisproduct/apid";

import { Button, Divider, Flex, Grid, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";

import { motion, AnimatePresence, } from 'framer-motion';



interface Props{
  ropad: Productd[];
}

const Ropa_d: React.FC<Props> = ({ropad}) => {
  const [selectedImage, setselectedImage] = React.useState <string | null> (null);
  const handleComprar = (product: Productd) => {
    const message = `¡Hola! Me interesa comprar el producto ${product.ROPAD}, con un precio de ${product.PRECIOD}.`;
    const url = `https://wa.me/3875057208/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  return (
  
    <Stack>
      
      
    
    <Stack p={{base:'3', md:'12'}}>
      <Grid gridGap={{base:'3',md:'12'}} templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(240px, 1fr))' }}
>
    {ropad.map(product =>
       <Stack 
       borderWidth='1px'
       borderColor={'black'}
       boxShadow='dark-lg'
       borderRadius={'md'}
       backgroundColor={'whitch'}
       padding={['1','4']}
       spacing={['1','3']}
       maxWidth={{base:'184px',md: 'none'}}
       >
      
         <Stack spacing={1}>
         <Image
         borderRadius={'md'}
         as={motion.img}
         cursor={"pointer"}
         layoutId={product.LINKD}
         onClick={()=> setselectedImage(product.LINKD)}
         src={product.LINKD} maxHeight={170} objectFit='cover' alt=""/>
      <Heading noOfLines={3} maxW="100%" size={'md'} color={'black.500'}>{product.ROPAD}</Heading>
      <Text>{product.DETALLED}</Text>
      <Text fontSize={'2xl'}>${product.PRECIOD}</Text>
      </Stack>
      <Spacer/>
      <Divider/>
      <Button colorScheme="whatsapp" onClick={() => handleComprar(product)} >comprar</Button>
      
      </Stack>)}
    </Grid>
    </Stack>
    <AnimatePresence>
    {selectedImage && (
      <Stack  >
        <Flex
      justifyContent={'center'}
      left={'0'}
      top='0'
      layoutId={selectedImage}
      position={'fixed'}
      width={'100%'}
      height={'100%'}
      backgroundColor="rgba(0,0,0,0.5)"
      as={motion.div}
      alignItems={'center'}
      key={'backdrop'}
      onClick={()=> setselectedImage (null)}
      >
        
          <Image height={'100%'}  key={'image'} src={selectedImage}/>
        
      
      </Flex>
      </Stack>
      
    )  }
    </AnimatePresence>
   
        </Stack>
        
         
 
  )
};

export const getStaticProps: GetStaticProps = async () =>{
  const ropad = await apid.List();
  return{
    props: {
      ropad,
    },
    revalidate: 2, 
  }
}

export default Ropa_d;