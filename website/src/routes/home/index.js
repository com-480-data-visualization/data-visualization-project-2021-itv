import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

import schoolLeaderboard from '../../assets/images/leaderboard.png';
import Tree from '../../assets/tree.js';

class Home extends Component {
	render() {
		return (
			<section class={style.home}>
				<h1>Data Visualization Project</h1>
				<p>This project aims at visualizing EPFL's student particiaption rate to indicative feedback.
				These visualizations aims at motivating students to provide a feedback on the course they follow by "gamifying" the evalutations: adding competition amongst schools.</p>
				<p>Some information about our project. For more, please visit <Link href={`${baseroute}/about`}>the about page</Link>.</p>
				<ul>
					<li><Link href="#eval" title="Evaluations section">Evaluations</Link></li>
					<li><Link href="#problematic" title="Problematic">Problematic</Link></li>
					<li><Link href="#data" title="Data">Data</Link></li>
				</ul>

				<h2 id="eval">Evaluations</h2>
				<p>
					Once per semester, EPFL students can express their opinion about the course they are actually enrolled in: course material, teacher ability to teach, lectures quality, projects/labs quality and so on.
				According to the "Centre d'Appui à l'Enseignement" (<Link href="https://www.epfl.ch/education/teaching/teaching-support/" title="CAPE website">CAPE</Link>), the participation rate has to be at least 60% for the indicative feedback to be representative.
				</p>

				<h2 id="problematic">Problematic</h2>
				<p>
					However, too little students take this opportunity to evaluate their courses. Depending on the section, the participation rate do not always reach the required pourcentage.
					To address this issue, we thought that displaying some nice visualisations about the participation rate for each section or class and to compare them will create some competition amongst schools or programm and motivate student to fill their indicative feedbacks.
				</p>
				<p>
					For instance, this graphic could compare the overall participation of students per schools and could be splitted for both bachelor and master programs.
				</p>
				<img src={schoolLeaderboard} alt="School leaderboard" title="School leaderboard" />
				<p>
					In order to provide a more in-depth analysis, we split the analyse to represent one school or one course separately.
					A way to display the structure of EPFL schools, program and courses could be done with a radial tree where the user could access to an in-depth analysis at school, program or course level by clicking on a link.
				</p>

				<Tree />				

				<h2 id="data">Add data</h2>
				<p>And <em>Voilà</em>!</p>

			</section>
		)
	};
}

export default Home;
