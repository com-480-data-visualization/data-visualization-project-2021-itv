import { h } from 'preact';
import style from './style.css';

const About = () => (
	<section class={'about ' + style.about}>
		<h1>About</h1>
		<p>Here we will describe the project, the context (Data Visualization class @ EPFL) as well as the dataset we used and its origin.</p>
	</section>
);

export default About;
