import React from "react";
import {Link, Route, Routes} from "react-router-dom";

export default function Nav(){

    return(
        {/*-- Navigation--*/},
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div class="container px-4 px-lg-5">
                    <Link to={"/"} class="navbar-brand" ><img src="../../img/umm_logo2.jpg"/>Eventos Todo o Terreno UMM</Link>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#passeio_todo_o_terreno">Detalhes do Passeio Todo-o-Terreno</a></li>
                            <li class="nav-item"><a class="nav-link" href="#forum_mensagens">Fórum de Mensagens</a></li>
                            <li class="nav-item"><a class="nav-link" href="../../Espaco_Utilizador_2/startbootstrap-sb-admin-gh-pages/login.html">Espaço do Utilizador</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}