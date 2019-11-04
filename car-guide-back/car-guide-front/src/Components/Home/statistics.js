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
           "/cars" 
        ).then((response)=>{ return response.json();
          }).then(data=>{
            
            console.log(data);
            this.setState({carros:data});
            console.log(this.state.carros);
        });

    }
    render()
    {
        this.get();
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
                <p id="card-data">{this.state.carros[1].name}</p>
                
                </div>
                <div className="data-card">
                <h5 id="card-title">Marca más popular</h5>
                <p id="card-data">{this.state.carros[2].brand}</p>
                </div>
                <div className="data-card">
                <h5 id="card-title">Modelo más popular</h5>
                <p id="card-data">{this.state.carros[1].model}</p>
                
                </div>
                <br></br>
            </div>
        </div>
        )
    }

}
export default Home;