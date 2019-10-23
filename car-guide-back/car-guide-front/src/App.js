import React, { Component } from "react";
import Navegacion from "./Components/Navegacion";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/statistics";
import ServicesList from './Components/Services/servicesList';
import CarsList from './Components/Cars/carsList';

export default class app extends Component {
 
  render() {

    return (
      <div>
        <BrowserRouter>
        
        <div className="container-fluid" id="nav">
          <Navegacion />
        </div>   
        <Route exact path="/" component={Home} />
        <Route path="/cars" component={CarsList} />
        <Route path="/services" component={ServicesList} />
        </BrowserRouter>
      </div>
    );
  }
}