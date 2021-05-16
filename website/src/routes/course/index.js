import { h } from 'preact';
import style from './style.css';

import participationEvolution from '../../assets/images/day-by-day.png';
import barPlotCourse from '../../assets/images/per-school.png';
import barPlotCourseRelative from '../../assets/images/percentage-per-school.png';

const Course = () => (
	<section class={style.course}>
		{/* <div class={style.row}> */}
				<div class={style.left}>
					<input
						type="search"
						class={style.searchbar}
						placeholder="Enter course id"
					/>
					<h2>General info</h2>
					<div class={style.info}>Name: course name</div>
					<div class={style.info}>ID: course ID</div>
					<div class={style.info}>Teacher: teacher</div>
					<div class={style.info}>Section: section</div>
				</div>
			<div class={style.right}>
				<h2>Participation rate for this class</h2>
				<p>
				The <em>Course</em> page of our website will contain the results of the evaluations for a given course. The user will be able to research the course by it's ID.
				</p>
				<p>The figure below displays the number of students who have submitted their evaluations day by day for a given course.</p>
				<img src={participationEvolution} title="Evaluation day by day" alt="Evaluation day by day"/>

				<p>The barplot below displays how many students are subscribed for a given course per school and how many of them have evaluated it.</p>
				<img src={barPlotCourse} />

				<p>
					For most part of the courses, the distribution of subscribed students of different schools is not even. In other words, 80% of students are very likely to come from the school which issued this course and the remaining 20% of students come from the different faculties (these numbers are arbitrary). In this case, the information about the minority schools will not be clearly visible in the above barplot. To fix this issue, the complementary barplot will be displayed (see figure below).
				</p>
				<img src={barPlotCourseRelative} title="Percentage of student taking part vs registered by represented section" alt="Percentage of student taking part vs registered by represented section" />
			</div>
		{/* </div> */}
	</section>
);

export default Course;