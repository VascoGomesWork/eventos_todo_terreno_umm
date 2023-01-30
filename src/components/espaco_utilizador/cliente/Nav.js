import React from "react";


export default function Nav(){

    return(

        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/*-- Navbar Brand--*/}
            <div>
                <a className="navbar-brand ps-3" href="/"><img
                    src="../../../../img/umm_logo2.jpg"/>Eventos
                    Todo-o-Terreno UMM</a>
            </div>
            {/*-- Sidebar Toggle--*/}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><span
                className="navbar-toggler-icon"></span></button>
        </nav>
    )
}