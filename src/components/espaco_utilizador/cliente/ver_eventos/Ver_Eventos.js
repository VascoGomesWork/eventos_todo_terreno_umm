import React from "react";
import Script from "../Script";
import Footer from "../Footer";
import Head from "../Head";
import Nav from "../Nav";
import Side_Nav from "../Side_Nav";
import Tabela_Eventos_Disponiveis from "../Tabela_Eventos_Disponiveis";


export default function Ver_Eventos(){

    return(
<div>

    <Head />

    <body class="sb-nav-fixed">

        <Nav />

        <div id="layoutSidenav">

            <Side_Nav />

            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Ver Eventos Todo-o-Terreno</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Esta secção é ver os eventos todo-o-terreno que já se inscreveu</li>
                        </ol>

                        <h3>Selecione o evento que pretende participar da tabela seguinte</h3>

                        <Tabela_Eventos_Disponiveis />

                    </div>
                </main>

                <Footer />

            </div>
        </div>
            <Script />
    </body>
</div>

)
}