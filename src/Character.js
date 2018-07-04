import React, { Component } from 'react';

class Character extends Component {
	constructor(props) {
		super(props);
		this.state = {position: this.props.position, reload: this.props.reload}
	}

	componentDidMount() {
		this.sprites = document.getElementsByClassName('sprites');
		this.rules = this.initializeRules();
		this.monsterIsDead = false;
		this.foundTreasure = false;
		this.shootDirection = null;
	  this.treasurePos = null; 
	}

	componentWillReceiveProps(nextProps) {
	  if (nextProps.position !== this.state.position) {
	    this.setState({ position: nextProps.position });
	  }
	  if(nextProps.reload !== this.state.relaod) {
	  	this.setState({reload: nextProps.reload }, function() {
	  		this.sprites[4].className = 'sprites';
	  		this.sprites[0].className = 'sprites';
	  		this.rules = this.initializeRules();
	  		this.monsterIsDead = false;
	  		this.foundTreasure = false;
	  		this.shootDirection = null;
	  		this.treasurePos = null;
	  		document.getElementById('starter').disabled = false;
	  	})
	  }
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
      	<button type="button" id="starter" onClick={() => this.hellLogic(this.state.position)}>Next</button>
      </div>	
    ); 
  }

  hellLogic(pos) {
  	this.rules[pos].visited = true;
  	this.rules[pos].safe = true;
  	let neighbors = this.getAdjacent(pos);
  	this.calculateWindAndStench(pos);
  	if(this.getMonsterPosition(pos) && !this.monsterIsDead){
  		this.monsterIsDead = true;
      this.sprites[4].className = 'sprites dead';
   	}
   	else if(this.getTrasurePosition(pos) && !this.foundTreasure){
   		this.foundTreasure = true;
   		this.moveCharacter(this.treasurePos);
   	}
  	else if(this.getTrapLoop(neighbors, pos)){
  		console.log('trap loop')
  		if(this.getLeft(pos) && this.rules[pos - 1].probTrap < 0.66) {
  			this.moveCharacter(pos - 1);
  		}
  		else if(this.getUp(pos) && this.rules[pos - 4].probTrap < 0.66) {
  			this.moveCharacter(pos - 4);
  		}
  		else if(this.getRight(pos) && this.rules[pos + 1].probTrap < 0.66) {
  			this.moveCharacter(pos + 1);
  		}
  		else if(this.getDown(pos) && this.rules[pos + 4].probTrap < 0.66) {
  			this.moveCharacter(pos + 4);
  		}
  		else{
  			this.moveCharacter(neighbors[(Math.floor(Math.random() * neighbors.length))]);
  		}
  	}
  	else if(this.getDanger(pos)){
 	  	if(this.getLeft(pos) && this.rules[pos - 1].safe) {
	  		this.moveCharacter(pos - 1);
	  	}
	  	else if(this.getDown(pos) && this.rules[pos + 4].safe) {
	  		this.moveCharacter(pos + 4);
	  	}
	  	else if(this.getRight(pos) && this.rules[pos + 1].safe) {
	  		this.moveCharacter(pos + 1);
	  	}
	  	else if(this.getUp(pos) && this.rules[pos - 4].safe) {
	  		this.moveCharacter(pos - 4);
	  	}
 	  }
 	  else if(this.getFreeSpace(pos)){
 	  	if(this.getLeft(pos) && !this.rules[pos - 1].visited) {
	  		this.moveCharacter(pos - 1);
	  	}
	  	else if(this.getDown(pos) && !this.rules[pos + 4].visited) {
	  		this.moveCharacter(pos + 4);
	  	}
	  	else if(this.getRight(pos) && !this.rules[pos + 1].visited) {
	  		this.moveCharacter(pos + 1);
	  	}
	  	else if(this.getUp(pos) && !this.rules[pos - 4].visited) {
	  		this.moveCharacter(pos - 4);
	  	}
	  	else {
	 	  	this.moveCharacter(neighbors[(Math.floor(Math.random() * neighbors.length))]);
 		  }
 	  }
  }

  initializeRules() {
  	var grid = Array(16).fill(null);
  	for (let i = 0; i < 5; i++) {
  		grid[this.sprites[i].id] = i;
  	}
  	let rules = Array(16);
  	let adjacents;
  	for (let i = 0; i < rules.length; i++)
   	 { rules[i] = {lit: false, wind: false, stench: false, visited: false, safe: false,
   	 nearDanger: false, probTreasure: 0, probTrap: 0, probMonster: 0} }
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
  		rules[adjacents[i]].stench = true;
  	}
  	return rules;
  }

  getFreeSpace(pos){
  	if((!this.rules[pos].stench && !this.rules[pos].wind) || (!this.rules[pos].wind && this.monsterIsDead)) { return true }
  	else { return false }
  }

	getDanger(pos){
		if((this.rules[pos].stench && !this.monsterIsDead) || this.rules[pos].wind) { return true }
		else { return false }
	}

	getTrapLoop(neighbors, pos){
		var counter = 0;
		for(let i = 0; i < neighbors.length; i++) {
			if(!this.rules[neighbors[i]].safe && (this.rules[pos].wind || this.rules[pos].stench)) { counter++ }
		}	
		if(counter === neighbors.length) { return true }
		return false;
	}

	calculateWindAndStench(pos) {
		if(!this.rules[pos].nearDanger){
			if(this.rules[pos].wind){
				this.calculateOdds(pos, true, false, false);
			}
			if(this.rules[pos].stench){
				this.calculateOdds(pos, false, true, false);
			}
			if(this.rules[pos].lit){
				this.calculateOdds(pos, false, false, true);
			}
		}
	}

	calculateOdds(pos, trap, monster, treasure) {
		if(this.getUp(pos) && !this.rules[pos - 4].visited) {
			if(trap){
				this.rules[pos - 4].probTrap += 0.33;
			}
			if(monster){
				this.rules[pos - 4].probMonster += 0.33;
			}
			if(treasure){
				this.rules[pos - 4].probTreasure += 0.33;
			}
		}
		if(this.getLeft(pos) && !this.rules[pos - 1].visited) {
			if(trap){
				this.rules[pos - 1].probTrap += 0.33;
			}
			if(monster){
				this.rules[pos - 1].probMonster += 0.33;
			}
			if(treasure){
				this.rules[pos - 1].probTreasure += 0.33;
			}
		}
		if(this.getDown(pos) && !this.rules[pos + 4].visited) {
			if(trap){
				this.rules[pos + 4].probTrap += 0.33;
			}
			if(monster){
				this.rules[pos + 4].probMonster += 0.33;
			}
			if(treasure){
				this.rules[pos + 4].probTreasure += 0.33;
			}
		}
		if(this.getRight(pos) && !this.rules[pos + 1].visited) {
			if(trap){
				this.rules[pos + 1].probTrap += 0.33;
			}
			if(monster){
				this.rules[pos + 1].probMonster += 0.33;
			}
			if(treasure){
				this.rules[pos + 1].probTreasure += 0.33;
			}
		}
		this.rules[pos].nearDanger = true;
	}

	getMonsterPosition(pos) {
		if(this.getUp(pos) && this.rules[pos - 4].probMonster >= 0.66){
			this.shootDirection = (pos - 4);
			return true;
		}
		if(this.getRight(pos) && this.rules[pos + 1].probMonster >= 0.66){
			this.shootDirection = (pos + 1);
			return true;
		}
		if(this.getDown(pos) && this.rules[pos + 4].probMonster >= 0.66){
			this.shootDirection = (pos + 4);
			return true;
		}
		if(this.getLeft(pos) && this.rules[pos - 1].probMonster >= 0.66){
			this.shootDirection = (pos - 1);
			return true;
		}
		return false;
	}

	getTrasurePosition(pos) {
		if(this.getUp(pos) && this.rules[pos - 4].probTreasure >= 0.66){
			this.treasurePos = (pos - 4);
			return true;
		}
		if(this.getRight(pos) && this.rules[pos + 1].probTreasure >= 0.66){
			this.treasurePos = (pos + 1);
			return true;
		}
		if(this.getDown(pos) && this.rules[pos + 4].probTreasure >= 0.66){
			this.treasurePos = (pos + 4);
			return true;
		}
		if(this.getLeft(pos) && this.rules[pos - 1].probTreasure >= 0.66){
			this.treasurePos = (pos - 1);
			return true;
		}
		if(pos === parseInt(this.sprites[1].id, 10)){
			this.treasurePos = pos;
			return true;
		}
		return false;
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
  	if (num === 12) { return [8, 13] }
  	if (num === 13) { return [9, 12, 14] }
  	if (num === 14) { return [10, 13, 15] }
  	if (num === 15) { return [11, 14] }							
  }

	getLeft(num){
		if (num === 0) { return false }
  	if (num === 1) { return true }
  	if (num === 2) { return true }
  	if (num === 3) { return true }
  	if (num === 4) { return false }		
  	if (num === 5) { return true }
  	if (num === 6) { return true }
  	if (num === 7) { return true }
  	if (num === 8) { return false }
  	if (num === 9) { return true }
  	if (num === 10)	{ return true }
  	if (num === 11) { return true }
  	if (num === 12) { return false }
  	if (num === 13) { return true }
  	if (num === 14) { return true }
  	if (num === 15) { return true }
	}

	getRight(num){ 
		if (num === 0) { return true }
  	if (num === 1) { return true }
  	if (num === 2) { return true }
  	if (num === 3) { return false }
  	if (num === 4) { return true }		
  	if (num === 5) { return true }
  	if (num === 6) { return true }
  	if (num === 7) { return false }
  	if (num === 8) { return true }
  	if (num === 9) { return true }
  	if (num === 10)	{ return true }
  	if (num === 11) { return false }
  	if (num === 12) { return true }
  	if (num === 13) { return true }
  	if (num === 14) { return true }
  	if (num === 15) { return false }
	}

	getDown(num){ 
		if (num === 0) { return true }
  	if (num === 1) { return true }
  	if (num === 2) { return true }
  	if (num === 3) { return true }
  	if (num === 4) { return true }		
  	if (num === 5) { return true }
  	if (num === 6) { return true }
  	if (num === 7) { return true }
  	if (num === 8) { return true }
  	if (num === 9) { return true }
  	if (num === 10)	{ return true }
  	if (num === 11) { return true }
  	if (num === 12) { return false }
  	if (num === 13) { return false }
  	if (num === 14) { return false }
  	if (num === 15) { return false }
	}

	getUp(num){ 
		if (num === 0) { return false }
  	if (num === 1) { return false }
  	if (num === 2) { return false }
  	if (num === 3) { return false }
  	if (num === 4) { return true }		
  	if (num === 5) { return true }
  	if (num === 6) { return true }
  	if (num === 7) { return true }
  	if (num === 8) { return true }
  	if (num === 9) { return true }
  	if (num === 10)	{ return true }
  	if (num === 11) { return true }
  	if (num === 12) { return true }
  	if (num === 13) { return true }
  	if (num === 14) { return true }
  	if (num === 15) { return true }
	}

	win(){}

	didIDie(pos){
		if(pos === parseInt(this.sprites[2].id, 10) || pos === parseInt(this.sprites[3].id, 10) || 
			(!this.monsterIsDead && (pos === parseInt(this.sprites[4].id, 10)))) {  
				document.getElementById('starter').disabled = true;
	      this.sprites[0].className = 'sprites dead';
    }
	}

	didIWin(pos){
		if(pos === parseInt(this.sprites[1].id, 10)){
  		document.getElementById('starter').disabled = true;
  	}
	}

	moveCharacter(pos) {
		this.setState({position: pos}, function() { 
			this.didIDie(this.state.position); 
			this.didIWin(this.state.position);
		});
	}
}

export default Character;