import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            item: "",
            item: [],
            list: []
        }
    }
    handleSubmit(e){
       e.preventDefault();
     if(this.state.item === ""){
        alert("Empty Item is not Allowed!")
     }
     else if (this.state.list.indexOf(this.state.item) < 0){
        this.setState({
            list: this.state.list.concat(this.state.item)
        })
    }  
    else{
        alert("Item Already Added in the list!")
     }
    }
    handleChange(e){
        this.setState({
            item: e.target.value
        })
    }
  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
           <input
            type = "text"
            name = "item"
            id = "item"
            placeholder="Enter something here!"
            value = {this.state.item}
            onChange={this.handleChange}
           />
           <button id="searchbtn">Add</button>
           <button onClick={() => {
             this.setState({
                item: []
             })
           }}>clear Text</button>
         </form>
         <div>
            <ul>
                {
                    this.state.list.map((l,k) => {
                        return <li key={k}>{l}</li>
                    })
                }
            </ul>
            <button onClick={() => {
                this.setState({
                    list: []
                })
            }}>Reset</button>
         </div>
      </div>
    )
  }
}
