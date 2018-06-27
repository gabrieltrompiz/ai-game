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
      	<img style={charStyle} src={this.props.theme} className='sprites' id={this.props.position} alt='character'/>
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
  	var grid = Array(16).fill(false);
  	for (let i = 0; i < 5; i++) {
  		grid[sprites[i].id] = true;
  	}
  	this.setState({position: sprites[1].id})
  }

}

export default Character;