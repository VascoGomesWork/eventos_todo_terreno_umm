import React from "react";

export default function Alert(props){

    return(
        <div className={props.type==="0" ? "alert alert-danger" : "alert alert-success"} role="alert">
            <h4 className="alert-heading">Alerta!</h4>
            <p>{props.message}</p>
        </div>
    )
}