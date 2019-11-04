import React, {Component} from "react";
import "../../App.css";
class Car extends Component {

    render()
    {
        return(
            <div className="data-card">
                <h5 id="card-title">{this.props.obj.price}</h5>
                <img scr={`${this.props.obj.image}`}></img>
                <h6 id="card-sub-title">{this.props.obj.model}</h6>
                <h6 id="card-sub-title">{this.props.obj.category}</h6>
            </div>
        )
    }

}
export default Car;