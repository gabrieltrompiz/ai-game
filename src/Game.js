import React, { Component } from 'react';
import './Game.css';
import Box from './Box';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {reload: null};
  }
  renderBoxes() {
    let positions = [];
    while(positions.length < 5){
      var randomnumber = Math.floor(Math.random() * 16);
      if(positions.indexOf(randomnumber) > -1) continue;
      positions[positions.length] = randomnumber;
    }
    var boxes = []
    for (var i = 0; i < 16; i++) {
      boxes.push(<Box id={i} key={i} positions={positions}/>);
    }
    return boxes;
  }

  render(){
    return (
      <div className="game unselectable">
        <div className="grid undraggable">
          {this.renderBoxes()}
        </div>
        <button type="button" onClick={() => this.reload()} className="button">Refresh</button>
      </div>
    );
  }

  reload() {
    this.setState({relaod: true});
  }
}

export default Game;