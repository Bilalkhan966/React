import React, { Component } from 'react'
import Item from './Item'
export default class List extends Component {
    constructor(props){
        super(props)

    }
  render() {
    return (
      <div>
         <ul>
            {
            this.props.tasks.map(task => {
                return <Item text = {task.text} status = {task.status}/>
            })
            }
         </ul>
      </div>
    )
  }
}
