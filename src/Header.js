import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="#hola">
           <i className="fab fa-connectdevelop"></i>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;