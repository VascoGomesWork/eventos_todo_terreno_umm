import React from "react"
import {Link, Route, Routes} from "react-router-dom";
import Evento from "../detalhes_eventos/Evento";
import Evento_Especifico from './Evento_Especifico'


export default function Eventos(){

    const [eventos, setEventos] = React.useState([]);

    React.useEffect(()=>{
        fetch('http://localhost:8000/api/eventos')
            .then(res => res.json())
            .then(data => {
                console.log("Eventos = " + data)
                setEventos(data)
            })
    }, [])

    return(
        <div id="portfolio">
            <div class="container-fluid p-0">
                
                <h2 class="text-center mt-0">Eventos Todo-O-Terreno</h2>
                    <hr class="divider" />
                <h6 id="eventos_texto">Nesta secção podem ser visualizados os Eventos Todo-o-Terreno ativos</h6>
                <div class="row g-0" id="eventos_row">

                    {eventos.map(eventosAtributes => {
                        return(
                            <Evento_Especifico eventosAtributes={eventosAtributes}/>
                    )
                    })}
                </div>
                    
                </div>
        </div>
    )
}