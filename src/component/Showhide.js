import { Component } from "react";

export default class Showhide extends Component {
    constructor(){
        super();
        this.state = {
            label: "hide",
            status: "true"
        }
    }
    change = () => {
        this.setState({
            label: "show",
            status: !this.state.status
        })
    }
   render(){
    return(
        <div>
        <h1>Show/Hide Text:</h1>
        {this.state.status && <p> <strong>This is some example text for testing. In this component we create a text hide and text show function which we click the button</strong></p>}
        <button className="btn btn-primary" onClick={this.change}>{this.state.label}</button>
        </div>
    )
   }
}