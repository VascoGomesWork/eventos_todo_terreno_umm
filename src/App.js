import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate} from 'react-router-dom';
import Index from "./components/index/Index";
import Detalhes_Eventos from "./components/detalhes_eventos/Detalhes_Eventos";
import Dashboard_Cliente from "./components/espaco_utilizador/cliente/dashboard/Dashboard_Cliente";
import Inscrever_Evento from "./components/espaco_utilizador/cliente/inscrever_evento/Inscrever_Evento";
import Dashboard_Admin from "./components/espaco_utilizador/admin/dashboard/Dashboard_Admin";
import Criar_Eventos from "./components/espaco_utilizador/admin/criar_eventos/Criar_Eventos";


class App extends Component{
    render(){
      return (
          <Router>
            <div className="App">
                <Routes>
                    {/*Rotas -> https://www.codingame.com/playgrounds/6517/react-router-tutorial*/}
                    <Route exact path='/' element={<Index />} />
                    <Route exact path='/Detalhes_Eventos' element={<Detalhes_Eventos />} />
                    <Route exact path='/Detalhes_Eventos/id' element={<Detalhes_Eventos />} />
                    <Route exact path='/Dashboard_Cliente' element={<Dashboard_Cliente />} />
                    <Route exact path='/Inscrever_Evento' element={<Inscrever_Evento />} />
                    <Route exact path='/Dashboard_Admin' element={<Dashboard_Admin />} />
                    <Route exact path='/Criar_Eventos' element={<Criar_Eventos />} />
                </Routes>
            </div>
          </Router>
      );
    }
}

export default App;
