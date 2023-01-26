import React, {useEffect, useState} from "react";

export default function Selecionar_Localizacao_Evento(){

    const [localidadeInicioEventoList, setLocalidadeInicioEventoList] = useState([{id:1, nome:"Lousã"}, {id:2, nome:"Álcacer do Sal"}, {id:3, nome:"Beja"}, {id:4, nome:"Sagres"}, {id:5, nome:"Ponta de Sol(Madeira)"}, {id:6, nome:"Ponta de Sol(Madeira)"}])
    const [localidadeFimEventoList, setLocalidadeFimEventoList] = useState([{id:1, nome:"Vila Nova de Famalicão"}, {id:2, nome:"Beja"}, {id:3, nome:"Quarteira"}, {id:4, nome:"Faro"}, {id:5, nome:"Ponta de São Lourenço(Madeira)"}, {id:6, nome:"Poça das Lesmas, Seixal(Madeira)"}])

    const [localidadeInicioEvento, setLocalidadeInicioEvento] = useState("")
    const [localidadeFimEvento, setLocalidadeFimEvento] = useState("")

    function definirLocalidadeInicio(e) {
        setLocalidadeFimEventoList([{id:1, nome:"Vila Nova de Famalicão"}, {id:2, nome:"Beja"}, {id:3, nome:"Quarteira"}, {id:4, nome:"Faro"}, {id:5, nome:"Ponta de São Lourenço(Madeira)"}, {id:6, nome:"Poça das Lesmas, Seixal(Madeira)"}])
        console.log("TESTE = " + e.target.value)
        setLocalidadeInicioEvento(e.target.value);
        localidadeFimEventoList.forEach((localidadeFim) => {
            if(parseInt(localidadeFim.id) === parseInt(e.target.value)){
                console.log("LOCALIDADE FIM = " + localidadeFim.id)
                setLocalidadeFimEventoList([{id:localidadeFim.id, nome:localidadeFim.nome}])
            }
        })

    }

    const definirLocalidadeFim=(e) => {

        localidadeFimEventoList.forEach((localidadeFim) => {
            if(parseInt(localidadeFim.id) === parseInt(e.target.value)){
                console.log("LOCALIDADE FIM = " + localidadeFim.id + " NOME = " + localidadeFim.nome)
                //setLocalidadeFimEventoList([{id:localidadeInicio.id, nome:localidadeInicio.nome}])
                setLocalidadeFimEvento(localidadeFim.nome)
                console.log("LOCALIDADE FIM NOME = " + localidadeFimEvento)
            }
        })
    }

    return(

        {/*-- Google My Maps --*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-location me-1"></i>
                Selecione a Localização do Evento
            </div>
            <div class="card-body">
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Selecione a localização do evento utilizando as caixas de seleção abaixo</li>
                </ol>
                {/* How to use HERE Maps - https://developer.here.com/tutorials/getting-here-credentials/ */}
                <div className="google-map-code">

                    {/* Sem Direções */}
                    {(localidadeInicioEvento === "" || localidadeFimEvento === "") && <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1YTPHNr4FUDJaMfo5GaZfzxdyX3QFfu8&ehbc=2E312F" width="100%" height="480"></iframe>}

                    {console.log("LOCALIDADE INICIO = " + localidadeInicioEvento + " | LOCALIDADE FIM =  " + localidadeFimEvento)}
                    {console.log(localidadeInicioEvento === "Lousã")}
                    {console.log(localidadeFimEvento === "Vila Nova de Famalicão")}

                    { /* Lousâ - Vila Nova de Famalicão */}
                    {(localidadeInicioEvento === "1" && localidadeFimEvento === "Vila Nova de Famalicão") && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1f_eogbXTPA_UTrKmjtz2VaUTUdWh-Fs&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Alcácer do Sal - Beja */}
                    {localidadeInicioEvento === "2" && localidadeFimEvento === "Beja" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1_HExvO_60ynv_YA787K4SCNYL_4zwxk&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Beja - Quarteira */}
                    {localidadeInicioEvento === "3" && localidadeFimEvento === "Quarteira" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1aDUpSKap8MJLYDQWqkZGNhDxseCOboM&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Sagres - Faro */}
                    {localidadeInicioEvento === "4" && localidadeFimEvento === "Faro" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Vn01dlRfQ23uy5Yn-NUI87X1aVMkOSU&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Ponta de Sol - Ponta de São Lourenço */ }
                    {localidadeInicioEvento === "5" && localidadeFimEvento === "Ponta de São Lourenço(Madeira)" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qTaGmcJPAY9J6HtRDK7MTKuWzM2O1MI&ehbc=2E312F" width="100%" height="480"></iframe>}

                    { /* Ponta de Sol - Poça das Lesmas, Seixal */}
                    {localidadeInicioEvento === "6" && localidadeFimEvento === "Poça das Lesmas, Seixal(Madeira)" && <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fAJQwTlCA383VSmemOj5JHfez9OYfDg&ehbc=2E312F" width="100%" height="480"></iframe>}
                    <br/>

                    <div className="row">
                        <div className="col-md-6">
                            <label>Localidade Inicio</label>

                            <select className="form-select" name="localidade_inicio" id="localidade_inicio" onChange={(e) => definirLocalidadeInicio(e)}>
                                <option value="">Selecione uma Localidade de Início</option>
                                {localidadeInicioEventoList.map((localidadeInicio) => (
                                    //console.log("Localidade Inicio = " + JSON.stringify(localidadeInicio)),
                                    <option value={localidadeInicio.id}>{localidadeInicio.nome}</option>
                                ))}

                            </select>
                        </div>

                        <div className="col-md-6">
                            <label>Localidade Fim</label>

                            <select className="form-select" name="localidade_fim" id="localidade_fim" onChange={(e) => definirLocalidadeFim(e)}>
                                <option value="">Selecione uma Localidade de Fim</option>
                                {localidadeFimEventoList.map((localidadeFim) => (
                                    //console.log("Localidade Inicio = " + JSON.stringify(localidadeFim)),
                                        <option value={localidadeFim.id}>{localidadeFim.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}