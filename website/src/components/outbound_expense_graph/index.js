import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

import * as d3 from "d3";

import {getDepExpPopByYear} from '../../data/utils';

import outboundExpenseImage from '../../assets/images/bubble-plot.png';

class OutboundExpenseGraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			year: 2005
		};
	}

	updatePlot() {
		console.log('Building plot');
		let margin = {top: 10, bottom: 80, left: 80, right: 50};
		let full_width = 1000;
		let full_height = 500;
		let width = full_width - margin.left - margin.right;
		let height = full_height - margin.top - margin.bottom;

		getDepExpPopByYear(this.state.year, _data => {
			// Remove too small data
			const data = _data.filter(e => e.departures > 1 && e.expenditures > 1)

			const expRatio = 1000000000;
			const depRatio = 1000000

			let minDep = data[0].departures;
			let maxDep = data[0].departures;// / depRatio;
			let minExp = data[0].expenditures;
			let maxExp = data[0].expenditures;// / expRatio;
			let minPop = data[0].population;
			let maxPop = data[0].population;

			let continents = [];//(data.filter(e => e['continent'])).unique();
			
			// Search for continent, min and max values for axes
			for (let i = 0; i < data.length; ++i) {

				// Apply ratio as well
				/*
				data[i].expenditures /= expRatio;
				data[i].departures /= depRatio;
				*/
				let e = data[i];

				if (continents.indexOf(e.continent) < 0)
					continents.push(e.continent);
				
				if (maxDep < e.departures)
					maxDep = e.departures
				if (minDep > e.departures)
					minDep = e.departures

				if (maxExp < e.expenditures)
					maxExp = e.expenditures
				if (minExp > e.expenditures)
					minExp = e.expenditures

				if (maxPop < e.population)
					maxPop = e.population
				if (minPop > e.population)
					minPop = e.population
			}

			/*
			console.log(`Found ${continents.length} continents!`);
			console.log(`Departures min: ${minDep}\t max:${maxDep}`);
			console.log(`Expenditures min: ${minExp}\t max:${maxExp}`);
			console.log(`Population min: ${minPop}\t max:${maxPop}`);
			*/

			this.svg = d3.select('#bubbleplot')
				.append('svg')
					.attr('width', full_width)
					.attr('height', full_height)
				.append("g")
					.attr("transform","translate("+margin.left+","+margin.top+")");

			// Add axis
			let x = d3.scaleLog().clamp(true)
				.domain([minDep, maxDep+1.05])
				.range([0, width])
				.nice();
			let y = d3.scaleLog().clamp(true)
				.domain([minExp, maxExp*1.05])
				.range([height, 0])	// Inverse since starting from top left
				.nice();
			let z = d3.scaleLinear()
				.domain([minPop, maxPop])
				.range([5, 60]);

			this.svg.append("g")
				.attr("transform", "translate(0,"+height+")")
				.call(d3.axisBottom(x));
			this.svg.append("g")
				.call(d3.axisLeft(y));

			// To display a color per continent
			let continentColor = d3.scaleOrdinal()
				.domain(continents)
				.range(d3.schemeSet2)

			const Tooltip = d3.select('#bubbleplot').style('position', 'relative')
				.append('div')
					.style('opacity', 0)
					.attr('class', 'tooltip')
					.style('position', 'absolute')
					.style('background-color', 'white')
					.style('border', 'solid')
					.style('border-radius', '5px')
					.style('border-color', 'black')
					.style('padding', '5px');
			
			// Create interactive functions
			const showToolTip = m => {
				Tooltip.style('opacity', 1);
			};

			const getToolTipData = m => {
				let s = m.name +' ('+m.continent+")<br />";
				s += "Departures: " + m.departures + "<br />";
				s += "Expenditures: " + m.population + "<br />";
				s += "Population: " + m.population + "<br />";
				return s;
			}
			const mousemove = m => {
				Tooltip
					.html(getToolTipData(m))
					.style('left', (margin.left + d3.mouse(d3.event.currentTarget)[0] + 15) + 'px')
					.style('top', (margin.top + d3.mouse(d3.event.currentTarget)[1] + 15) + 'px');
			};

			const hideToolTip = m => {
				Tooltip
					.style('opacity', 0);
			};

			this.svg.append('g')
				.selectAll('dot')
				// Sort data for the largest circle to be draw first
				.data(data.sort((e, f) => f.population - e.population))
				.enter()
				.append('circle')
					.attr('cx', d => x(d.departures))
					.attr('cy', d => y(d.expenditures))
					.attr('r', d => z(d.population))
					.style("fill", d => continentColor(d.continent))
					.style("opacity", "0.6")
					.attr("stroke", "black")
				.on('mouseover', showToolTip)
				.on('mousemove', mousemove)
				.on('mouseleave', hideToolTip);
		});
	}

	componentDidUpdate(oldProps) {
		this.disposeChart();
		this.updatePlot();
	}

	componentDidMount() {
		this.updatePlot();
  }

  render() {
    return (
			<div id={style.outbound_expense_section}>
				<div class="container">

					<h2>Outbound/Expense graph</h2>
					<div id="bubbleplot">

					</div>
					{
					<div id="outbound_expense_graph">
						Here will be displayed the outbound vs expense graph and some additionnal infos.
						<img src={outboundExpenseImage} alt="Bubble plot comparing the expentiture per number of outbound tourists for each country" title="Expenditures over Outbound bubble plot"/>
					</div>
					}
				</div>
			</div>
		)
	}
};

export default OutboundExpenseGraph;
