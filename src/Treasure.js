import React, { Component } from 'react';

class Treasure extends Component {
  render() {
    return(
      <img src={require('./images/triforce.gif')} className='sprites' alt='treasure'/>
    );
  }
}

export default Treasure;