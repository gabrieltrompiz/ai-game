import React, { Component } from 'react';

class Traps extends Component {
  render() {
    return(
      <img src={require('./images/fire.png')} className="sprites" alt='traps'/>
    );
  }
}

export default Traps;