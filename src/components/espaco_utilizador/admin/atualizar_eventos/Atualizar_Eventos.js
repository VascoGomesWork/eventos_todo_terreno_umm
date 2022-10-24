import React from "react";
import Head from "../Head";
import Nav from "../Nav";
import Side_Nav from "../Side_Nav";
import Tabela_Eventos_Disponiveis from "../Tabela_Eventos_Disponiveis";
import Selecionar_Localizacao_Evento from "../Selecionar_Localizacao_Evento";
import Calendario_Evento from "../Calendario_Evento";
import Requisitos_Eventos from "../../../detalhes_eventos/Requisitos_Eventos";
import Comentarios_Eventos from "../../../detalhes_eventos/Comentarios_Eventos";
import Footer from "../Footer";
import Scripts from "../Scripts";

export default function Atualizar_Eventos(){

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
                            <h1 class="mt-4">Atualizar Eventos Todo-o-Terreno UMM</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item active">Nesta secção é possível alterar informações acerca dos eventos todo-o-terreno.</li>
                            </ol>

                                <Tabela_Eventos_Disponiveis />

                                <Selecionar_Localizacao_Evento />

                                <Calendario_Evento />

                                <Requisitos_Eventos />

                                <Comentarios_Eventos />

                            <div>
                                <button>Atualizar Evento Todo-o-Terreno</button>
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