import React from "react";
import Head from "../Head";
import Nav from "../Nav";
import Side_Nav from "../Side_Nav";
import Informacoes_CLiente from "./Informacoes_Cliente";
import Footer from "../Footer";
import Script from "../Script";

export default function Dashboard_Cliente(){

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
