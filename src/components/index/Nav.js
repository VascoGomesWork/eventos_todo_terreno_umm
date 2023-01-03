import React from "react"
import {Link} from "react-router-dom";

export default function Nav(){
    
    return(
        {/* Navigation */},
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top"><img src="../../img/umm_logo2.jpg"/>Eventos Todo o Terreno UMM</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Eventos Todo o Terreno</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">Sobre Nós</a></li>
                        {/*<li class="nav-item"><Link to={"/Dashboard_Cliente"} class="navbar-brand" ><a class="nav-link">Espaço do Utilizador</a></Link></li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    )
}