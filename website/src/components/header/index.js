import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

class Header extends Component {
  render() {
    return (
			<header class={style.header}>
				<div class="container">
					<Link href={`${baseroute}/`}><h1>Check My Eval Rate</h1></Link>
					<nav>
						<Link activeClassName={style.active} href={`${baseroute}/`}>Home</Link>
						<Link activeClassName={style.active} href={`${baseroute}/school`}>By school</Link>
						<Link activeClassName={style.active} href={`${baseroute}/course`}>By course</Link>
						<Link activeClassName={style.active} href={`${baseroute}/about`}>About</Link>
					</nav>
				</div>
			</header>
		)
	}
};

export default Header;
