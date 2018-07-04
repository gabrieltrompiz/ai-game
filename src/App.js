import React, { Component } from 'react';
import './index.css';
import Game from './Game';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {theme: 0}
	}

	handleChangeTheme = event => {
		this.setState({theme: event.target.id})
	}

	render() {
		return(
			<div id="app">
				<Header changeTheme={this.handleChangeTheme} />
				<Game theme={this.state.theme}/>
				<Footer />
			</div>
		);
	}
}

export default App;