import React, { Component } from "react";
import {NavLink}  from 'react-router-dom'


class Navegacion extends Component {
    render(){
      return(

      <nav className="navbar navbar-expand-md navbar-light sticky-top">
          <a ><img src="logo.jpeg" height="28" alt="logo"/></a>
          <a className="navbar-brand"><h3 className="text-dark">The car guide</h3></a>

          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ml-auto">
              <NavLink to="/" > 
                <a className="a nav-item nav-link" id="btn-inicio">Inicio</a>
              </NavLink>
              <NavLink to="/cars">
                <a  className="a nav-item nav-link" id="btn-cars">Autos</a>
              </NavLink>
              <NavLink to="/services" >
                <a className="a nav-item nav-link" id="btn-services">Servicios de mantenimiento</a>
              </NavLink>
              </div>
          </div>
      </nav>
      );
    }

}

export default Navegacion;