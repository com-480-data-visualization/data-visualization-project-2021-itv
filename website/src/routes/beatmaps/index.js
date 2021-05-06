import { h } from 'preact';
import style from './style.css';

const Beatmaps = () => (
	<section class={style.beatmaps}>
		<div class={style.row}>
			<input
				type="search"
				class={style.search}
				placeholder="Enter map id"
			/>
			<div class={style.viz}>
				Viz here
			</div>
		</div>
	</section>
);

export default Beatmaps;