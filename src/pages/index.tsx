import { Text } from "@chakra-ui/react";
import Layout from "component/layout";

import Ropa_d from "@/product/product_d";
import Ropa_n from "@/product/product_n";
import Ropa_c from "@/product/product_c";

import { Productc } from "@/product/apisproduct/type";
import apic from "@/product/apisproduct/apic";

import { Productn } from "@/product/apisproduct/type";
import apin from "@/product/apisproduct/apin";

import { Productd } from "@/product/apisproduct/type";
import apid from "@/product/apisproduct/apid";

import { GetStaticProps } from "next";


interface Props{
  
  ropad:Productd[];
  ropan: Productn[];
  ropac: Productc[];
}

const Index: React.FC<Props> = ({ropad,ropan,ropac}) => {
  return(
    <Layout>

          <Text>HOLA SOY LA NUEVA PAGINA WEB DE LA TIENDA 2.0</Text>

          
          <Ropa_d ropad= {ropad}/>
          <Ropa_n ropan={ropan} />
          <Ropa_c ropac={ropac}/>

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

export default Index;