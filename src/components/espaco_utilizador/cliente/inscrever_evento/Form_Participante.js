import React, {useState} from "react";

export default function Form_Participante(props){

    const [respostaParticipante1, setRespostaParticipante1] = useState("")
    const [respostaParticipante2, setRespostaParticipante2] = useState("")
    const [respostaEvento1, setRespostaEvento1] = useState("")
    const [respostaEvento2, setRespostaEvento2] = useState("")
    const [respostaEvento3, setRespostaEvento3] = useState("")

    global.respostaEvento1 = respostaEvento1
    global.respostaEvento2 = respostaEvento2
    global.respostaEvento3 = respostaEvento3
    global.respostaParticipante1 = respostaParticipante1
    global.respostaParticipante2 = respostaParticipante2

    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-date me-1"></i>
                Perguntas aos Participantes <label><h2 id="asterisk">*</h2></label>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <label>{props.perguntaEvento1}</label>
                    </div>
                     <div className="col-md-8">
                        <input className="form-control" type="text" onChange={(e) => setRespostaEvento1(e.target.value)}/>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>{props.perguntaEvento2}</label>
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" type="text" onChange={(e) => setRespostaEvento2(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label>{props.perguntaEvento3}</label>
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" type="text" onChange={(e) => setRespostaEvento3(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label>{props.perguntaParticipante1}</label>
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" type="text" onChange={(e) => setRespostaParticipante1(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label>{props.perguntaParticipante2}</label>
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" type="text" onChange={(e) => setRespostaParticipante2(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}