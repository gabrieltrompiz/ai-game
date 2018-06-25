import React, { Component } from 'react';
import './Game.css'
import Character from './Character'
import Treasure from './Treasure'
import Traps from './Traps'
import Monster from './Monster'

class Box extends Component {
    render() {
      let characterPos = this.props.positions[0];
      let treasurePos = this.props.positions[1];
      let trap1Pos = this.props.positions[2];
      let trap2Pos = this.props.positions[3];
      let monsterPos = this.props.positions[4];

      if(characterPos === this.props.id) {
        return (
          <div className="box" id={this.props.id}>
           <Character />
          </div>
       );
      } 
      else if (treasurePos === this.props.id) {
        return (
          <div className="box" id={this.props.id}>
            <Treasure />
          </div>
        );
      }
      else if (trap1Pos === this.props.id) {
        return (
          <div className="box" id={this.props.id}>
            <Traps />
          </div>
        );
      }
      else if (trap2Pos === this.props.id) {
        return (
          <div className="box" id={this.props.id}>
            <Traps />
          </div>
        );
      }
      else if (monsterPos === this.props.id) {
        return (
          <div className="box" id={this.props.id}>
            <Monster />
          </div>
        );
      }
      else {
        return (
          <div className="box" id={this.props.id}></div>
      );
    }
  }
}

export default Box;