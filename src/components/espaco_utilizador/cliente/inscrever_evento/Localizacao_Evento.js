import React from "react";

export default function Localizacao_Evento(){

    return(
        {/*-- Localização Evento Todos-o-TErreno --*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-location me-1"></i>
                Localização do Evento Todo-o-Terreno
            </div>
            <div class="card-body">
                {/*-- Google Maps -*/}
                <div>
                    <h2>Localização do Evento</h2>
                    <div id="googleMap"></div>
                </div>



                <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>
            </div>
        </div>
    )

}
