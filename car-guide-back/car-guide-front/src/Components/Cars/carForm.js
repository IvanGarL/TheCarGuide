import React, {Component} from "react";
import "./cars.css";
class CarForm extends Component {

    render()
    {
        return(
            <div className="card">
                <form>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Año"/><br></br>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Kilometros recorridos"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Categoria"/><br></br>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Color"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Fecha"/><br></br>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Nombre"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Placa"/><br></br>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Precio"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Marca"/><br></br>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Cilindraje (cm)"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Cilindraje"/><br></br>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Modelo"/><br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Número de puertas"/><br></br>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Transmision"/><br></br>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            
        )
    }

}
export default CarForm;