import React, { Component } from 'react'
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className='test'>This is a first paragraph from home component</h1>
        <button className='btn btn-primary'>Click Here</button>
      </div>
    )
  }
}
