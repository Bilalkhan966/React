import React, { Component } from 'react'

export default class Reset extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <button onChange={(e) => {
            this.setState({
                
            })
        }}>Reset</button>
      </div>
    )
  }
}
