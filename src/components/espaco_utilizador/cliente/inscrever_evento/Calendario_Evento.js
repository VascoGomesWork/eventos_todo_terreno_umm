import React, {useState} from "react";

export default function Calendario_Evento(props){

    const [daysOfWeek, setDaysOfWeek] = useState(["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"])
    const [daysOfWeekEN, setDaysOfWeekEN] = useState(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
    const [monthOfYear, setMonthOfYear] = useState(["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"])
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
    let mesInicioSelecionado = ""
    let mesFimSelecionado = ""
    let mesPTSelecionado = ""
    const isActive = 0
    //Data Inicio
    const diaInicio = props.data_inicio.substr(0, 2)
    const mesInicio = props.data_inicio.substr(3, 2)
    const anoInicio = props.data_inicio.substr(6)
    //Data Fim
    const diaFim = props.data_fim.substr(0, 2)
    const mesFim = props.data_fim.substr(3, 2)
    const anoFim = props.data_fim.substr(6)

    for(let i = 0; i < month.length; i++){
        //Selects Mes Inicio in English to use in Data function
        if(parseInt(mesInicio) === (i + 1)){
            mesInicioSelecionado = month[i]
        }
        //Selects Mes Fim in English to use in Data function
        if(parseInt(mesFim) === (i + 1)){
            mesFimSelecionado = month[i]
        }
        //Selects Month in Portuguese
        if(parseInt(mesFim) === (i + 1)){
            mesPTSelecionado = monthOfYear[i]
        }
    }

    //How to get Day -> https://www.w3schools.com/jsref/jsref_getday.asp
    const diaSemanaInicio = new Date(mesInicioSelecionado + " " + diaInicio + ", " + anoInicio).toString().substr(0, 3)
    const diaSemanaFim = new Date(mesFimSelecionado + " " + diaFim + ", " + anoFim).toString().substr(0, 3)
    let diaSemanaInicioPT = ""
    let diaSemanaFimPT = ""

    console.log("Dia Inicio = " + diaInicio)
    console.log("Mes Inicio = " + mesInicio)
    console.log("Ano Inicio = " + anoInicio)

    console.log("Dia Fim = " + diaFim)
    console.log("Mes Fim = " + mesFim)
    console.log("Ano Fim = " + anoFim)

    for (let j = 0; j < daysOfWeekEN.length; j++){
        console.log("DIa Semana Inicio  EN = " + diaSemanaInicio)
        console.log("DAys of Week = " + daysOfWeekEN[j])
        if(diaSemanaInicio === daysOfWeekEN[j]){
            diaSemanaInicioPT = daysOfWeek[j]
        }

        if(diaSemanaFim === daysOfWeekEN[j]){
            diaSemanaFimPT = daysOfWeek[j]
        }
    }

    console.log("Dia Inicio Index = " + diaSemanaInicioPT)
    console.log("Dia Fim Index = " + diaSemanaFimPT)

    /**
     * Resume: Creates an Array to make the Map function Work
     * @returns {[]}
     */
    let indicesArray = function () {
        let array = []
        for(let k = 0; k < daysOfWeek.length; k++){
            if(daysOfWeek[k] !== diaSemanaInicioPT){
               array.push("")
            }
        }
        return array
    };

    return(
        {/*-- Calendário -*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-date me-1"></i>
                Data do Evento no Calendário
            </div>
            <div class="card-body">
                <div class="month">
                    <ul>
                        <li>{mesPTSelecionado}<br/><span id="calendario_span">{anoInicio}</span></li>
                    </ul>
                </div>

                <ul class="weekdays">
                    <li>Seg</li>
                    <li>Ter</li>
                    <li>Qua</li>
                    <li>Qui</li>
                    <li>Sex</li>
                    <li>Sab</li>
                    <li>Dom</li>
                </ul>

                <ul class="days">

                    {indicesArray().map((diaSemana => (
                        <li></li>
                    )))}

                    {days.map(day => (
                        day == diaInicio || day == diaFim ? <li><span  className="active">{day}</span></li> : <li>{day}</li>
                    ))}
                </ul>
                <div className="days">
                    <div className="row">
                        <li><span className="active">__</span><small> -> Data de Início</small></li>
                        <li><span className="active">__</span><small> -> Data de Fim</small></li>
                    </div>
                </div>
            </div>
        </div>
    )
}