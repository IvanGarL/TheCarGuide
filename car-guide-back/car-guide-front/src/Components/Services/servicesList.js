import React, {Component} from "react";
import Service from "./service.js";
import "../../App.css";
import { Link } from "react-router-dom";

class ServicesList extends Component {

    constructor(props){
        super(props);
        this.state = {
            servicios: []
        };
        
    }

    getAll() {
        fetch("/services/").then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({servicios: data});
        });
    }    

    renderServices() {
        return (this.state.servicios.map(
            (servicio, i) =>
                <div className="col-6">
                    <a href={`${servicio.link}`}>
                        <Service service={servicio} key={i} />
                    </a>
                </div>
        ));
    };

    render()
    {
        this.getAll();
        return(
        <div className="container-fluid" background-color="darkslategray">

            <div className="row" width="100%" id="titulo-servicios">
                <img width="100%" src="https://di-uploads-pod6.dealerinspire.com/mariettatoyota/uploads/2019/04/2019-Toyota-Prius-models-banner.jpg"/>
            </div>

            <div className="row" id="servicios">

                <div className="col-12">
                    <div className="dashboard-background">
                        <div className="card-deck">
                            
                            {this.renderServices()}

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        );
    }

}
export default ServicesList;