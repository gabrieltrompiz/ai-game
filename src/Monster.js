import React, { Component } from 'react';

class Monster extends Component {
  render() {
    return(
      <img src={require('./images/ganon.png')} className="sprites" alt='monster'/>
    );
  }
}

export default Monster;