import React, { Component } from "react";
import {NavLink}  from 'react-router-dom'
import "./NavegacionFooter.css";

class Navegacion extends Component {
  constructor(props) { 
    super(props);
    this.state = { 
      pagActual:'Inicio',
    };
  }
    render(){
      return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="row">
      <div class="col-1"></div>
        <div class="col-4">
          <a className="navbar-brand"><h5 className="text-light ">The Car</h5></a>
          <a className="navbar-brand"><h5 className="text-light">GUIDE</h5></a>
        </div>
            <div class="col-7">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ml-auto">
                  <NavLink to="/" > 
                    <a className={this.state.pagActual === 'Inicio' 
                      ? "a nav-item nav-link red"
                      : "a nav-item nav-link"} 
                      id="btn-inicio">Inicio</a>
                  </NavLink>
                  <NavLink to="/cars">
                    <a  className={this.state.pagActual === 'Ventas' 
                      ? "a nav-item nav-link red"
                      : "a nav-item nav-link"} id="btn-cars">Ventas</a>
                  </NavLink>
                  <NavLink to="/services" >
                    <a className={this.state.pagActual === 'Servicios' 
                      ? "a nav-item nav-link red"
                      : "a nav-item nav-link"} id="btn-services">Servicios</a>
                  </NavLink>
                  
                  </div>
              </div>
            </div>
          </div>

      </nav>
      );
    }

}

export default Navegacion;