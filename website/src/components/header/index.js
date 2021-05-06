import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

class Header extends Component {
  render() {
    return (
			<header class={style.header}>
				<div class="container">
					<h1><Link href="/">osu! Vizu</Link></h1>
					<nav>
						<Link activeClassName={style.active} href="/">Home</Link>
						<Link activeClassName={style.active} href="/beatmaps">Beatmaps</Link>
						<Link activeClassName={style.active} href="/about">About</Link>
					</nav>
				</div>
			</header>
		)
	}
};

export default Header;
