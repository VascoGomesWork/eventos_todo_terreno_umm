import React, {useState} from "react";

export default function Perguntas_Participantes(){

    const [telefone, setTelefone] = useState("")
    const [localResidencia, setLocalResidencia] = useState("")
    const [locaisIntresse, setLocaisIntresse] = useState("")
    const [matriculaUMM, setMatriculaUMM] = useState("")
    const [numeroAcompanhantes, setNumeroAcompanhantes] = useState(0)
    global.telefone = telefone
    global.localResidencia = localResidencia
    global.locaisIntresse = locaisIntresse
    global.matriculaUMM = matriculaUMM
    global.numeroAcompanhantes = numeroAcompanhantes

    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-calendar me-1"></i>
                Perguntas aos Participantes
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        <input type="text" onChange={(e) => setTelefone(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <input type="text" onChange={(e) => setLocalResidencia(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <input type="text" onChange={(e) => setLocaisIntresse(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <input type="text" onChange={(e) => setMatriculaUMM(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <input type="text" onChange={(e) => setNumeroAcompanhantes(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}