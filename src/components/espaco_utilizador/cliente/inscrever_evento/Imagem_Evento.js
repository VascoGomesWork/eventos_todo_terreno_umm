import React from "react";


export default function Imagem_evento(props){

    return(

        <div className="col-xl-6">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-image me-1"></i>
                    Passeio Todo-o-Terreno - {props.nome}
                </div>
                <div className="card-body">
                    <img id="imagem_evento" src={"../../img/" + props.imagem}/>
                </div>
            </div>
        </div>
    )
}