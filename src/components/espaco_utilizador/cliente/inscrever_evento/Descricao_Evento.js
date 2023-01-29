import React from "react";


export default function Descricao_Evento(props){

    return(

            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-image me-1"></i>
                    Descrição do Evento
                </div>
                <div className="card-body">
                    <p>{props.descricao}</p>
                </div>
            </div>
    )
}