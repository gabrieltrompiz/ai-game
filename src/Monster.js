import React, { Component } from 'react';

class Monster extends Component {
  render() {
  	if (this.props.getView()) {
	  	var monsStyle = {marginLeft: this.props.getPositionCSS(this.props.position)[0] + "vw",
	  									 marginTop: this.props.getPositionCSS(this.props.position)[1] + "vw"};
  	}
  	else {
  		monsStyle = {marginLeft: this.props.getPositionCSS(this.props.position)[0],
  							   marginTop: this.props.getPositionCSS(this.props.position)[1]};
  	}  
    return(
    	  <img style={monsStyle} src={this.props.theme} className="sprites" id={this.props.position} alt='monster'/>
    );
  }
}

export default Monster;