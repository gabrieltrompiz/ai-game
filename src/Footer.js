import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
	render() {
		return (
			<footer className="page-footer unselectable undraggable">
				<p className="love">Made with <i className="fas fa-heart"></i> by Gabriel Trompiz</p>
			</footer>
		);
	}
}

export default Footer;