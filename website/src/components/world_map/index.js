import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

class WorldMap extends Component {
  render() {
    return (
			<div class="container" id="world_map">
				Here will be displayed the choropleth world map
			</div>
		)
	}
};

export default WorldMap;
