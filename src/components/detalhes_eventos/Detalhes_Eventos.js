import React from "react";
import Evento from "./Evento";
import Footer from "./Footer";
import Scripts from "./Scripts";
import Head from "./Head";
import Nav from "./Nav";
import {useLocation} from "react-router-dom";

export default function Detalhes_Eventos(){

    return(
        <div>

            <Head />

            <Nav />

            <Evento />

            <Footer />

            <Scripts />

        </div>

)
}
