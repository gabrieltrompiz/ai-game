import React, { Component } from 'react';

class Character extends Component {
  render() {
    return(
      <img src={require('./images/link.png')} id='character' alt='character'/>
    );
  }
}

export default Character;