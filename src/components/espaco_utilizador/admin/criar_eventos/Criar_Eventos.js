import React, {useState} from "react";
import Head from "../Head";
import Nav from "../Nav";
import Side_Nav from "../Side_Nav";
import Selecionar_Localizacao_Evento from "./Selecionar_Localizacao_Evento";
import Calendario_Evento from "./Calendario_Evento";

import Footer from "../Footer";
import Scripts from "../Scripts";
import Descricao_Evento from "./Descricao_Evento";
import Perguntas_Participantes from "./Perguntas_Participantes";
import Requisitos_Evento from "./Requisitos_Evento";
import Image_Chooser from "./Image_Chooser";

export default function Criar_Eventos(){

    function criarEvento() {
        console.log("CRIAR EVENTO - REQUISITOS = " + global.requisitosEvento)
        console.log("CRIAR EVENTO - DESCRICAO = " + global.descricaoEvento)

        console.log("CRIAR EVENTO - TELEFONE = " + global.pergunta1)
        console.log("CRIAR EVENTO - LOCAL RESIDENCIA = " + global.pergunta2)
        console.log("CRIAR EVENTO - LOCAIS INTRESSE = " + global.pergunta3)
        console.log("CRIAR EVENTO - MATRICULA UMM = " + global.pergunta4)
        console.log("CRIAR EVENTO - NUMERO ACOMPANHANTES = " + global.pergunta5)
    }

    return(

        <div>
        <body class="sb-nav-fixed">

            <Nav />

        <div id="layoutSidenav">

            <Side_Nav />

            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Criação de Eventos Todo-o-Terreno UMM</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Para criar um evento todo-o-terreno, é necessário escolher a localização do evento no mapa, de seguida selecionar a data do evento no calendário, posteriormente enumerar os requisitos do mesmo e por último fazer uma breve descrição do evento, e criar o evento</li>
                        </ol>

                        <Image_Chooser />

                        <Selecionar_Localizacao_Evento />

                        <Calendario_Evento />

                        <Requisitos_Evento />

                        <Descricao_Evento />

                        <Perguntas_Participantes />

                        <div>
                            <button className="btn btn-primary" onClick={criarEvento}>Criar Evento Todo-o-Terreno</button>
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