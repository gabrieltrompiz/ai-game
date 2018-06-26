import React, { Component } from 'react';
import './index.css';
import Game from './Game';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

	componentDidMount() {
	    document.getElementById("loading-screen").remove();
	}

	render() {
		return(
			<div id="app">
				<Header />
				<Game />
				<Footer />
			</div>
		);
	}
}

export default App;