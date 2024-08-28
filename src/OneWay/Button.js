import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props)
    }
    ButtonClick = () => {
        this.props.change(7)
    }
  render() {
    return (
      <div>
        <button onClick={this.ButtonClick}>Change Number</button>
      </div>
    )
  }
}
