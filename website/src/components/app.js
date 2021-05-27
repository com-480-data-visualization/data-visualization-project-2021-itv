import { Fragment, h } from 'preact';
import { Router } from 'preact-router';

//import style from '../style/index.css';
import Header from './header';
import Footer from './footer';
import baseroute from '../baseroute';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import About from '../routes/about';

const App = () => (
	<Fragment>
		<Header />
		<div id="app">
			<Router>
				<Home path={`${baseroute}/`} />
				<About path={`${baseroute}/about`} />
			</Router>
		</div>
		<Footer />
	</Fragment>
)

export default App;
