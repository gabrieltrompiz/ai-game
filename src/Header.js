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
         <button type="button" id="0" onClick={this.props.changeTheme}>TLOZ</button>
         <button type="button" id="1" onClick={this.props.changeTheme}>Mario</button>
         <button type="button" id="2" onClick={this.props.changeTheme}>Sonic</button>
         <button type="button" id="3" onClick={this.props.changeTheme}>Metroid</button>
      </header>
    );
  }
}

export default Header;