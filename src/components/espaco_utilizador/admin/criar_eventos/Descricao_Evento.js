import React, {useState} from "react";

export default function Descricao_Evento(){

    const [descricaoEvento, setDescricaoEvento] = useState("")
    global.descricaoEvento = descricaoEvento

    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-calendar me-1"></i>
                Faça uma Breve Descrição do Evento
            </div>
            <div className="card-body">
                <input type="text" onChange={(e) => setDescricaoEvento(e.target.value)}/>
            </div>
        </div>
    )
}