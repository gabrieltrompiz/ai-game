import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  showMenu(){

  }

  render() {
    return (
      <header className="navbar">
         <i className="fab fa-connectdevelop"></i>
         <button className="toggler" onClick={() => this.showMenu()}>
          <i className="fas fa-bars"></i>
         </button>
      </header>
    );
  }
}

export default Header;