import React, {Component} from "react";
import "./statistics.css";
class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state= { 
            carros:[],
          };
    }
    get(){
        fetch(
           "/cars/" 
        ).then((response)=>{response.json();
        }).then(data=>this.setState({carros:data}))
    }
    render()
    {

        return(
        <div>
            <div class="container2">
                <a ><img src="home.jpg" width="100%" alt="logo"/></a>
                <div class="text-block">
                    <h4>LA GUIA IDEAL</h4>
                    <p>Trabajamos para brindarte toda la información que necesitas para tomar las mejores decisiones que te permitan encontrar el auto de tus sueños.</p>
                </div>
            </div>
            <h1 className="align">Conoce las últimas tendencias</h1>
            
            <div className="card-deck2 dashboard-background2">
                <div className="data-card">
                <h5 id="card-title">Más vendido</h5>
                <p id="card-data">{this.state.carros[1].name}</p>
                
                </div>
                <div className="data-card">
                <h5 id="card-title">Marca más popular</h5>
                <p id="card-data">{this.state.carros[2].name}</p>
                </div>
                <div className="data-card">
                <h5 id="card-title">Modelo más popular</h5>
                <p id="card-data">{this.state.carros[3].name}</p>
                </div>
                <br></br>
            </div>
        </div>
        )
    }

}
export default Home;