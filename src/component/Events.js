import React, { Component } from 'react'

export default class Events extends Component {
    constructor(props){
        super(props)
        this.handle = this.handle.bind(this)
    }
    handle(e){
        if(e.target.id === "1"){
            alert("Button 1 Clicked")
        }
        else if(e.target.id === "2"){
            alert("Button 2 Clicked")
        }
    }
  render() {
    return (
      <div>
         <button onClick={(e) => this.handle(e)}
            name = "btn1"
            id = "1"
            >Click1</button>
         <button onClick={(e) => this.handle(e)}
            name = "btn2"
            id = "2"
            >Click2</button>
      </div>
    )
  }
}
