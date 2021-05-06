import { Fragment, h } from 'preact';
import { Router } from 'preact-router';

//import style from '../style/index.css';
import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import About from '../routes/about'
import Beatmaps from '../routes/beatmaps'

const App = () => (
	<Fragment>
		<Header />
		<div id="app">
			<Router>
				<Home path="/" />
				<Beatmaps path="/beatmaps" />
				<About path="/about" />
			</Router>
		</div>
		<Footer />
	</Fragment>
)

export default App;
