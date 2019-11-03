import React, {Component} from "react";
import "./statistics.css";
class Home extends Component {
    render()
    {

        return(
        <div>
            <div className="container2">
                <a ><img src="home.jpg" width="100%" alt="logo"/></a>
                <div className="text-block">
                    <h4>LA GUIA IDEAL</h4>
                    <p>Trabajamos para brindarte toda la información que necesitas para tomar las mejores decisiones que te permitan encontrar el auto de tus sueños.</p>
                </div>
            </div>
            <h1 className="align">Conoce las últimas <span class="pink">tendencias</span></h1>
            <div className="card-deck2 dashboard-background2">
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