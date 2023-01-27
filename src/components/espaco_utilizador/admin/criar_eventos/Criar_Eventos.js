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
import Alert from "../../../Alert";
import Nome_Evento from "./Nome_Evento";
import Cookies from "universal-cookie";

export default function Criar_Eventos(){

    const [alert, setAlert] = useState(false)
    const [alertFailed, setAlertFailed] = useState(false)
    const cookies = new Cookies();

    function criarEvento() {

        console.log("Nome = " + global.nome)
        console.log("Imagem = " + global.imagem)
        console.log("Data Inicio = " + global.data_inicio)
        console.log("Data Fim = " + global.data_fim)
        console.log("Localidade Inicio = " + global.localidade_inicio)
        console.log("Pergunta Evento 1 = " + global.pergunta_evento_1)
        console.log("Pergunta Evento 2 = " + global.pergunta_evento_2)
        console.log("Pergunta Evento 3 = " + global.pergunta_evento_3)
        console.log("Pergunta Participante 1 = " + global.pergunta_participante_1)
        console.log("Pergunta Participante 2 = " + global.pergunta_participante_2)
        console.log("Localidade Fim = " + global.localidade_fim)
        console.log("Requisitos = " + global.requisitosEvento)
        console.log("Descrição = " + global.descricaoEvento)
        console.log("Participante Cookie = " + cookies.get("organizaodor_token"))


        fetch(`http://localhost:8000/api/eventos/store`, {
            method: 'POST',
            headers: {
                /* Put Token Given in Login */
                'Authorization': 'Bearer '+ cookies.get("organizaodor_token"),
                'Content-Type': 'application/json;charset=utf-8',
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "nome": global.nome,
                "imagem": global.imagem,
                "data_inicio": global.data_inicio,
                "data_fim": global.data_fim,
                "localidade_inicio": global.localidade_inicio,
                "pergunta_evento_1": global.pergunta_evento_1,
                "pergunta_evento_2": global.pergunta_evento_2,
                "pergunta_evento_3": global.pergunta_evento_3,
                "pergunta_participante_1": global.pergunta_participante_1,
                "pergunta_participante_2": global.pergunta_participante_2,
                "localidade_fim": global.localidade_fim,
                "requisitos": global.requisitosEvento,
                "descricao": global.descricaoEvento,
                "id_organizador_fk": 1
            }), // body data type must match "Content-Type" header
        }).then((response) => {
            return response.json();
        }).then((parsedData) => {
            console.log("Parsed Data = " + JSON.stringify(parsedData))

            //Failed to Create an Event
            if(parsedData.errors || parsedData.message === "Unauthenticated."){
                //Sets Alert
                setAlertFailed(prevState => !prevState)

                //Makes Alert Disapear
                setTimeout(() => {
                    setAlertFailed(prevState => !prevState)
                }, 3000)
            } else {

                //Sets Alert
                setAlert(prevState => !prevState)

                //Makes Alert Disapear
                setTimeout(() => {
                    setAlert(prevState => !prevState)
                }, 3000)

            }

        })
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

                        <Nome_Evento/>

                        <Image_Chooser />

                        <Selecionar_Localizacao_Evento />

                        <Calendario_Evento />

                        <Requisitos_Evento />

                        <Descricao_Evento />

                        <Perguntas_Participantes />

                        <div id="criar_Evento">
                            <button className="btn btn-primary" onClick={criarEvento}>Criar Evento Todo-o-Terreno</button>
                            {alertFailed && <Alert type="0" message="Preencha Todos os Campos"/>}
                            {alert && <Alert type="1" message="Evento Criado com Sucesso"/>}
                        </div>

                    </div>
                </main>
                <br/>
                <Footer />

            </div>
        </div>

            <Scripts />

        </body>
    </div>

)
}