import React from "react";

export default function Localizacao_Evento(props){

    console.log("Localidade Inicio = " + props.localizacao_inicio)
    console.log("Localidade Fim = " + props.localizacao_fim)

    return(
        {/*-- Localização Evento Todos-o-TErreno --*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-location me-1"></i>
                Localização do Evento Todo-o-Terreno
            </div>
            <div class="card-body">
                <div className="google-map-code">

                    {/* Sem Direções */}
                    {(props.localizacao_inicio === "" || props.localizacao_fim === "") && <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1YTPHNr4FUDJaMfo5GaZfzxdyX3QFfu8&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Lousâ - Vila Nova de Famalicão */}
                    {(props.localizacao_inicio === "1" && props.localizacao_fim === "Vila Nova de Famalicão") && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1f_eogbXTPA_UTrKmjtz2VaUTUdWh-Fs&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Alcácer do Sal - Beja */}
                    {props.localizacao_inicio === "2" && props.localizacao_fim === "Beja" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1_HExvO_60ynv_YA787K4SCNYL_4zwxk&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Beja - Quarteira */}
                    {props.localizacao_inicio === "3" && props.localizacao_fim === "Quarteira" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1aDUpSKap8MJLYDQWqkZGNhDxseCOboM&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Sagres - Faro */}
                    {props.localizacao_inicio === "4" && props.localizacao_fim === "Faro" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Vn01dlRfQ23uy5Yn-NUI87X1aVMkOSU&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Ponta de Sol - Ponta de São Lourenço */ }
                    {props.localizacao_inicio === "5" && props.localizacao_fim === "Ponta de São Lourenço(Madeira)" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qTaGmcJPAY9J6HtRDK7MTKuWzM2O1MI&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Ponta de Sol - Poça das Lesmas, Seixal */}
                    {props.localizacao_inicio === "6" && props.localizacao_fim === "Poça das Lesmas, Seixal(Madeira)" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fAJQwTlCA383VSmemOj5JHfez9OYfDg&ehbc=2E312F" width="100%" height="480"></iframe>}
                    <br/>
                </div>
            </div>
        </div>
    )

}
