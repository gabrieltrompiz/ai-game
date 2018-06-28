import React, { Component } from 'react';

class Character extends Component {
	constructor(props) {
		super(props);
		this.state = {position: this.props.position}
	}

  render() {
  	if (this.props.getView()) {
  	var charStyle = {marginLeft: this.props.getPositionCSS(this.state.position)[0] + "vw",
  									 marginTop: this.props.getPositionCSS(this.state.position)[1] + "vw"};
  	}
  	else {
  		charStyle = {marginLeft: this.props.getPositionCSS(this.state.position)[0],
  							   marginTop: this.props.getPositionCSS(this.state.position)[1]};
  	}
    return(
    	<div>
      	<img style={charStyle} src={this.props.theme} className='sprites' id={this.state.position} alt='character'/>
      	<button type="button" id="starter" onClick={() => this.hellLogic()}>Start</button>
      </div>	
    ); 
  }

  	componentWillReceiveProps(nextProps) {
	  if (nextProps.position !== this.state.position) {
	    this.setState({ position: nextProps.position });
	  }
	}

  hellLogic() {
  	var sprites = document.getElementsByClassName('sprites'); //[0] is character, [1] is treasure, [2] and [3] are trap, [4] is monster
  	var grid = Array(16).fill(null);
  	for (let i = 0; i < 5; i++) {
  		grid[sprites[i].id] = i;
  	}
  	let rules = this.getRules(grid);
  	console.log(rules)
  }

  getRules(grid) {
  	let rules = Array(16);
  	let adjacents;
  	for (let i = 0; i < rules.length; i++)
   	 { rules[i] = {lit: false, wind: false, smell: false, probTreasure: 0, probTrap: 0, probMonster: 0} }
  	adjacents = this.getAdjacent(grid.indexOf(1));
  	for (let i = 0; i < adjacents.length; i++) {
  		rules[adjacents[i]].lit = true;
  	}
  	adjacents = this.getAdjacent(grid.indexOf(2));
  	for (let i = 0; i < adjacents.length; i++) {
  		rules[adjacents[i]].wind = true;
  	}
  	adjacents = this.getAdjacent(grid.indexOf(3));
  	for (let i = 0; i < adjacents.length; i++) {
  		rules[adjacents[i]].wind = true;
  	}
  	adjacents = this.getAdjacent(grid.indexOf(4));
  	for (let i = 0; i < adjacents.length; i++) {
  		rules[adjacents[i]].smell = true;
  	}
  	return rules;
  }

  getAdjacent(num) {
  	if (num === 0) { return [1, 4] }
  	if (num === 1) { return [0, 2, 5] }
  	if (num === 2) { return [1, 3, 6] }
  	if (num === 3) { return [2, 7] }
  	if (num === 4) { return [0, 5, 8] }		
  	if (num === 5) { return [1, 4, 6, 9] }
  	if (num === 6) { return [2, 5, 7, 10] }
  	if (num === 7) { return [3, 6, 11] }
  	if (num === 8) { return [4, 9, 12] }
  	if (num === 9) { return [5, 8, 10, 13] }
  	if (num === 10)	{ return [6, 9, 11, 14] }
  	if (num === 11) { return [7, 10, 15] }
  	if (num === 13) { return [9, 12, 14] }
  	if (num === 14) { return [10, 13, 15] }
  	if (num === 15) { return [11, 14] }							
  }

}

export default Character;