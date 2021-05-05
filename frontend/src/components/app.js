import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import About from '../routes/about'
import Beatmaps from '../routes/beatmaps'

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<About path="/about" />
			<Beatmaps path="/beatmaps" />
		</Router>
	</div>
)

export default App;
