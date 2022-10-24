import React from "react";
import Head from "../Head";
import Nav from "../Nav";
import Side_Nav from "../Side_Nav";
import Tabela_Eventos_Disponiveis from "../Tabela_Eventos_Disponiveis";
import Footer from "../Footer";
import Scripts from "../Scripts";

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
                            <h1 class="mt-4">Ver Eventos Todo-o-Terreno UMM</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item active">Nesta secção podem ser visualizados todos os eventos todo-o-terreno, ou então procurando pelo local ou ainda a data.</li>
                            </ol>

                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-table me-1"></i>
                                    DataTable Example
                                </div>

                                <Tabela_Eventos_Disponiveis />

                            </div>
                        </div>
                    </main>

                    <Footer />

                </div>
            </div>

                <Scripts />

            </body>
        </div>

)
}