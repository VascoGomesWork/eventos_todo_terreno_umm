import React from "react";
import Head from "../Head";
import Nav from "../Nav";
import Side_Nav from "../Side_Nav";
import Informacoes_Admin from "./Informacoes_Admin";
import Footer from "../Footer";
import Scripts from "../Scripts";

export default function Dashboard_Admin(){

    return(

    <Head />,
    <body class="sb-nav-fixed">

    <Nav />

    <div id="layoutSidenav">

        <Side_Nav />

        <div id="layoutSidenav_content">
            <main>

                <Informacoes_Admin />

            </main>

            <Footer />

        </div>
    </div>

        <Scripts />

    </body>

)
}