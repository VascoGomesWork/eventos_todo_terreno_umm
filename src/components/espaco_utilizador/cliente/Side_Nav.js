import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";

export default function Side_Nav(){

    const navigate = useNavigate();
    const cookies = new Cookies();

    function logout() {
        //How to use Cookies in React -> https://youtu.be/Avfa7RrPx_Q
        //Removes the Tokens from their Respective Cookies
        cookies.remove("participante_token")
        cookies.remove("participante_nome")
        cookies.remove("participante_id")
        //Navigates to Login Page
        navigate("/Login")
    }

    return(

        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Operações do Sistema</div>
                            {/* Passes Global variable through state */}
                            <Link to={"/Inscrever_Evento"} state={global.eventoId} className="nav-link" >Inscrição em Evento</Link>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Login:</div>
                    <small>{cookies.get("participante_nome")}</small>
                    <br/>
                    <button className="btn-danger" onClick={logout}>Logout</button>
                </div>
            </nav>
        </div>

    )
}