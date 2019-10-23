import React, {Component} from "react";

class Home extends Component {
    render()
    {

        return(
        <div className="dashboard-background">
            <h1>Autos</h1>
            <div className="card-deck">
                <div className="data-card">
                <h5 id="card-title">Más vendido</h5>
                <p id="card-data">Chevrolet Captiva</p>
                </div>
                <div className="data-card">
                <h5 id="card-title">Marca más popular</h5>
                <p id="card-data">Ford</p>
                </div>
                <div className="data-card">
                <h5 id="card-title">Modelo más popular</h5>
                <p id="card-data">Aveo</p>
                </div>
                <br></br>
            </div>
        </div> 
        )
    }

}
export default Home;