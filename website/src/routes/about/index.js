import { h } from 'preact';
import style from './style.css';

import { Link } from 'preact-router/match';

const About = () => (
	<section class={'about ' + style.about}>
		<h1>About</h1>
		<div>
			<p>Here we will describe the project, the context (Data Visualization class @ EPFL) as well as the dataset we used and its origin.</p>
			<p>This website was made for the Data Visualisation course at <Link href="https://www.epfl.ch" class={style.link}>EPFL</Link>.</p>
			<p><Link href="https://github.com/com-480-data-visualization/data-visualization-project-2021-itv" title="Github repo" class={style.link}>Check the code!</Link></p>
		</div>
	</section>
);

export default About;
