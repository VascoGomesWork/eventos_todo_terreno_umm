import React, {useState} from "react";

export default function Requisitos_Evento(){

    const [requisitosEvento, setRequisitosEvento] = useState("")
    global.requisitosEvento = requisitosEvento

    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-calendar me-1"></i>
                Insira os Requisitos do Evento
            </div>
            <div className="card-body">
                <input type="text" onChange={(e) => setRequisitosEvento(e.target.value)}/>
            </div>
        </div>
    )
}