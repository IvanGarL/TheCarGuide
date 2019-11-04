import React, {Component} from "react";
import Service from "./serviceDetail.js";
import "../../App.css";

class ServicesList extends Component {

    

    render()
    {
        return(
        <div className="container-fluid">

            <div className="row" id="titulo">
                <h1>Servicios</h1>
            </div>

            <div className="row" id="servicios">

                <div className="col-2" id="filtro">
                    Filtro
                </div>

                <div className="col-5">
                    <div className="servicio-categoria" id="mantenimiento">
                        <h4>Mantenimiento</h4>
                        <div className="dashboard-background">
                            <div className="card-deck">
                                
                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="servicio-categoria" id="seguros">
                        <h4>Seguros</h4>
                        <div className="dashboard-background">
                            <div className="card-deck">
                                
                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-5">
                    <div className="servicio-categoria" id="repuestos">
                        <h4>Repuestos</h4>
                        <div className="dashboard-background">
                            <div className="card-deck">
                                
                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="servicio-categoria" id="Concesionarios">
                        <h4>Concesionarios</h4>
                        <div className="dashboard-background">
                            <div className="card-deck">
                                
                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>

                                <div className="data-card">
                                    <h5 id="card-title">Name</h5>
                                    <img src=""/>
                                    <h6 id="card-sub-title">Price</h6>
                                    <h6 id="card-sub-title">Description</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        );
    }

}
export default ServicesList;