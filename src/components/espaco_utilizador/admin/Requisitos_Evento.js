import React from "react";

export default function Requisitos_Evento(){
    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-form me-1"></i>
                Insira os Requisitos do Evento
            </div>
            <div className="card-body">
                {/*-- Comment form--*/}
                <form className="mb-4"><textarea className="form-control" rows="3"
                                                 placeholder="Requisitos do Evento"></textarea></form>
            </div>
        </div>
    )
}