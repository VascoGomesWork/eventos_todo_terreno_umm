import React from "react";

export default function Selecionar_Localizacao_Evento(){

    return(
        {/*-- Google Maps --*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-location me-1"></i>
                Selecione a Localização do Evento
            </div>
            <div class="card-body">
                <div>
                    <div id="googleMap" style="width:100%;height:400px;"></div>
                </div>
            </div>
        </div>

    <script>
        //Código Google Maps -> https://www.w3schools.com/graphics/google_maps_intro.asp
        function myMap() {
        var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>
    )
}