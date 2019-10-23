import React, {Component} from "react";
import "../../App.css";
class CarsList extends Component {
    render()
    {

        return(
            <div className="dashboard-background">
            <h1>Autos</h1>
            <div className="card-deck">
                <div onClick={this.handleClick} className="data-card">
                <h5 id="card-title">Precio</h5>
                <img scr=""></img>
                <h6 id="card-sub-title">Modelo y kilometraje</h6>
                <h6 id="card-sub-title">Marca y ciudad de venta </h6>
                </div>
                <div className="data-card">
                <h5 id="card-title">Precio</h5>
                <img scr=""></img>
                <h6 id="card-sub-title">Modelo y kilometraje</h6>
                <h6 id="card-sub-title">Marca y ciudad de venta </h6>
                </div>
                <div className="data-card">
                <h5 id="card-title">Precio</h5>
                <img scr=""></img>
                <h6 id="card-sub-title">Modelo y kilometraje</h6>
                <h6 id="card-sub-title">Marca y ciudad de venta </h6>
                </div>
                <br></br>
            </div>
        </div>  
        )
    }

}
export default CarsList;