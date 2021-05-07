import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

import skillImprovement from '../../assets/images/skill-improvement.png';
import webChart from '../../assets/images/web-chart.png';

class Home extends Component {
  render() {
    return (
			<section class={style.home}>
				<h1>Data Visualization Project</h1>
				<p>This project aims at visualizing osu! game data. 
				These visualizations will help developers to adjust the osu! score evaluation system.</p>
				<p>Some information about our project. For more, please visit <Link href={`${baseroute}/about`}>the about page</Link>.</p>
				<ul>
					<li><a href="#osu!?">osu!?</a></li>
					<li><a href="#problematic">Problematic</a></li>
					<li><a href="#data">Data</a></li>
				</ul>
				<h2><span id="osu!?">osu!?</span></h2>
				<p>Describe the gameplay</p>
				<p>Describe the beatmaps</p>
				<h2><span id="problematic">Problematic</span></h2>
				<p>
					In osu!, beatmaps are created by the community and verified by staff members. 
					There are already more than 100k validated beatmaps. 
					Due to the large and ever increasing amount of beatmaps, evaluating their difficulty can not be done subjectively and has to be automated.
				</p>
				<p>
					For that purpose, as of 2021 and since 2014, the difficulty of beatmaps is evaluated using a traditionnal algorithm (called ppv2) 
					based on the spacial and time distance of consecutive hit-circles and some form of accumulation of the difficulty across a whole beatmap.  
					Based on that, scores are also given a difficulty value which is given in a unit called "pp" standing for "performance points". 
					Each player is assigned a global pp value as a weighted sum (exponentially decreasing weight) of his scores ordered in descending pp values. 
				</p>
				<p>
					Even though the ppv2 algorithm is regularly improved, it is still highly unbalanced as there are a lot of aspects of the real difficulty of beatmap 
					for which no one yet has found a good way of estimating them. 
					This leads to inaccuracy in the ranking of players and tentative of abuse of that inaccuracy from players and beatmap creators.
				</p>
				<p>
					The goal of this project is to find the issues in the osu! score evaluation system by making some visualizations. 
					The first idea is to figure out which skills the players are more likely to improve. 
					The figure below displays three skill (count50, count100 and count300) metrics evaluation.  
					Note that the skills which players tend to improve over time may be considered for the score evaluation.
				</p>
				<img src={skillImprovement} alt="Second graphic. Wej." title="Second graphic. Wej." />
				<p>
					Next, the beatmaps are studied. 
					To determine the overall tendencies, several beatmap features are visualized in the star chart below.
					In this star chart the average feature levels are compared to the top-1000 most popular beatmaps' ones.
				</p>
				<img src={webChart} alt="Last graphic" title="Last graphic" />
				<p>
					To have a closer look at the beatmaps, take a look at the <a href="../beatmaps">Beatmaps page</a>. 
				</p>
				<h2><span id="data">Data</span></h2>
				<p>And <em>Voilà</em>!</p>
			</section>
		)
	};
}

export default Home;
