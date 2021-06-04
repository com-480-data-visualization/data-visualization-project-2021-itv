import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import WorldMap from '../../components/world_map';
import CountryDetails from '../../components/country_details';
import OutboundExpenseGraph from '../../components/outbound_expense_graph';

import {getCountryContinent} from '../../data/utils';

import style from './style.css';

class Home extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			year: 2005,
			countryCode: '',
			continent: 'Europe'
		}
	}

	setYear(newYear) {
		const code = this.state.countryCode;
		const continent = this.state.continent;
		this.setState({
			year: newYear,
			countryCode: code,
			continent: continent
		})
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
					<div>Here are three International World Tourism plots:</div>
					<ul>
						<li>
							<a href="#worldmap">World Map</a>
						</li>
						<li>
							<a href="#linechart">Departures per capita year by year</a>
						</li>
						<li>
							<a href="#bubbles">Outbound/Expanse bubble chart</a>
						</li>
					</ul>
				</div>

				<WorldMap 
					year={this.state.year} 
					onCountryChange={(c) => {this.setCountry(c)}} onYearChange={(y) => {this.setYear(y)}} 
				/>

				<CountryDetails 
					countryCode={this.state.countryCode} 
					continent={this.state.continent}
				/>
				
				<OutboundExpenseGraph year={this.state.year}/>

			</section>
		)
	};
}

export default Home;
