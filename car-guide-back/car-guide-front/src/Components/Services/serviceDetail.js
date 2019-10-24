import React, { Component } from "react";
import "../../App.css";

class Service extends Component {

    /* Información disponible en MongoDB
    *  - Name
    *  - Description
    *  - Price
    *  - Image
    */

    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h3>Description:</h3>
                <p>{this.props.description}</p>
                <h3>Price: </h3><p>{this.props.price}</p>
                <img href={this.props.image} alt={this.props.name}/>
            </div>
        );
    }
}

export default Service;