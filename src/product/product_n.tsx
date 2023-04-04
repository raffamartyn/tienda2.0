import React from "react";
import { GetStaticProps } from "next";

import { Product } from "./apisproduct/type";
import api from "./apisproduct/api";
import { Button, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";

import { motion, AnimatePresence, } from 'framer-motion';



interface Props{
  products: Product[];
}

const Ropa_n: React.FC<Props> = ({products}) => {
  const [selectedImage, setselectedImage] = React.useState <string | null> (null);
  const handleComprar = (product: Product) => {
    const message = `¡Hola! Me interesa comprar el producto ${product.ROPAD}, con un precio de ${product.PRECIOD}.`;
    const url = `https://wa.me/3875057208/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  return (
  
    <Stack>
      
      
    
    <Stack p={10}>
      <Grid gridGap={12} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
    {products.map(product =>
       <Stack 
       backgroundColor={'red.400'}
       padding={4}
       spacing={3}
       >
      
         <Stack spacing={1}>
         <Image
         as={motion.img}
         cursor={"pointer"}
         layoutId={product.LINK}
         onClick={()=> setselectedImage(product.LINK)}
         src={product.LINK} maxHeight={170} objectFit='cover' alt=""/>
      <Text color={'black.500'}>{product.ROPAN}</Text>
      <Text>{product.DETALLEN}</Text>
      <Text>{product.PRECION}</Text>
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
  const products = await api.List();
  return{
    props: {
      products,
    },
    revalidate: 2, 
  }
}

export default Ropa_n;