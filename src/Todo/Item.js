import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <li key= {this.props.text}><input type='checkbox'/>{this.props.text}-{this.props.status}</li>
      </div>
    )
  }
}
