import React, {useState} from "react";
import Cookies from "universal-cookie";

export default function Informacoes_Admin(){

    const [count, setCount] = useState("")
    const cookies = new Cookies();
    const id = cookies.get("organizaodor_id")

    React.useEffect(() => {

        fetch("http://localhost:8000/api/eventos/count/" + id)
            .then((res) => res.json())
            .then((data) => {
                setCount(data)
            }, [])
    });

    return(
        <div className="container-fluid px-4">
            <h1 className="mt-4">Organizador Dashboard</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Este é o Dashboard do Organizador</li>
            </ol>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Eventos Criados: {count}</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}