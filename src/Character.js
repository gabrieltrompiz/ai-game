import React, { Component } from 'react';

class Character extends Component {
  render() {
    return(
      <img src={require('./images/link.png')} className='sprites' alt='character'/>
    );
  }
}

export default Character;