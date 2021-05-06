import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

class Header extends Component {
  render() {
    return (
			<header class={style.header}>
				<div class="container">
					<h1><Link href={`${baseroute}/`}>osu! Vizu</Link></h1>
					<nav>
						<Link activeClassName={style.active} href={`${baseroute}/`}>Home</Link>
						<Link activeClassName={style.active} href={`${baseroute}/beatmaps`}>Beatmaps</Link>
						<Link activeClassName={style.active} href={`${baseroute}/about`}>About</Link>
					</nav>
				</div>
			</header>
		)
	}
};

export default Header;
