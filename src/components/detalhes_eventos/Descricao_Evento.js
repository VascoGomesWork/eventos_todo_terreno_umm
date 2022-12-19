import React, {useEffect, useState} from "react";

export default function Descricao_Evento(){

    const [id, setId] = useState(window.location.href.substr(39, window.location.href.length))
    const [eventoAtributes, setEventosAtributes] = useState([])

    //console.log("TESTE = " + window.location.href)
    //console.log("TESTE = " + window.location.href.substr(39, window.location.href.length))

    console.log("ID = " + id)
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

        {/*  Make Some Padding Top Here */},
        {/*-- Post content--*/},
        <article>
            <header class="mb-4">
                <h1 class="fw-bolder mb-1">{eventoAtributes.nome}</h1>
            </header>

            <figure class="mb-4"><img class="img-fluid rounded" src={eventoAtributes.imagem} alt={eventoAtributes.imagem} /></figure>

            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    {eventoAtributes.nome}
                </div>
                <div class="card-body">

                    <p class="fs-5 mb-4">{eventoAtributes.descricao}</p>
                </div>
            </div>
        </article>

    )

}