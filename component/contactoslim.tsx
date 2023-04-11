import {Stack, Grid, GridItem, Img, Square, Heading, Divider } from "@chakra-ui/react"


const Contactoslim = () => {
    return(
        <Stack>

<Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={4}
  p={'2'}
  mb={20}
>
  <GridItem  borderWidth='1px'
       borderColor={'red'}
       boxShadow='dark-lg'
       borderRadius={'md'} alignItems={'center'} rowSpan={2} colSpan={2} bg='papayawhip'>
        <Square>
            <Img width={'100px'} src='./map.png'/>
        </Square>    
        <Square>
            <Heading p={2} size={'md'}>los trocales calle xxxx casa xx</Heading>
        </Square>
        <Divider/>
        <Square>
            <Heading p={2} size={'sm'}>Horario de atencion <br/> 08 a 12 - 16 a 20</Heading>
        </Square>
    
    </GridItem>
  <GridItem  borderWidth='1px'
       borderColor={'blue'}
       boxShadow='dark-lg'
       borderRadius={'md'} alignItems={'center'} colSpan={2} bg='papayawhip' >
    <Square>
    <Img src='./facebook.png'/>
    </Square>  
    <Square>
    <Heading p={2} size={'lg'}>vistanos en facebook</Heading>
    </Square>
  </GridItem>
  <GridItem  borderWidth='1px'
       borderColor={'green'}
       boxShadow='dark-lg'
       borderRadius={'md'} alignItems={'center'} colSpan={2} bg='papayawhip' >
    <Square>
    <Img src='./whatsapp.png'/>
    </Square>  
    <Square>
    <Heading p={2} size={'lg'}>contactanos</Heading>
    </Square>
  </GridItem>


 
</Grid>
          
        </Stack>
    );
};
export default Contactoslim;