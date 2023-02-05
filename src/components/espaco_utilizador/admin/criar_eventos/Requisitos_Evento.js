import React, {useState} from "react";

export default function Requisitos_Evento(){

    const [requisitosEvento, setRequisitosEvento] = useState("")
    global.requisitosEvento = requisitosEvento

    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-calendar me-1"></i>
                Insira os Requisitos do Evento <label><h2 id="asterisk">*</h2></label>
            </div>
            <div className="card-body">
                {/* Text Area -> https://getbootstrap.com/docs/4.0/components/forms/ */}
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" onChange={(e) => setRequisitosEvento(e.target.value)}/>
            </div>
        </div>
    )
}