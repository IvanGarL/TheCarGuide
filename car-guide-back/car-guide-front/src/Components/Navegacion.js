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
  handleClick(){
  };
    render(){
      return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="row align-items-md-center">
      <div className="col-md-1"></div>
        <div className="col-md-3">
          <img src="logo.png" id="nav-logo"/>
        </div>
            <div className="col-md-8 ">

              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ml-auto">
                  <NavLink to="/" > 
                    <a className="nav-item nav-link link-3" id="btn-inicio">INICIO</a>
                  </NavLink>
                  <NavLink to="/cars">
                    <a className="nav-item nav-link link-3" id="btn-cars">VENTAS</a>
                  </NavLink>
                  <NavLink to="/services" >
                    <a className=" nav-item nav-link link-3" id="btn-services">SERVICIOS</a>
                  </NavLink>
                  <NavLink to="/users" >
                    <a className=" nav-item nav-link link-3" id="btn-users">USUARIOS</a>
                  </NavLink>
                  <NavLink to="/car" >
                    <a className=" nav-item nav-link link-3" id="btn-add">ADMIN</a>
                  </NavLink>
                    <button type="button" id="btn-login" className="btn btn-danger" onClick="handleClick()">LOGIN</button>
                  </div>
              </div>
            </div>
          </div>

      </nav>
      );
    }

}

export default Navegacion;