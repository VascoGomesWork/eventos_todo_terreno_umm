import React from "react";

export default function Calendario_Evento(){

    return(
        {/*-- Calendário -*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-date me-1"></i>
                Data do Evento no Calendário
            </div>
            <div class="card-body">
                <h2>Data do Evento no Calendário</h2>
                <div class="month">
                    <ul>
                        <li class="prev">&#10094;</li>
                        <li class="next">&#10095;</li>
                        <li>August<br/><span style="font-size:18px">2021</span></li>
                    </ul>
                </div>

                <ul class="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>

                <ul class="days">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li><span class="active">10</span></li>
                    <li>11</li>
                </ul>
            </div>
        </div>
    )
}