import React, { Component } from 'react';
import './Game.css';
import Box from './Box';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {reload: null};
  }
  renderBoxes() {
    let characterNumber = Math.floor(Math.random() * 16);
    var boxes = []
    for (var i = 0; i < 16; i++) {
      boxes.push(<Box id={i} key={i} num={characterNumber}/>);
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