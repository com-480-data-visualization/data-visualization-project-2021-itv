import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import WorldMap from '../../components/world_map';
import CountryDetails from '../../components/country_details';
import OutboundExpenseGraph from '../../components/outbound_expense_graph';

import {getCountryContinent} from '../../data/utils';

import style from './style.css';
import baseroute from '../../baseroute';

class Home extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			year: '',
			countryCode: '',
			continent: 'Europe'
		}
	}

	setCountry(newCountryCode) {
		const oldYear = this.state.year;
		if (this.state.countryCode !== newCountryCode) {
			getCountryContinent(newCountryCode, (continent) => {
				this.setState({
					year: oldYear,
					countryCode: newCountryCode,
					continent: continent
				})
			})
		}
	}

	render() {
		return (
			<section class={style.home}>
				<div class="container">
					<h2>Welcome</h2>
				</div>

				<WorldMap onCountryChange={(c) => {this.setCountry(c)}} />

				<CountryDetails 
					countryCode={this.state.countryCode} 
					continent={this.state.continent}
				/>
				
				<OutboundExpenseGraph />

			</section>
		)
	};
}

export default Home;
