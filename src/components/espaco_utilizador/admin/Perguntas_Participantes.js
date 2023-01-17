import React from "react";

export default function Perguntas_Participantes(){
    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-calendar me-1"></i>
                Perguntas aos Participantes
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <label>Telefone</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <label>Local de Residência</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <label>Locais de Intresse a Visitar no Evento</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <label>Matrícula do seu UMM</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <label>Número de Acompanhantes</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text"/>
                    </div>
                </div>
            </div>
        </div>
    )
}