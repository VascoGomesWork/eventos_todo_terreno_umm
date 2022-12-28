import React, {useEffect, useState} from "react";

export default function Requisitos_Eventos(){

    const [id, setId] = useState(window.location.href.substr(39, window.location.href.length))
    const [eventoAtributes, setEventosAtributes] = useState([])

    //console.log("TESTE = " + window.location.href)
    //console.log("TESTE = " + window.location.href.substr(39, window.location.href.length))

    //console.log("ID = " + id)
    useEffect(() => {
        fetch("//localhost:8000/api/eventos/show/" + id)
            .then((res) => res.json())
            .then((data) => {
                console.log("DATA = " + JSON.stringify(data))
                //Sets Eventos Atributes with variable Data
                setEventosAtributes(data)
            });
    }, []);

    return(

        {/*-- Side widgets--*/},
        <div class="col-lg-4">
            {/*-- Side widget--*/}
            <div class="card mb-4">
                <div class="card-header">Requisitos do Passeio</div>
                <div class="card-body">Para este passeio irá ser necessário:
                    <ul>
                        <li>{eventoAtributes.requisitos}</li>
                    </ul>
                </div>
            </div>
        </div>

    )

}