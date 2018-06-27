import React, { Component } from 'react';

class Traps extends Component {
  render() {
  	if (this.props.getView()) {
  	var trapStyle = {marginLeft: this.props.getPositionCSS(this.props.position)[0] + "vw",
  									 marginTop: this.props.getPositionCSS(this.props.position)[1] + "vw"};
  	}
  	else {
  		trapStyle = {marginLeft: this.props.getPositionCSS(this.props.position)[0],
  							   marginTop: this.props.getPositionCSS(this.props.position)[1]};
  	}
    return(
      <img style={trapStyle} src={this.props.theme} className='sprites' id={this.props.position} alt='trap'/>
    ); 
  }

}

export default Traps;