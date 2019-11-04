import React, {Component} from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Car from "./car";
class CarsList extends Component {
  constructor(props) {
    super(props);
    this.state= { 
        carros:[],
      };
    }
    getAll(){
        fetch(
           "/cars" 
        ).then((response)=>{return response.json();
        }).then(data=>{
        this.setState({carros:data});
        console.log(this.state.carros);
      })
    }

    renderCars() {
        return this.state.carros.map(
            (car,i) => <div className="col-md-4"><Link to={`/cars/${car.license}`}>
                <Car obj={car} key={i}/>
            </Link> </div>
        )
    }
    render()
    {
        this.getAll();
        return(
            <div className="card-deck2 dashboard-background2">
                    <div className="container-fluid">
                        <div className="row">
                            {this.renderCars()}
                        </div>
                    </div>
            </div>
        )
    }

}
export default CarsList;