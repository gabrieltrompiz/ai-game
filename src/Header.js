import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar01">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar01">
          <ul className="navbar-nav mr-auto mt-2 mt-l-0">
            <button type="button" className="btn-navbar" id="0" onClick={this.props.changeTheme} >
              <img src={require('./images/triforceBar.png')} id="0" className="navLogo" alt="item"></img> The Legend of Zelda
            </button>
            <button type="button" className="btn-navbar" id="1" onClick={this.props.changeTheme} >
              <img src={require('./images/mushroom.png')} id="1" className="navLogo" alt="item"></img> Super Mario
            </button>
            <button type="button" className="btn-navbar" id="2" onClick={this.props.changeTheme} >
              <img src={require('./images/sonicLogo.png')} id="2" className="navLogo" alt="item"></img> Sonic
            </button>
            <button type="button" className="btn-navbar" id="3" onClick={this.props.changeTheme} >
                <img src={require('./images/metroidLogo.png')} id="3" className="navLogo" alt="item"></img> Metroid
            </button>
            <div className="dropdown-divider d-md-none"></div>
          </ul>
          <ul className="navbar-nav ml-auto my-2">
            <button type="button" className="btn-navbar">
              <li className="nav-item">
                <a rel="noopener noreferrer" className="nav-link" href="https://github.com/gabrieltrompiz/ai-game" target="_blank">
                  <i className="fab fa-github"></i>
                  <span  className="d-md-none">  Fork project on GitHub</span>
                </a>
              </li>
            </button>
          </ul>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;