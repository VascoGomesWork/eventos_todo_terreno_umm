import React, {useState} from "react";
import Head from "./cliente/Head";
import {Link} from "react-router-dom";
import Alert from "../Alert";

export default function Registar(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [alert, setAlert] = useState(false)
    const [badAlert, setBadAlert] = useState(false)
    const [password, setPassword] = useState("")
    const [repeatPasword, setRepeatPassword] = useState("")

    function registarParticipante() {

        console.log("TESTE")
        console.log("NOME = " + nome)
        console.log("EMAIL = " + email)
        console.log("PASSWORD = " + password)
        console.log("REPEAT PASSWORD = " + repeatPasword)

        //Checks if Password is Equals to Repeat Password
        if(password === repeatPasword){


            fetch(`http://localhost:8000/api/registar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json"

            },
            body: JSON.stringify({
                "nome": nome,
                "email": email,
                "password": password,
            }), // body data type must match "Content-Type" header
            }).then((response) => {
                return response.json();
            }).then((parsedData) => {
                console.log("DATA = " + JSON.stringify(parsedData))
                //setAlert(prevState => !prevState)

                if(parsedData.errors !== undefined && password !== repeatPasword) {

                    //Sets Alert
                    setBadAlert(prevState => !prevState)

                    //Makes Alert Disapear
                    setTimeout(() => {
                        setBadAlert(prevState => !prevState)
                    }, 3000)
                } else {
                    //Sets Alert
                    setAlert(prevState => !prevState)

                    //Makes Alert Disapear
                    setTimeout(() => {
                        setAlert(prevState => !prevState)
                    }, 3000)
                }
            })

        }

    }

    return[
        <div>
            <Head/>

            <body className="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3
                                            className="text-center font-weight-light my-4">Registar</h3></div>
                                        <div className="card-body">
                                            <form>

                                                <div className="form-floating mb-3">
                                                    <input className="form-control" name="inputNome" id="inputNome" type="nome"
                                                           placeholder="name@example.com" value={nome} onChange={(event) => setNome(event.target.value)}/>
                                                    <label htmlFor="inputEmail">Nome</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" name="inputEmail" id="inputEmail" type="email"
                                                           placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
                                                    <label htmlFor="inputEmail">Endereço de Email</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" name="inputPassword" id="inputPassword" type="password"
                                                           placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                                                    <label htmlFor="inputPassword">Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" name="inputRepeatPassword" id="inputRepeatPassword" type="password"
                                                           placeholder="Password" value={repeatPasword} onChange={(event) => setRepeatPassword(event.target.value)}/>
                                                    <label htmlFor="inputPassword">Repetir Password</label>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between ">
                                                    <a className="btn btn-primary" onClick={registarParticipante}>Efetuar Registo</a>
                                                </div>
                                                {badAlert && <Alert type="0" message="Dados de Login Incorretos"/>}
                                                {alert && <Alert type="1" message="Registo Efetuado com Sucesso"/>}
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small"><h5>Já tem conta? Realize o <Link to={'../Login'} class="nav-link" title="Project Name">Login</Link> no Espaço do Utilizador</h5></div>
                                            <div className="small"><h5>Quer ver Todos os Eventos? Volte para a <Link to={'/'} class="nav-link" title="Project Name">Página Inicial</Link>
                                            </h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

            </div>
            </body>
        </div>
    ];
}