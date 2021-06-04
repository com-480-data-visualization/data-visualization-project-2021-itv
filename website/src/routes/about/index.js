import { h } from 'preact';
import style from './style.css';

import { Link } from 'preact-router/match';

const About = () => (
	<section class={'about ' + style.about}>
		<h1>About</h1>
		<h2>Who are we?</h2>
		<p>
			We are two master students @ <Link href="https://www.epfl.ch" class={style.link}>EPFL</Link> and this project is made as part of the Data Visualisation (COM-480) course.
			Our goal was to practice visualizations using Javascript libraries such as D3.js or amCharts.<br />
			You can discover the other projects of our class on the <Link href="https://github.com/com-480-data-visualization" title="Github classroom for COM-480">Github classroom</Link>.
		</p>

		<h2>Where did we get the data?</h2>
		<div>
			<p>Several datasets were used to perform these visualizations:</p>
			<ul>
				<li>Information about tourism comes from the <i>International Tourism Demographics</i> available <Link href="https://www.kaggle.com/ayushggarg/international-tourism-demographics" title="International tourism dataset">here</Link>.</li>
				<li>Information about the world population from the same issuer is available <Link href="https://data.worldbank.org/indicator/SP.POP.TOTL" title="World population datset">here</Link>.</li>
			</ul>
			<p>Some additional were used to comlete the visualisations:</p>
			<ul>
				<li>2- and 3- letter country codes were taken from <Link href="https://www.kaggle.com/juanumusic/countries-iso-codes" title="Countries ISO codes">here</Link>.</li>
				<li>Continents for every country were taken  <Link href="https://www.kaggle.com/statchaitya/country-to-continent" title="Coutry to continent">here</Link></li>
			</ul>
		</div>

		<h2>More about this project</h2>
		<p>
			If you are interested in the process that leads to this website, you can check our <Link href="https://github.com/com-480-data-visualization/data-visualization-project-2021-itv/blob/master/Milestone3/ProcessBook_ITV.pdf" title="Process book">Process Book</Link>.
			You can also check the <Link href="https://github.com/com-480-data-visualization/data-visualization-project-2021-itv" title="Github repo" class={style.link}>code of the website</Link> if you want!
		</p>
	</section>
);

export default About;
