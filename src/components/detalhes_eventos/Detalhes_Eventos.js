import React, {useState} from "react";
import Evento from "./Evento";
import Footer from "./Footer";
import Scripts from "./Scripts";
import Head from "./Head";
import Nav from "./Nav";
import {Link, useLocation} from "react-router-dom";
import Imagem_evento from "../espaco_utilizador/cliente/inscrever_evento/Imagem_Evento";
import Descricao_Evento from "./Descricao_Evento";
import Localizacao_Evento from "../espaco_utilizador/cliente/inscrever_evento/Localizacao_Evento";
import Comentarios_Eventos from "./Comentarios_Eventos";
import Requisitos_Eventos from "./Requisitos_Eventos";
import Requisitos_Evento from "../espaco_utilizador/cliente/inscrever_evento/Requisitos_Evento";
import Calendario_Evento from "../espaco_utilizador/cliente/inscrever_evento/Calendario_Evento";
import Comentarios_Evento from "../espaco_utilizador/cliente/inscrever_evento/Comentarios_Evento";

export default function Detalhes_Eventos(){

    const [eventoId, setEventoId] = useState(parseInt(window.location.pathname.substr(18)))
    global.eventoId = eventoId
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

    React.useEffect(() => {

        fetch("//localhost:8000/api/eventos/show/" + eventoId)
            .then((res) => res.json())
            .then((data) => {
                console.log("Eventos DATA = " + JSON.stringify(data))
                //Sets Eventos Atributes with variable Data
                //setEventosAtributes(data)
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

    return(
        <div>

            <Head />

            <Nav />

            <div className="container mt-5">
                <div className="row" id="passeio_todo_o_terreno">

                        <br/>
                        <Imagem_evento imagem={imagem} nome={nome}/>

                        <br/>
                        <Requisitos_Evento requisitos={requisitos}/>


                    <Descricao_Evento descricao={descricao}/>

                    <div className="col-md-6">
                        <Calendario_Evento data_inicio={dataInicio} data_fim={dataFim}/>
                    </div>

                    <div className="col-md-6">
                        <Localizacao_Evento localizacao_inicio={localidadeInicio} localizacao_fim={localidadeFim}/>
                    </div>

                    <Comentarios_Evento comentariosEvento={comentariosEventoList} inscreverEvento={0}/>

                    {/* How to Keep Text in the Same Line -> https://stackoverflow.com/questions/26951488/how-do-i-keep-my-text-and-my-link-on-the-same-line-in-html */}
                    <h5 id="display">Para se Inscrever no evento, faça login no <Link id="display" to={'../Login'} state={eventoId} class="nav-link" title="Project Name">Espaço do Utilizador</Link> com a sua conta</h5>

                </div>
            </div>

            <Footer />

            <Scripts />

        </div>

)
}
