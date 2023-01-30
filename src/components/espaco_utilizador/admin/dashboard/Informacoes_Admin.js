import React from "react";

export default function Informacoes_Admin(){
    return(
        <div className="container-fluid px-4">
            <h1 className="mt-4">Organizador Dashboard</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Este é o Dashboard do Organizador</li>
            </ol>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Eventos Criados = 0</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}