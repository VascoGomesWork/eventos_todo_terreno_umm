import React from "react";

export default function Form_Participante(){

    return(
        <div className="col-xl-6">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-check me-1"/>
                    Insira Mais Alguns Dados
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-sm-1">
                                <label>Telefone: </label>
                            </div>
                            <div className="col-md-8">
                                <input/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Local de Residência: </label>
                            </div>
                            <div className="col-md-8">
                                <input/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <label>Locais de Intresse a Visitar no Evento: </label>
                            </div>
                            <div className="col-md-5">
                                <input/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <label>Matrícula do seu UMM: </label>
                            </div>
                            <div className="col-sm-5">
                                <input/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <label>Número de Acompanhantes: </label>
                            </div>
                            <div className="col-sm-5">
                                <input/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}