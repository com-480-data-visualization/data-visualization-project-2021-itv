import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import WorldMap from '../../components/world_map';
import CountryDetails from '../../components/country_details';
import OutboundExpenseGraph from '../../components/outbound_expense_graph';

import style from './style.css';
import baseroute from '../../baseroute';

class Home extends Component {
	render() {
		return (
			<section class={style.home}>
				<div class="container">
					<h2>Welcome</h2>
				</div>

				<WorldMap/>

				<CountryDetails countryCode='AFG' />

				<OutboundExpenseGraph />

				<div class="container">
					<h2 id="data">Add data</h2>
					<p>And <em>Voilà</em>!</p>
				</div>

			</section>
		)
	};
}

export default Home;
