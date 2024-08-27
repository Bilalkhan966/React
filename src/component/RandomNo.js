import {Component} from 'react'

export default class RandomNo extends Component {
    constructor(){
        super()
        this.state = {
            num: 0,
            num: [0],

        }
    }
   render(){
      const change = () => {
        this.setState({
            num: Math.floor(Math.random() * 100)
        })
      }
      const reset = () => {
        this.setState({
            num: [0]
        })
      }
     return(
        <div>
            <h1>{this.state.num}</h1>
            <button onClick={change}>Random Number</button>
            <button onClick={reset}>Reset</button>
        </div>
     )
   }
}