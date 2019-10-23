import React, {Component} from "react";
import "../../App.css";
class Car extends Component {
    render()
    {
        return(
            <div className="dashboard-background">
            <h1>Marca y modelo</h1>
            <div className="card-deck">
            <h5>Precio</h5>
            <h5>Nombre vendedor:</h5>
            <h5>Telefono vendedor:</h5>
            <h5>Ubicacion del vehiculo:</h5>
            <h5>Version del vehiculo:</h5>
            <h5>Año:</h5>
            <h5>Cilindraje:</h5>
            <h5>Kilometros:</h5>
            <h5>Tipo de combustible:</h5>
            <h5>Placa:</h5>
            </div>
        </div>  
        )
    }

}
export default Car;