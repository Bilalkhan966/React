import React, {Component} from "react";
import './Card.css';
class Card extends Component {
    constructor(props){
        super(props)
    }
  render(){
    return(
        <React.Fragment>
         <div className="ui card">
              <div className="image">
              <img src= {this.props.img} />
              </div>
            <div className="content">
               <a className="header">Name: {this.props.name}</a>
            </div>

            <div className="detail">
              <span className="join">Joined: {this.props.joined}</span>
            </div>

            <div className="discription">
             Disc: {this.props.disc} 
            </div>
            <div className="friend">
              <a>
                <i className="icon"></i>
               List: {this.props.offriend} Friends
              </a>
            </div>
           </div> 

        </React.Fragment>
    )
  }  
}
export default Card;