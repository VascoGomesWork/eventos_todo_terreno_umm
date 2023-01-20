import React, {useState} from "react";


export default function Calendario_Evento(){

    const [newDate, setNewDate] = useState("")
    //How to get date -> https://www.tutsmake.com/react-js-get-current-date-and-time-tutorial/
    var date = (new Date().toLocaleDateString().substr(0, 10)).replace("/", "-").replace("/", "-")
    var finalDate = date.substr(6) + "-" + date.substr(3,5)



    return(
        {/*-- Calendário --*/},
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-calendar me-1"></i>
                Selecione a Data do Evento no Calendário
            </div>

            <div className="card-body">
                {/* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_input_date_get */}
                <input type="date" id="myDate" value={newDate === "" ? finalDate : newDate} onChange={(e) => setNewDate(e.target.value)}/>
                {console.log("NEW DATE = " + newDate)}
            </div>

        </div>
    )
}