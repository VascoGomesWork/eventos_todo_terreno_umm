import React from "react";
import Head from "../Head";
import Nav from "../Nav";
import Side_Nav from "../Side_Nav";
import Tabela_Eventos_Disponiveis from "../Tabela_Eventos_Disponiveis";
import Imagem_evento from "./Imagem_Evento";
import Requisitos_Eventos from "../../../detalhes_eventos/Requisitos_Eventos";
import Localizacao_Evento from "./Localizacao_Evento";
import Calendario_Evento from "./Calendario_Evento";
import Comentarios_Eventos from "../../../detalhes_eventos/Comentarios_Eventos";
import Footer from "../Footer";
import Script from "../Script";
import {useLocation} from "react-router-dom";


export default function Inscrever_Evento(){

    console.log("INSCREVER EVENTO ID = " + useLocation().state)

    return(

        <div>

            <Head />

            <body class="sb-nav-fixed">

                <Nav />

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">

                    <Side_Nav />

                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                            <h1 class="mt-4">Inscrição em Eventos</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item active">Esta secção é para ser realizada a inscrição nos eventos todo-o-terreno</li>
                            </ol>

                            <h3>Selecione o evento que pretende participar da tabela seguinte</h3>


                            <div class="row">

                                <Imagem_evento />

                                <Requisitos_Eventos />

                            </div>

                            <Localizacao_Evento />

                            {/* FIX */}
                            <Calendario_Evento />


                            <Comentarios_Eventos />


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
