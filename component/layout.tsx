import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Spacer } from "@chakra-ui/react";

interface Props {
    children?:ReactNode
}

const Layout = ({children, ...props}: Props) =>{
    return(
        <>

        <Navbar/>

        <main {...props}>{children}</main>


        <Footer/>
        
        </>
    )
}

export default Layout;