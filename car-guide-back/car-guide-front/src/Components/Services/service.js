import React, { Component } from "react";
import './services.css';
class Service extends Component {

    render(){
        return(
            <div className="data-card servicios-card">
                <div className="row">
                    <div className="col-3">
                        <img className="card-img-top" width="50" src={`${this.props.service.image}`}/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7">
                        <div className="row text-left">
                            <h5 id="card-title">{this.props.service.name}</h5>
                        </div>
                        <div className="row text-left">
                            <p>{this.props.service.description}</p>
                        </div>
                        <div className="row bg-danger text-light">
                            <p className="text-align"><b>$ {this.props.service.price} COP </b></p>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        );
    }

}

export default Service;