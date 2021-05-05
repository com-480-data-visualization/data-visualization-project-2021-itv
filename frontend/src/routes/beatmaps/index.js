import { h } from 'preact';
import style from './style.css';

const Beatmaps = () => (
	<div class={style.beatmaps}>
		<div class={style.row}>
			<div class={style.search}>
				Searchbar here
			</div>
			<div class={style.viz}>
				Viz here
			</div>
		</div>
	</div>
);

export default Beatmaps;