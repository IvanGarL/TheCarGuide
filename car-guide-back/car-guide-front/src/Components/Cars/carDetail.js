import React, {Component} from "react";
import "../../App.css";
class CarDetail extends Component {
    constructor(props)
    {
        super(props);

    };
    render()
    {
        return(
        <div className="dashboard-background2">
            
            <h1>NAME</h1>
            <div className="row">
                <div className="col-md-6">
                    <a ><img src="logo.png" width="10%" alt="logo"/></a>
                </div>
                <div className="col-md-6">
                    <div className="card-deck2">
                        <div className="data-card">

                            <h5>PRECIO</h5>
                            <h5>Modelo:</h5>
                            <h5>Kilometros recorridos:</h5>
                            <h5>Categoria:</h5>
                            <h5>Color:</h5>
                            <h5>Placa:</h5>
                            <h5>Marca:</h5>
                            <h5>Kilometros:</h5>
                            <h5>Cilindraje:</h5>
                            <h5>Número de puertas:</h5>
                            <h5>Transmision:</h5>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>  
        )
    }

}
export default CarDetail;