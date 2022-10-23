import React from "react"
import Nav from "./Nav"
import Header from "./Header"
import Servicos from "./Servicos";
import Eventos from "./Eventos"
import Sobre from "./Sobre"
import Footer from "./Footer"
import Head from "./Head";
import Scripts from "./Scripts";

export default function Index(){
    return(
    <div>
    <Head />
    <body id="page-top">

        <Nav />
        
        <Header />
        
        <Servicos />
        
        <Eventos />
        
        <Sobre />
        
        <Footer />
        
        <Scripts />

    </body>
    </div>
    )
}
