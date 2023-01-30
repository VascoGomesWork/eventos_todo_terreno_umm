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
import Comentarios_Evento from "./Comentarios_Evento";



export default function Inscrever_Evento(){

    console.log("INSCREVER EVENTO ID = " + useLocation().state)
    var id = useLocation().state;

    const [eventoAtributes, setEventosAtributes] = useState([])
    const [eventoId, setEventoId] = useState("")
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [requisitos, setRequisitos] = useState("")
    const [descricao, setDescricao] = useState("")
    const [localidadeInicio, setLocalidadeInicio] = useState("")
    const [localidadeFim, setLocalidadeFim] = useState("")
    const [dataInicio, setDataInicio] = useState("")
    const [dataFim, setDataFim] = useState("")
    const [perguntaEvento1, setPerguntaEvento1] = useState("")
    const [perguntaEvento2, setPerguntaEvento2] = useState("")
    const [perguntaEvento3, setPerguntaEvento3] = useState("")
    const [perguntaParticipante1, setPerguntaParticipante1] = useState("")
    const [perguntaParticipante2, setPerguntaParticipante2] = useState("")
    const [comentariosEventoList, setComentariosEventoList] = useState("")
    let conentariosArray = []
    const [alert, setAlert] = useState(false)
    const [alertFailed, setAlertFailed] = useState(false)
    const cookies = new Cookies();
    //participante_token, participante_nome

    React.useEffect(() => {

       fetch("//localhost:8000/api/eventos/show/" + id)
          .then((res) => res.json())
          .then((data) => {
              console.log("Eventos DATA = " + JSON.stringify(data))
              //Sets Eventos Atributes with variable Data
              setEventosAtributes(data)
              setEventoId(data[0].id)
              setImagem(data[0].imagem)
              setNome(data[0].nome)
              setRequisitos(data[0].requisitos)
              setDescricao(data[0].descricao)
              setLocalidadeInicio(data[0].localidade_inicio)
              setLocalidadeFim(data[0].localidade_fim)
              setDataInicio(data[0].data_inicio)
              setDataFim(data[0].data_fim)
              setPerguntaEvento1(data[0].pergunta_evento_1)
              setPerguntaEvento2(data[0].pergunta_evento_2)
              setPerguntaEvento3(data[0].pergunta_evento_3)
              setPerguntaParticipante1(data[0].pergunta_participante_1)
              setPerguntaParticipante2(data[0].pergunta_participante_2)
              for (let k = 1; k < data.length; k++){
                  conentariosArray.push(data[k].comentario)
              }
              setComentariosEventoList(conentariosArray)
          });
    }, []);

    function inscreverEvento() {
        fetch(`http://localhost:8000/api/inscrever_eventos/store`, {
            method: 'POST',
            headers: {
                /* Put Token Given in Login */
                'Authorization': 'Bearer '+ cookies.get("participante_token"),
                'Content-Type': 'application/json;charset=utf-8',
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "resposta_evento_1": global.respostaEvento1,
                "resposta_evento_2": global.respostaEvento2,
                "resposta_evento_3": global.respostaEvento3,
                "resposta_participante_1": global.respostaParticipante1,
                "resposta_participante_2": global.respostaParticipante2,
                "id_participante_fk": cookies.get("participante_id"),
                "id_evento_fk": eventoId,
                "comentario": global.comentario,
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
                                <Imagem_evento imagem={imagem} nome={nome}/>

                                <Requisitos_Evento requisitos={requisitos}/>

                            </div>

                            <Descricao_Evento descricao={descricao}/>

                            <Localizacao_Evento localizacao_inicio={localidadeInicio} localizacao_fim={localidadeFim}/>

                            {/* FIX */}
                            <Calendario_Evento data_inicio={dataInicio} data_fim={dataFim}/>

                            <Form_Participante perguntaEvento1={perguntaEvento1} perguntaEvento2={perguntaEvento2} perguntaEvento3={perguntaEvento3} perguntaParticipante1={perguntaParticipante1} perguntaParticipante2={perguntaParticipante2}/>

                            <Comentarios_Evento comentariosEvento={comentariosEventoList}/>

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
