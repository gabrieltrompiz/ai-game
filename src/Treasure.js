import React, { Component } from 'react';

class Treasure extends Component {
  render() {
  	if (this.props.getView()) {
  	var treasureStyle = {marginLeft: this.props.getPositionCSS(this.props.position)[0] + "vw",
  									 marginTop: this.props.getPositionCSS(this.props.position)[1] + "vw"};
  	}
  	else {
  		treasureStyle = {marginLeft: this.props.getPositionCSS(this.props.position)[0],
  									   marginTop: this.props.getPositionCSS(this.props.position)[1]};
  	}
    return(
      <img style={treasureStyle} src={this.props.theme} className='sprites' id={this.props.position} alt='treasure'/>
    ); 
  }

}

export default Treasure;