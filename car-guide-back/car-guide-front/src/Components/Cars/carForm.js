import React, {Component} from "react";
import "./cars.css";
class CarForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('/cars/', {
          method: 'POST',
          body: data,
        });
      }
    render()
    {
        return(
            <div className="card">
                <h1>Digite los siguientes datos:</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="col">
                            <h6>Año de modelo del auto:</h6>
                            <input type="text" class="form-control" placeholder="Año"/><br></br>
                        </div>
                        <div class="col">
                        <h6>Kilometros recorridos por el auto:</h6>
                            <input type="text" class="form-control" placeholder="Kilometros recorridos"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <h6>Categoria del auto:</h6>
                            <input type="text" class="form-control" placeholder="Categoria"/><br></br>
                        </div>
                        <div class="col">
                        <h6>Color del auto:</h6>
                            <input type="text" class="form-control" placeholder="Color"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <h6>Fecha actual:</h6>
                            <input type="date" class="form-control" placeholder="Fecha"/><br></br>
                        </div>
                        <div class="col">
                        <h6>Nombre del auto:</h6>
                            <input type="text" class="form-control" placeholder="Nombre"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <h6>Placa del auto:</h6>
                            <input type="text" class="form-control" placeholder="Placa"/><br></br>
                        </div>
                        <div class="col">
                        <h6>Precio de venta:</h6>
                            <input type="text" class="form-control" placeholder="Precio"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <h6>Marca del auto:</h6>
                            <input type="text" class="form-control" placeholder="Marca"/><br></br>
                        </div>
                        <div class="col">
                        <h6>Cilindraje en centimetros cubicos:</h6>
                            <input type="text" class="form-control" placeholder="Cilindraje (cm)"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <h6>Capacidad de cilindraje:</h6>
                            <input type="text" class="form-control" placeholder="Cilindraje"/><br></br>
                        </div>
                        <div class="col">
                        <h6>Modelo del auto:</h6>
                            <input type="text" class="form-control" placeholder="Modelo"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <h6>Número de puertas del auto:</h6>
                            <input type="number" min="1" max="5" class="form-control" placeholder="Número de puertas"/><br></br>
                        </div>
                        <div class="col">
                        <h6>Transmision del auto:</h6>
                            <input type="text" class="form-control" placeholder="Transmision"/><br></br>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success">Admin</button>
                </form>
            </div>
            
        )
    }

}
export default CarForm;