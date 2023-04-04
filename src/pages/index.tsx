import { Text } from "@chakra-ui/react";
import Layout from "component/layout";
import Ropa_n from "@/product/product_n";

import { Product } from "@/product/apisproduct/type";
import api from "@/product/apisproduct/api";
import { GetStaticProps } from "next";

interface Props{
  products:Product[];
}

const Index: React.FC<Props> = ({products}) => {
  return(
    <Layout>

          <Text>HOLA SOY LA NUEVA PAGINA WEB DE LA TIENDA 2.0</Text>

          <Ropa_n products =  {products}/>

    </Layout>

  )
}

export const getStaticProps: GetStaticProps = async () =>{
  const products = await api.List();
  return{
    props: {
      products,
    },
    revalidate: 2, 
  }
}

export default Index;