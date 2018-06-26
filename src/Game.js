import React, { Component } from 'react';
import './Game.css';
import Box from './Box';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {positions: this.randomLocations()};
  }
  
  loopBoxes() {
    var boxes = []
    var count = 0;
    for (let i = 0; i <= 15; i++) {
      if (this.state.positions[count] === i) {
        boxes.push(<Box id={i} key={i} positions={this.state.positions} sprite={true} count={count}/>);
        count++;
        }
        else {
          boxes.push(<Box id={i} key={i} positions={this.state.positions} sprite={false}/>);
        }
      }
    console.log(this.state.positions)
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
          {this.loopBoxes()}
        </div>
        <button type="button" onClick={() => this.reload()} className="button">Refresh</button>
      </div>
    );
  }
}

export default Game;