import React, {Component} from "react";
import Service from "./serviceDetail.js";

class ServicesList extends Component {

    

    render()
    {
        return(
            <div className="row" id="servicios">
                <div className="col-6">
                    <div id="mantenimiento">Mantenimiento</div>
                    <div id="seguros">Seguros</div>
                </div>
                <div className="col-6">
                    <div id="respuestos">Respuestos</div>
                    <div id="concesionarios">Concesionarios</div>
                </div>
            </div>
        );
    }

}
export default ServicesList;