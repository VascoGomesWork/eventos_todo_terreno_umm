import React from "react";

export default function Selecionar_Localizacao_Evento(){

    return(
        {/*-- Here Maps --*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-location me-1"></i>
                Selecione a Localização do Evento
            </div>
            <div class="card-body">
                {/* How to use HERE Maps - https://developer.here.com/tutorials/getting-here-credentials/ */}
                <div>
                    <div id="googleMap"></div>
                </div>

                <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>
            </div>
        </div>

    )
}