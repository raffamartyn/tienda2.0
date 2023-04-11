import React from "react";
import Layout from "component/layout";
import { Tabs,Tab, TabList, TabPanel, TabPanels, Image, Text, SimpleGrid, } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import Ropa_d from "@/product/product_d";
import Ropa_n from "@/product/product_n";
import Ropa_c from "@/product/product_c";

import { Productc } from "@/product/apisproduct/type";
import apic from "@/product/apisproduct/apic";

import { Productn } from "@/product/apisproduct/type";
import apin from "@/product/apisproduct/apin";

import { Productd } from "@/product/apisproduct/type";
import apid from "@/product/apisproduct/apid";





interface Props{
  
    ropad:Productd[];
    ropan: Productn[];
    ropac: Productc[];
  }
  

const listado: React.FC<Props> = ({ropad,ropan,ropac}) => {
    
  return(
        <Layout>
          

<Tabs variant='unstyled'>
  <TabList  pl={[16,60,80]}>
    <SimpleGrid  gap={[1,10,10]} columns={[2,2,4]}>
        
    <Tab _selected={{ color: 'white', bg: 'blue.500' }} w='200' pb='12'><Image w={100} src={'./ropa.png'} alt={''}/><Text pt='150' position={'absolute'}>NIÑOS</Text></Tab>
    <Tab _selected={{ color: 'white', bg: 'green.400' }} w='200' pb='12'><Image w={100} src={'./vestir.png'} alt={''}/><Text pt='150' position={'absolute'}>DAMA</Text></Tab>
    <Tab _selected={{ color: 'white', bg: 'yellow.400' }} w='200' pb='12'><Image w={100} src={'./sudadera-con-capucha.png'} alt={''}/><Text pt='150' position={'absolute'}>CABALLEROS</Text></Tab>
    <Tab _selected={{ color: 'white', bg: 'red.400' }} w='200' pb='12'><Image w={100} src={'./ropa.png'} alt={''}/><Text pt='150' position={'absolute'}>NIÑAS</Text></Tab>
    </SimpleGrid>
  
  </TabList>
  <TabPanels pl={[0,10]} pr={[0,10]}>

    <TabPanel backgroundColor={'blue.500'}>
      
    <Ropa_d ropad= {ropad}/>
  
    </TabPanel>
    <TabPanel backgroundColor={'green.400'}>

      <Ropa_n ropan={ropan}/>
    

    </TabPanel>
    <TabPanel backgroundColor={'yellow.400'}>
      
    <Ropa_c ropac={ropac}/>

    </TabPanel>
    <TabPanel backgroundColor={'red.400'}>
      
    

    </TabPanel>
  </TabPanels>
</Tabs>

        </Layout>
        
    )
}

export const getStaticProps: GetStaticProps = async () =>{
    const ropad = await apid.List();
    const ropan = await apin.List();
    const ropac= await apic.List();
    return{
      props: {
        ropad,
        ropan,
        ropac,
      },
      revalidate: 2, 
    }
  }



export default listado;