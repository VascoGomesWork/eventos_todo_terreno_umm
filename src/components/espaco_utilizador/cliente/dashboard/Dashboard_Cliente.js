import React from "react";
import Head from "../Head";
import Nav from "../Nav";
import Side_Nav from "../Side_Nav";
import Informacoes_CLiente from "./Informacoes_Cliente";
import Footer from "../Footer";
import Script from "../Script";
import {useLocation} from "react-router-dom";

export default function Dashboard_Cliente(){

    //How to use Global Variable in React -> https://stackoverflow.com/questions/35577551/how-to-use-global-variables-in-react-native
    var eventoId = useLocation().state;
    global.eventoId = eventoId
    //console.log("ID DASHBOARD = " + JSON.stringify(useLocation()))
    //console.log("ID EVENTO DASHBOARD = " + global.eventoId)
    return(

        <div>

            <Head />

            <body class="sb-nav-fixed">

                <Nav />

                <div id="layoutSidenav">

                    <Side_Nav />

                    <div id="layoutSidenav_content">

                        <Informacoes_CLiente />

                        <Footer />

                    </div>
                </div>

                <Script />

            </body>

        </div>

    )
}
