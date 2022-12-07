import React from "react";
import {Link} from "react-router-dom";

export default function evento_Especifico(props){

    console.log("ID Eventos = " + props.eventosAtributes.id)

    return[
        <div className="col-lg-4 col-sm-6">
            <Link to={'./Detalhes_Eventos/'+ props.eventosAtributes.id} class="portfolio-box" title="Project Name">
                <img className="img-fluid" src="../../img/umm3.jpg" alt="..."/>
                <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Passeio Todo-o-Terreno</div>
                    <div className="project-name">{props.eventosAtributes.nome}</div>
                </div>
            </Link>
        </div>
    ]
}