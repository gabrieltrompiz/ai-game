import React, { Component } from 'react';
import './index.css';
import './App.css'
import Game from './Game';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {loading: true};
	}

	componentDidMount() {
	  setTimeout(() => {
	    this.setState({loading: false}); }, 3000);
	}

	render() {
		const app = <div id="app"><Header /><Game /><Footer /></div>;
		const loadingScreen = <div id="loading-screen"><i id="spinnable" className="fab fa-connectdevelop"></i><p>Loading</p></div>;

		if (this.state.loading) { return loadingScreen; }
		else { return app; }	
	}
}

export default App;