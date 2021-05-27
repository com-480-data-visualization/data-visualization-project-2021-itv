import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

import worldMapImage from '../../assets/images/map.png';

class WorldMap extends Component {
  render() {
    return (
			<div class="container" id="world_map">
				<img src={worldMapImage} alt='Scheme for the interactive choropleth world map' title='Interactive choropleth world map' />
			</div>
		)
	}
};

export default WorldMap;
