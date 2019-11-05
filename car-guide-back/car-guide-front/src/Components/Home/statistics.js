import React, {Component} from "react";
import "./statistics.css";
class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state= { 
            carros:[],
          };
        
        this.renderCarsStatistics = this.renderCarsStatistics.bind(this);
    }
    componentDidMount(){
        fetch(
            "/cars" 
         ).then((response)=>{return response.json();
         }).then(data=>{
         this.setState({carros:data});
       })
    }

    renderCarsStatistics() {
        if (this.state.carros.length > 0) 
        {
            return (
                <div className="row dashboard-background2">
                    <div className="col-4">
                        <div className="card space link">
                        <h5 id="card-title">Más vendido</h5>
                        <img className="card-img-top" width="50" height="200" src={`${this.state.carros[4].image}`} alt="Card image cap"></img>
                        <p id="card-sub-title">{this.state.carros[4].name}</p> 
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card space link">
                        <h5 id="card-title">Marca más popular</h5>
                        <img className="card-img-top" width="50" height="200" src={`${this.state.carros[2].image}`} alt="Card image cap"></img>
                        <p id="card-sub-title">{this.state.carros[2].brand}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card space link">
                        <h5 id="card-title">Modelo más popular</h5>
                        <img className="card-img-top" width="50" height="200" src={`${this.state.carros[3].image}`} alt="Card image cap"></img>
                        <p id="card-sub-title">{this.state.carros[3].model}</p>
                        
                        </div>
                    </div>
                </div>
            ) 
        }
    }
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
            <h1 className="align">Conoce las últimas <span className="pink">tendencias</span></h1>
            {this.renderCarsStatistics()}
        </div>
        )
    }

}
export default Home;