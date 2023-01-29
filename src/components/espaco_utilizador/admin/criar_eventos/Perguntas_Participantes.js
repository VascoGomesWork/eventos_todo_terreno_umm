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
                Perguntas aos Participantes
            </div>
            <div className="card-body">
                <div className="col-md-5">
                    <label>Pergunta Relacionada com o Evento</label>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <input className="form-control" type="text" onChange={(e) => setPerguntaParticipante2(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-5">
                    <label>Pergunta Relacionada com Participante</label>
                </div>
                <div className="row">

                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e) => setPerguntaEvento1(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e) => setPerguntaEvento2(e.target.value)}/>
                    </div>
                </div>

                <div className="col-md-5">
                    <label>Pergunta Relacionada com Inscrição no Evento Participante</label>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e) => setPerguntaEvento3(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e) => setPerguntaParticipante1(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}