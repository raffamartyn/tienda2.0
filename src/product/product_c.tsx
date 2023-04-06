import React from "react";
import { GetStaticProps } from "next";

import { Productc } from "./apisproduct/type";
import apic from "./apisproduct/apic";

import { Button, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";

import { motion, AnimatePresence, } from 'framer-motion';



interface Props{
  ropac: Productc[];
}

const Ropa_c: React.FC<Props> = ({ropac}) => {
  const [selectedImage, setselectedImage] = React.useState <string | null> (null);
  const handleComprar = (product: Productc) => {
    const message = `¡Hola! Me interesa comprar el producto ${product.ROPAC}, con un precio de ${product.PRECIOC}.`;
    const url = `https://wa.me/3875057208/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  
  return (
  
    <Stack>
      
      
    
    <Stack p={10}>
      <Grid gridGap={12} templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
    {ropac.map(product =>
       <Stack 
       backgroundColor={'red.400'}
       padding={4}
       spacing={3}
       >
      
         <Stack spacing={1}>
         <Image
         as={motion.img}
         cursor={"pointer"}
         layoutId={product.LINKC}
         onClick={()=> setselectedImage(product.LINKC)}
         src={product.LINKC} maxHeight={170} objectFit='cover' alt=""/>
      <Text color={'black.500'}>{product.ROPAC}</Text>
      <Text>{product.DETALLEC}</Text>
      <Text>{product.PRECIOC}</Text>
      </Stack>
      <Button onClick={() => handleComprar(product)} >comprar</Button>
      
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
  const ropac = await apic.List();
  return{
    props: {
      ropac,
    },
    revalidate: 2, 
  }
}

export default Ropa_c;