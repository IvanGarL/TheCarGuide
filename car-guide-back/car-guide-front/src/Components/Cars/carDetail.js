import React, {Component} from "react";
import "../../App.css";
class CarDetail extends Component {
    
    constructor(props)
    {
        super(props);
        this.state= { 
            datos:[],
          };
    };
    find()
    {
        fetch('/cars/'+this.props.match.params.name
         ).then((response)=>{response.json();
         }).then(data=>this.setState({datos:data}))
    };
    render()
    {
        this.find();
        return(
        <div className="dashboard-background2">
            
            <h1>{this.datos.name}</h1>
            <div className="row">
                <div className="col-md-6">
                    <a ><img src="logo.png" width="10%" alt="logo"/></a>
                </div>
                <div className="col-md-6">
                    <div className="card-deck2">
                        <div className="data-card">

                            <h5>Precio: {this.datos.price}</h5>
                            <h5>Modelo: {this.datos.year}</h5>
                            <h5>Kilometros recorridos: {this.datos.km}</h5>
                            <h5>Categoria: {this.datos.category}</h5>
                            <h5>Color: {this.datos.color}</h5>
                            <h5>Placa: {this.datos.license}</h5>
                            <h5>Marca: {this.datos.brand}</h5>
                            <h5>: {this.datos.centcubs}</h5>
                            <h5>Cilindraje: {this.datos.cil_capacity}</h5>
                            <h5>Número de puertas: {this.datos.doors}</h5>
                            <h5>Transmision: {this.datos.transmission}</h5>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>  
        )
    }

}
export default CarDetail;