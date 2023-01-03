import React, {useState} from "react";
import Head from "./cliente/Head";
import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";

export default function Login(){

    const navigate = useNavigate();
    var eventoId=0;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //How to Pass Props to Link -> https://www.kindacode.com/article/react-router-passing-data-states-through-links/

    console.log("ID EVENTO LOGIN = " + useLocation().state)
    //Sets Evento ID to Be used
    eventoId = useLocation().state

    function efetuarLogin(){

        console.log("EMAIL = " + email)
        console.log("PASSWORD = " + password)

        fetch(`http://localhost:8000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json"

            },
            body: JSON.stringify({
                "email": email,
                "password": password,
            }), // body data type must match "Content-Type" header
        }).then((response) => {
            return response.json();
        }).then((parsedData) => {
            //console.log("DATA = " + JSON.stringify(parsedData))
            //How to send data through navigate -> https://bobbyhadz.com/blog/react-onclick-redirect
            navigate("/Dashboard_Cliente", {state:eventoId})
        })

    }

    return[

    <div>
        <Head />

        <body class="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-10">
                                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                        <div class="card-body">
                                            <form>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="inputEmail" type="email" placeholder="name@example.com" />
                                                    <label for="inputEmail">Email address</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="inputPassword" type="password" placeholder="Password" />
                                                    <label for="inputPassword">Password</label>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <Link class="btn btn-primary" state={useLocation().state} onClick={efetuarLogin}>Efetuar Login</Link>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="card-footer text-center py-3">
                                            <div class="small"><h5>Ainda não tem conta? Realize o  <Link to={'../Registar'} class="nav-link" title="Project Name">Registo</Link> no Espaço do Utilizador</h5></div>
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