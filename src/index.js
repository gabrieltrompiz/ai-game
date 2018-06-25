import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import Header from './Header';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
									<Header />
									<Game />
									<Footer />
								</div>, 
								document.getElementById('root'));
registerServiceWorker();
