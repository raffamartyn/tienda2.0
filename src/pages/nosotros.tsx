import { Stack, SimpleGrid, GridItem, Image, Card, Text, Heading } from "@chakra-ui/react";
import Contactoslim from "component/contactoslim";
import Layout from "component/layout";

const nosotros = () => {
    return(
        <Layout>

        <Stack pb={'60px'} pt={'50px'}>
                <SimpleGrid gap={'1'} columns={[1, 2, 3]}>
                    <GridItem
                    my={'4'}
                    ml={['30px','60px']}
                    border={'4px'} borderColor={'red.300'}
                    width={'280px'}
                    height={'500px'}
                    
                    data-aos="flip-up"
                    p={[2, 2, 6]}>
                    

                        <Image
                    
                    src="./imagn.png"
                    objectFit={'cover'}
                    width={'100vh   '}
                    
                    m={'0'}
                    boxSize={'450px'}
                    
                    
                    
                    />
                    
                
                    </GridItem >
                    <GridItem pt={'10px'} colSpan={2}>
                            <Card my={'2'} mt={'3'}  p={[2, 2, 2]} border={'4px'} borderColor={'green.300'}>
                    <Heading p={'1'}  textAlign={'center'}>BIENVENIDOS!!!</Heading>
                    <Text fontSize={'xl'}>Bienvenido a nuestra tienda en línea de ropa de moda. Nos dedicamos a la venta de ropa de alta calidad y con diseños únicos que se ajustan a tus necesidades y gustos.

En nuestra tienda, encontrarás una amplia variedad de ropa para todas las edades y ocasiones, desde ropa casual hasta trajes de fiesta y elegantes vestidos para ocasiones especiales.<br/> También ofrecemos una amplia gama de accesorios de moda, como bolsos, zapatos y joyas para complementar tus looks.

Todos nuestros productos son cuidadosamente seleccionados y fabricados con los mejores materiales para garantizar la durabilidad y calidad de cada prenda.<br/> Además, nuestro equipo de diseñadores trabaja constantemente en nuevas colecciones para mantenernos al día con las últimas tendencias de la moda.

Ofrecemos una experiencia de compra en línea fácil y segura. Nuestro sitio web es fácil de navegar.<br/> Aceptamos diversas formas de pago y ofrecemos envío gratuito en pedidos superiores a $50.

En nuestra página de inicio, puedes ver las últimas colecciones y promociones. También puedes seguirnos en nuestras redes sociales para estar al tanto de las últimas noticias y novedades.

En resumen, somos una tienda en línea dedicada a ofrecer la mejor calidad en ropa y accesorios de moda. Nuestro objetivo es que te sientas cómodo y seguro al comprar con nosotros y que encuentres la ropa perfecta para ti. ¡Gracias por visitarnos!  </Text>
                </Card>
                    </GridItem>
        

                </SimpleGrid>
            
            </Stack>
            <Contactoslim/>

        </Layout>
     
    );
};

export default nosotros;