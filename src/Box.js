import React, { Component } from 'react';
import './Game.css'
import Character from './Character'

class Box extends Component {
    render() {
     if(this.props.num === this.props.id) {
      return (
       <div className="box" id={this.props.id}>
        <Character />
       </div>
      );
     }
    else {
      return (
        <div className="box" id={this.props.id}>
        </div>
     );
    }
  }
}

export default Box;