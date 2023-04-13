import { Center, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";


const Footer = () => {
    return(
        <Stack my={'5'} h={'10vh'} justifyContent={'center'} bgColor={'gray.700'}>
            <Center><Link href='https://wa.me/3875057208'><Text color={'whatsapp.100'}>Creado por Rafael-Baldiviezo has click para mas info</Text></Link></Center>
        </Stack>
    );

    
};

export default Footer;