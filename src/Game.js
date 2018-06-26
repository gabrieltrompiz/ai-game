import React, { Component } from 'react';
import './Game.css';
import Box from './Box';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {positions: this.randomLocations()};
  }
  
  renderBoxes() {
    var boxes = []
    for (var i = 0; i < 16; i++) {
      boxes.push(<Box id={i} key={i} positions={this.state.positions}/>);
    }
    return boxes;
  }

  randomLocations() {
    var positionsArray = [12];
    while(positionsArray.length < 5){
      var randomnumber = Math.floor(Math.random() * 16);
      if(positionsArray.indexOf(randomnumber) > -1) continue;
      positionsArray[positionsArray.length] = randomnumber;
    }
    return positionsArray;
  }

  reload() {
    this.setState({positions: this.randomLocations()});
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
}

export default Game;