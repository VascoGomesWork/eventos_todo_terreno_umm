import React from "react";


export default function Requisitos_Evento(props){

    //console.log("Eventos Atributes in Requisitos Eventos = " + props.requisitos)
    //console.log("EVENTOS ATRIBUTES TESTE")

    return(
        <div className="col-xl-6">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-check me-1"/>
                    Requisitos Evento Todo-o-Terreno
                </div>
                <div className="card-body">Para este passeio irá ser necessário:
                    <ul>
                        <li>{props.requisitos}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}