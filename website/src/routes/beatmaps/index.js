import { h } from 'preact';
import style from './style.css';

import lineChart from '../../assets/images/scores.png';


function Slider(props) {
	return <div class={style.slider}>
		<div>{props.label}</div>
		<input type="range" min={props.min} max={props.max} value={props.value}></input>
		<div style={style.value}>{props.value}</div>
	</div>
}

const Beatmaps = () => (
	<section class={style.beatmaps}>
		{/* <div class={style.row}> */}
				<div class={style.left}>
					<input
						type="search"
						class={style.searchbar}
						placeholder="Enter map id"
					/>
					<h2>General info</h2>
					<div class={style.info}>Name: beatmap name</div>
					<div class={style.info}>ID: beatmap ID</div>
					<div class={style.info}>Creator: beatmap creator</div>
					<div class={style.info}>Created: beatmap creation date</div>
					<div class={style.features}>
						<Slider label="feature1" min="1" max="100" value="50"/>
						<Slider label="feature2" min="1" max="100" value="30"/>
						<Slider label="feature3" min="1" max="100" value="70"/>
					</div>
				</div>
			<div class={style.right}>
				<h2>How difficult is this beatmap?</h2>
				<p>The figure below displays the probability that the player achieves the score on the given beatmap.
				This is very useful to estimate the difficulty of the beatmap.</p>
				<img src={lineChart}/>
			</div>
		{/* </div> */}
	</section>
);

export default Beatmaps;