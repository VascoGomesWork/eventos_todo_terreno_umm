import React, {useState} from "react";


export default function Calendario_Evento(){

    const [date, setDate] = useState()

    return(
        {/*-- Calendário --*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-calendar me-1"></i>
                Selecione a Data do Evento no Calendário
            </div>
            <div class="card-body">

            </div>
        </div>

    )
}