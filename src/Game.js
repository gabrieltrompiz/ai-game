import React, { Component } from 'react';
import './Game.css';
import Box from './Box';
import Character from './Character'
import Treasure from './Treasure'
import Traps from './Traps'
import Monster from './Monster'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {positions: this.randomLocations(), theme: this.props.theme, view: window.innerWidth, reload: false};
    this.handleResize = this.handleResize.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.theme !== this.state.theme) {
      this.setState({ theme: nextProps.theme });
    }
  }
  
  componentDidMount() {
      window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
      window.addEventListener("resize", null);
  }

  handleResize(view, event) {
        this.setState({view: window.innerWidth})
  }

  reload() {
    this.setState({positions: this.randomLocations(), reload: !this.state.reload});
  }

  render(){
    var setterTheme = this.getTheme();
    return (
      <div className="game unselectable">
        <img src={setterTheme[4]} id="logo" alt="logo"/>
        <div className="grid">
          {this.loopBoxes()}
        </div>
        <div className="imagesGrid">
          <Character position={this.state.positions[0]} theme={setterTheme[0]} fire={setterTheme[5]} 
          getPositionCSS={this.getPositionCSS} getView={this.getView} reload={this.state.reload}/>
          <Treasure position={this.state.positions[1]} theme={setterTheme[1]} getPositionCSS={this.getPositionCSS} getView={this.getView}/>
          <Traps position={this.state.positions[2]} theme={setterTheme[2]} getPositionCSS={this.getPositionCSS} getView={this.getView}/>
          <Traps position={this.state.positions[3]} theme={setterTheme[2]} getPositionCSS={this.getPositionCSS} getView={this.getView}/>
          <Monster position={this.state.positions[4]} theme={setterTheme[3]} getPositionCSS={this.getPositionCSS} getView={this.getView}/>
        </div>
        <button type="button" onClick={() => this.reload()} className="button">Restart</button>
      </div>
    );
  }

  getTheme() {
    //To add themes follow format: [character, treasure, traps, monster, logo]
    var themes = [[require('./images/link.png'), require('./images/triforce.gif'), require('./images/fire.png'),
                   require('./images/ganon.png'), require('./images/tloz.png')], //TLOZ
                  [require('./images/mario.png'), require('./images/star.gif'), require('./images/boo.png'), //Mario
                   require('./images/bowser.png'), require('./images/sm.png')], //Mario
                  [require('./images/sonic.png'), require('./images/emerald.png'), //Sonic
                   require('./images/shadow.png'), require('./images/eggman.gif'), require('./images/sth.png')], //Sonic
                  [require('./images/samus.png'), require('./images/misc.png'), require('./images/metroidsuper.png'),
                   require('./images/ridley.png'), require('./images/supermetroid.png')]]; //Sonic

    return themes[this.state.theme];
  }

  setTheme(selectedTheme){
    this.setState({theme: selectedTheme});
  }

  loopBoxes() {
    var boxes = []
      for (let i = 0; i < 16; i++){
        boxes.push(<Box key={i} />);
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

   getPositionCSS(boxNumber) {
    // [margin-left, margin-top]
    var boxes;
    if (!this.getView()) {
      boxes = [[0, 0],   [100, 0],   [200, 0],   [300, 0],
               [0, 100], [100, 100], [200, 100], [300, 100],
               [0, 200], [100, 200], [200,200],  [300, 200],
               [0, 300], [100, 300], [200, 300], [300, 300]];
    }
    else {
      boxes = [[0, 0],    [22.5, 0],    [45, 0],    [67.5, 0],
               [0, 22.5], [22.5, 22.5], [45, 22.5], [67.5, 22.5],
               [0, 45],   [22.5, 45],   [45, 45],   [67.5, 45],
               [0, 67.5], [22.5, 67.5], [45, 67.5], [67.5, 67.5]];
    }
    return boxes[boxNumber];
  }

  getView() {
    var x = window.matchMedia("(max-width: 404px)");
    if(x.matches) { return true } //Return true = mobile
    else { return false } //Return false =  desktop/large screens
  }
}

export default Game;