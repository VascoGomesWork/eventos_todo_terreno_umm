import React, {useEffect, useState} from "react";
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
import Requisitos_Evento from "./Requisitos_Evento";
import Descricao_Evento from "./Descricao_Evento";
import Form_Participante from "./Form_Participante";
import Alert from "../../../Alert";
import Cookies from "universal-cookie";



export default function Inscrever_Evento(){

    console.log("INSCREVER EVENTO ID = " + useLocation().state)
    var id = useLocation().state;

    const [eventoAtributes, setEventosAtributes] = useState([])
    const [alert, setAlert] = useState(false)
    const [alertFailed, setAlertFailed] = useState(false)
    const cookies = new Cookies();

    useEffect(() => {
       fetch("//localhost:8000/api/eventos/show/" + id)
          .then((res) => res.json())
          .then((data) => {
              console.log("Eventos DATA = " + JSON.stringify(data))
              //Sets Eventos Atributes with variable Data
              setEventosAtributes(data)
          });
    }, []);

    function inscreverEvento() {

    }

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

                            <h3>Inscreva-se no Evento Preenchendo os Seguintes Campos</h3>


                            <div class="row">

                                <Imagem_evento iamgem={eventoAtributes.imagem}/>

                                <Descricao_Evento descricao={eventoAtributes.descricao}/>

                                <Requisitos_Evento requisitos={eventoAtributes.requisitos}/>

                            </div>

                            <Localizacao_Evento localizacao={[eventoAtributes.localidade_inicio, eventoAtributes.pontos_passagem, eventoAtributes.localidade_fim]}/>

                            {/* FIX */}
                            <Calendario_Evento eventosAtributes={eventoAtributes}/>

                            <Form_Participante />

                            <Comentarios_Eventos eventosAtributes={eventoAtributes}/>

                            <div id="criar_Evento">
                                <button className="btn btn-primary" onClick={inscreverEvento}>Inscrever em Evento Todo-o-Terreno</button>
                                {alertFailed && <Alert type="0" message="Preencha Todos os Campos"/>}
                                {alert && <Alert type="1" message="Evento Criado com Sucesso"/>}
                            </div>
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
