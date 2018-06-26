import React, { Component } from 'react';
import './Game.css'
import Character from './Character'
import Treasure from './Treasure'
import Traps from './Traps'
import Monster from './Monster'

class Box extends Component {
  render() {
    let sprites = [<Character />, <Treasure />, <Traps />, <Traps />, <Monster />]
    if (this.props.sprite) {
      return(
        <div id={this.props.id} className="box">
          {sprites[this.props.count]}
        </div>
      );
    }
    else {
      return(
        <div id={this.props.id} className="box"></div>
      );
    }
  }
}

export default Box;