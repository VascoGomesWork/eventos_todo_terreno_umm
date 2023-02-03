import React, {useState} from "react";


export default function Calendario_Evento(){

    //How to get date -> https://www.tutsmake.com/react-js-get-current-date-and-time-tutorial/
    var date = (new Date().toLocaleDateString().substr(0, 10)).replace("/", "-").replace("/", "-")
    var finalDate = date.substr(6) + "-" + date.substr(3,5)


    const dataHoje = (useState(finalDate) + "").substr(8, 2) + "/" + (useState(finalDate) + "").substr(5, 2) + "/" + (useState(finalDate) + "").substr(0, 4)
    //console.log("Data Hoje = " + dataHoje)
    const [dataInicio, setDataInicio] = useState(dataHoje)
    const [dataFim, setDataFim] = useState(dataHoje)

    /*console.log("DATA INICIO = " + dataInicio)
    console.log("Dia = " + (dataInicio).substr(8, 2))
    console.log("Mês = " + (dataInicio).substr(5, 2))
    console.log("Ano = " + (dataInicio) + "".substr(0, 4))*/
    global.data_inicio = (dataInicio).substr(8, 2) + "/" + (dataInicio).substr(5, 2) + "/" + (dataInicio).substr(0, 4)
    global.data_fim = (dataFim).substr(8, 2) + "/" + (dataFim).substr(5, 2) + "/" + (dataFim).substr(0, 4)

    //console.log("DATA INICIO GLOBAL = " + global.data_inicio)

    return(
        {/*-- Calendário --*/},
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-calendar me-1"></i>
                Selecione a Data do Evento no Calendário
            </div>

            <div className="card-body">
                {/* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_input_date_get */}
                <div className="row">
                    <div className="col-md-6">
                        <label>Data Início Evento</label>
                        <input className="form-control" type="date" id="myDate" value={dataInicio === "" ? finalDate : dataInicio} onChange={(e) => setDataInicio(e.target.value)}/>
                    </div>

                    <div className="col-md-6">
                        <label>Data Fim Evento</label>
                        <input className="form-control" type="date" id="myDate" value={dataFim === "" ? finalDate : dataFim} onChange={(e) => setDataFim(e.target.value)}/>
                    </div>
                </div>

                {console.log("DATA INICIO = " + dataInicio)}
                {console.log("DATA FIM = " + dataFim)}
            </div>

        </div>
    )
}