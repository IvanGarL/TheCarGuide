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
         ).then((response)=>{return response.json();
         }).then(data=>{
            console.log(data);
            this.setState({datos:data});
         })
            
    };
    renderDetail() {
        return ()=>
        (
            <div>
                <h1>{this.datos.name}</h1>
                <div className="row">
                    <div className="col-md-6">
                        
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
        );
    }
    render()
    {
        this.find();
        return(
        <div className="dashboard-background2">
            <div className="container-fluid">
                <div className="row">
                    {this.renderDetail()}
                </div>
            </div>
        </div>  
        )
    }

}
export default CarDetail;