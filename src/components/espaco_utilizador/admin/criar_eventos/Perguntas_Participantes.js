import React, {useState} from "react";

export default function Perguntas_Participantes(){

    const [pergunta_evento_1, setPerguntaEvento1] = useState("")
    const [pergunta_evento_2, setPerguntaEvento2] = useState("")
    const [pergunta_evento_3, setPerguntaEvento3] = useState("")
    const [pergunta_participante_1, setPerguntaParticipante1] = useState("")
    const [pergunta_participante_2, setPerguntaParticipante2] = useState(0)
    global.pergunta_evento_1 = pergunta_evento_1
    global.pergunta_evento_2 = pergunta_evento_2
    global.pergunta_evento_3 = pergunta_evento_3
    global.pergunta_participante_1 = pergunta_participante_1
    global.pergunta_participante_2 = pergunta_participante_2

    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-date me-1"></i>
                Perguntas aos Participantes <label><h2 id="asterisk">*</h2></label>
            </div>
            <div className="card-body">

                <h6>Estas perguntas são direcionadas ao participante quando este se for inscrever no evento, irá ter de responder às mesmas.</h6>

                <label>Pergunta Relacionada com o Evento</label>
                <input className="form-control" type="text" onChange={(e) => setPerguntaEvento1(e.target.value)}/>
                <input className="form-control" type="text" onChange={(e) => setPerguntaEvento2(e.target.value)}/>
                <input className="form-control" type="text" onChange={(e) => setPerguntaEvento3(e.target.value)}/>

                <label>Pergunta Relacionada com o Participantes</label>
                <input className="form-control" type="text" onChange={(e) => setPerguntaParticipante1(e.target.value)}/>
                <input className="form-control" type="text" onChange={(e) => setPerguntaParticipante2(e.target.value)}/>
            </div>
        </div>
    )
}