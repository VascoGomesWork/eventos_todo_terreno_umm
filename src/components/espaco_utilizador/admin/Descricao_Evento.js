import React from "react";

export default function Descricao_Evento(){
    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-calendar me-1"></i>
                Faça uma Breve Descrição do Evento
            </div>
            <div className="card-body">
                <input type="text"/>
            </div>
        </div>
    )
}