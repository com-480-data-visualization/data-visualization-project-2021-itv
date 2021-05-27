import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

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
						<h2>Detail for {this.props.countryCode}</h2>
						<p>
							Here will be displayed the details for {this.props.countryCode}
						</p>
					</div>
				</div>
			)
	}
};

export default CountryDetails;
