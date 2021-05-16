import { Component, h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

class School extends Component {

	state = {
		available_schools: ['ENAC', 'IC', 'SB', 'STI', 'SV']
	}

	render() {
		if (this.props.schoolID == undefined)
			return (
				<section class={style.school}>
					<h1>Choose a school from the schools below</h1>
					<ul>
						{this.state.available_schools.map(s => (
							<li><Link href={`${baseroute}/school/${s}`}>{s}</Link></li>
						))
						}
					</ul>
				</section>
			);
		else
			return (
				<section class={style.school}>
					<h1>About the {this.props.schoolID} school</h1>
					Here will display some information about a specific school. These could be:
					<ul>
						<li>Progression charts of ratings for bachelor and master programs ("Who is the best?")</li>
						<li>Ranking of most evaluated courses</li>
						<li>Ranking of most popular courses amongst other schools</li>
						<li>Ranking of courses with most students</li>
						<li>...</li>
					</ul>
				</section>
			);
	}
}

export default School;