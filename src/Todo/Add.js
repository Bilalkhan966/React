import React, { Component } from 'react'

export default class Add extends Component {
    constructor(){
        super()
        this.state = {
          Textarea: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            Textarea: e.target.value
        })
    }
    handleSubmit = () => {
        
    }
  render() {
    return (
      <div>
        <h1>Add New Tasks</h1>
        <form onSubmit={this.handleSubmit}>
            <input 
             type = "text"
             name = "item"
             id = "item"
             value = {this.state.Textarea}
             onChange={this.handleChange}
            />
        </form>
      </div>
    )
  }
}
