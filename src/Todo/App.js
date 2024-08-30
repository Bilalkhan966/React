import { Component } from "react";
import Add from './Add'
import List from './List'
import Reset from './Reset'
class App extends Component {
    constructor(){
        super()
        this.state = {
            tasks:[
                {"text": "Shoes", "status": "Incomplete"},
                {"text": "Stationary", "status": "Incomplete"},
                {"text": "Vegetable", "status": "Complete"},
                {"text": "Tv", "status": "Incomplete"},
                {"text": "Cloths", "status": "Complete"} ]
        }
    }
   render(){
    return(
        <div>
            <h1 style={{color: 'blue'}}>Total Task: {this.state.tasks.length}</h1>
            <h2 style={{color: 'green'}}>Complete: {this.state.tasks.filter(task => task.status === 'Complete').length}</h2>
            <h2 style={{color: 'red'}}>Incomplete: {this.state.tasks.filter(task => task.status === 'Incomplete').length}</h2>
            <Add />
            <List tasks = {this.state.tasks} />
            <Reset />
        </div>
    )
   } 
}
export default App