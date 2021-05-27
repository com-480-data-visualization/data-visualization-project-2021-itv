import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

import outBoundRatioPerYearsImage from '../../assets/images/tourism-by-year.png';

class CountryDetails extends Component {

  render() {
		if (this.props.countryCode == undefined)
			return (
				<div id={style.country_details}>
					<div class="container">
						<h2>Detail for a country</h2>
						<p>
							Click on a country on the above map to get mode details about it!
						</p>
					</div>
				</div>
			)
		else
			return (
				<div id={style.country_details}>
					<div class="container">
						<h2>Detail for Afghanistan ({this.props.countryCode})</h2>
						<p>
							Here will be displayed some details for Afghanistan, if it is the selected country.
						</p>
						<img src={outBoundRatioPerYearsImage} alt='Scheme for the outbound expenses by year' title='Outbound Expenses by year' />
					</div>
				</div>
			)
	}
};

export default CountryDetails;
