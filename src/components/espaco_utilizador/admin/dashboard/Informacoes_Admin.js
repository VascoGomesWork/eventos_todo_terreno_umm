import React from "react";

export default function Informacoes_Admin(){
    return(
        <div className="container-fluid px-4">
            <h1 className="mt-4">Admin Dashboard</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Bem Vindo Admin</li>
            </ol>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Eventos Criados = 0</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                        <div className="card-body">Eventos Visualizados = 0</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-success text-white mb-4">
                        <div className="card-body">Eventos Atualizados = 0</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-danger text-white mb-4">
                        <div className="card-body">Eventos Apagados = 0</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}