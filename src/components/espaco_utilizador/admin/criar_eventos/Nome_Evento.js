import React, {useState} from "react"

export default function Nome_Evento(){

    const [nome, setNome] = useState("")
    global.nome = nome

    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-location me-1"></i>
                Insira o Nome do Evento <label><h2 id="asterisk">*</h2></label>
            </div>
            <div className="card-body">
                <input className="form-control" type="text" id="formFile" onChange={(e) => setNome((e.target.value))}/>
            </div>
        </div>
    )
}