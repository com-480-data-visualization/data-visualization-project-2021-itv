import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

import lineChart from '../../assets/images/scores.png';
import skillImprovement from '../../assets/images/skill-improvement.png';
import webChart from '../../assets/images/web-chart.png';

class Home extends Component {
  render() {
    return (
			<section class={style.home}>
				<h1>Home</h1>
				<p>Some information about our project. For more, please visit <Link href="/about">the about page</Link>.</p>

				<p>First, have a look at this graph.</p>
				<img src={lineChart} alt="First graphic. Wow." title="First graphic. Wow." />
				<p>Amazing, right?</p>

				<p>What about this one?</p>
				<img src={skillImprovement} alt="Second graphic. Wej." title="Second graphic. Wej." />
				<p>Do you like it?</p>

				<p>Last one (on this page), I promise</p>
				<img src={webChart} alt="Last graphic" title="Last graphic" />
				<p>And <em>Voilà</em>!</p>
			</section>
		)
	};
}

export default Home;
