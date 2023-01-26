import React, {useState} from "react";

export default function Perguntas_Participantes(){

    const [pergunta1, setPergunta1] = useState("")
    const [pergunta2, setPergunta2] = useState("")
    const [pergunta3, setPergunta3] = useState("")
    const [pergunta4, setPergunta4] = useState("")
    const [pergunta5, setPergunta5] = useState(0)
    global.pergunta1 = pergunta1
    global.pergunta2 = pergunta2
    global.pergunta3 = pergunta3
    global.pergunta4 = pergunta4
    global.pergunta5 = pergunta5

    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-calendar me-1"></i>
                Perguntas aos Participantes
            </div>
            <div className="card-body">
                <div className="col-md-5">
                    <label>Pergunta Relacionada com Participante</label>
                </div>
                <div className="row">

                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e) => setPergunta1(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e) => setPergunta2(e.target.value)}/>
                    </div>
                </div>

                <div className="col-md-5">
                    <label>Pergunta Relacionada com Inscrição no Evento Participante</label>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e) => setPergunta3(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e) => setPergunta4(e.target.value)}/>
                    </div>
                </div>

                <div className="col-md-5">
                    <label>Pergunta Relacionada com o Evento</label>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e) => setPergunta5(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}