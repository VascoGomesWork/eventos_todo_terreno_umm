import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate} from 'react-router-dom';
import Index from "./components/index/Index";
import Detalhes_Eventos from "./components/detalhes_eventos/Detalhes_Eventos";



class App extends Component{
    render(){
      return (
          <Router>
            <div className="App">
                <Routes>
                    {/*Rotas -> https://www.codingame.com/playgrounds/6517/react-router-tutorial*/}
                    <Route exact path='/' element={<Index />} />
                    <Route exact path='/Detalhes_Eventos' element={<Detalhes_Eventos />} />
                    {/*<Route exact path='/SignUpPage' element={<SignUpPage />} />
                    <Route exact path='/EspacoUtilizadorPage' element={<EspacoUtilizadorPage />} />*/}
                </Routes>
            </div>
          </Router>
      );
    }
}

export default App;
