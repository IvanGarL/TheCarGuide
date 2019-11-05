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
                    <div className="row">
                        <div className="col">
                            <label>Año de modelo del auto: <input type="text" className="form-control" placeholder="Año"/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Kilometros recorridos por el auto: <input type="text" className="form-control" placeholder="Kilometros recorridos"/><br></br></label> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Categoria del auto: <input type="text" className="form-control" placeholder="Categoria"/><br></br></label>
                       
                            
                        </div>
                        <div className="col">
                        <label>Color del auto: <input type="text" className="form-control" placeholder="Color"/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Fecha actual: <input type="date" className="form-control" placeholder="Fecha"/><br></br></label>     
                        </div>
                        <div className="col">
                        <label>Nombre del auto: <input type="text" className="form-control" placeholder="Nombre"/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Placa del auto: <input type="text" className="form-control" placeholder="Placa"/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Precio de venta: <input type="text" className="form-control" placeholder="Precio"/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Marca del auto: <input type="text" className="form-control" placeholder="Marca"/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Cilindraje en centimetros cubicos: <input type="text" className="form-control" placeholder="Cilindraje (cm)"/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Capacidad de cilindraje: <input type="text" className="form-control" placeholder="Cilindraje"/><br></br></label>
                        <h6></h6>
                            
                        </div>
                        <div className="col">
                        <label>Modelo del auto: <input type="text" className="form-control" placeholder="Modelo"/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Número de puertas del auto: <input type="number" min="1" max="5" className="form-control" placeholder="Número de puertas"/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Transmision del auto: <input type="text" className="form-control" placeholder="Transmision"/><br></br></label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">Agregar auto</button><div></div>
                </form>
            </div>
            
        )
    }

}
export default CarForm;