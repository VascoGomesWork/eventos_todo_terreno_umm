import React from "react";
import {Link} from "react-router-dom";

export default function Side_Nav(){

    return(

        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Operações do Sistema</div>
                            <Link to={"/Inscrever_Evento"} className="nav-link" >Inscrição em Evento</Link>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>

    )
}