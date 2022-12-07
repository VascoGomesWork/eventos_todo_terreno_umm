import React from "react";
import Requisitos_Eventos from "./Requisitos_Eventos";
import Descricao_Evento from "./Descricao_Evento";
import Comentarios_Eventos from "./Comentarios_Eventos";

export default function Evento(){

    return(
    {/*-- Evento--*/},
    <div class="container mt-5">
        <div class="row" id="passeio_todo_o_terreno">
            <div class="col-lg-8">

                <Descricao_Evento />

                <Comentarios_Eventos />

            </div>
            <Requisitos_Eventos />
        </div>
    </div>

    )

}