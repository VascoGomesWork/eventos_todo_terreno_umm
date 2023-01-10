import React from "react";

export default function Form_Participante(){

    return(
        <div className="col-xl-6">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-check me-1"/>
                    Formulário Evento
                </div>
                <div className="card-body">Para este passeio irá ser necessário:
                    <form>
                        <label>Teste: </label><input/><br/>
                        <label>Teste: </label><input/><br/>
                        <label>Teste: </label><input/><br/>
                        <label>Teste: </label><input/><br/>
                    </form>
                </div>
            </div>
        </div>
    )
}