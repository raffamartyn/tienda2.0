import { Button, Divider, Heading, Spacer, Flex, Text } from "@chakra-ui/react";
import Layout from "component/layout";


import Ropa_n from "@/product/product_n";

import Contactoslim from "component/contactoslim";
import Slider from "component/slider";



import { Productn } from "@/product/apisproduct/type";
import apin from "@/product/apisproduct/apin";



import { GetStaticProps } from "next";
import Link from "next/link";


interface Props{
  
  
  ropan: Productn[];
  
}

const Index: React.FC<Props> = ({ropan}) => {
  return(
    <Layout>

          <Slider/>

         
          <Contactoslim/>
        
          <Heading textAlign={'center'} size={'4xl'}>OFERTAS</Heading>

          <Divider mb={2} marginX={'auto'} width={'400px'} borderColor={'black'}/>
          
          
          <Ropa_n ropan={ropan} />
          <Flex pr={['7rem','9rem']}>
            <Spacer/>
            <Link href="./productos">
            <Button colorScheme='teal' size={'lg'} >...Ver mas Productos</Button>
            </Link>
          </Flex>
          
          

    </Layout>

  )
}

export const getStaticProps: GetStaticProps = async () =>{
  
  const ropan = await apin.List();
  
  return{
    props: {
      
      ropan,
      
    },
    revalidate: 2, 
  }
}

export default Index;