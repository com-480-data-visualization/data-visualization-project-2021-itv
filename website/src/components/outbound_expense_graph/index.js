import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

import * as d3 from "d3";

import {getDepExpPopByYear} from '../../data/utils';

class OutboundExpenseGraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			year: 2005,
		};
	}

	updatePlot() {
		let margin = {top: 10, bottom: 40, left: 100, right: 50};
		let full_width = 1200;
		let full_height = 550;
		let width = full_width - margin.left - margin.right;
		let height = full_height - margin.top - margin.bottom;

		getDepExpPopByYear(this.props.year, _data => {
			// Remove too small data
			const data = _data.filter(e => e.departures > 1 && e.expenditures > 1)

			let minDep = data[0].departures;
			let maxDep = data[0].departures;
			let minExp = data[0].expenditures;
			let maxExp = data[0].expenditures;
			let minPop = data[0].population;
			let maxPop = data[0].population;

			let continents = [];
			
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
					.attr('height', full_height+20)
				.append("g")
					.attr('height', full_height+20)
					.attr("transform","translate("+margin.left+","+margin.top+")");

			// Add axis
			let x = d3.scaleLog()
				.domain([Math.floor(minDep), Math.ceil(maxDep)])
				.range([0, width])
				.clamp(true)
				.nice();
			let y = d3.scaleLog()
				.domain([Math.floor(minExp), Math.ceil(maxExp+1)])
				.range([height, 0])	// Inverse since starting from top left
				.clamp(true)
				.nice();
			let z = d3.scaleLinear()
				.domain([minPop, maxPop])
				.range([5, 60]);

			this.svg.append("g")
				.attr("transform", "translate(0,"+height+")")
				.call(d3.axisBottom(x).ticks(8));
			this.svg.append("g")
				.call(d3.axisLeft(y).ticks(8));

			// To display a color per continent
			let continentColor = d3.scaleOrdinal()
				.domain(continents)
				.range(d3.schemeSet2)

			// Tooltip and interactivity
			const Tooltip = d3.select('#bubbleplot')
				.append('div')
					.style('opacity', 0)
					.attr('class', 'tooltip')
					.style('position', 'absolute')
					.style('background-color', 'white')
					.style('border', 'solid 2px')
					.style('border-radius', '5px')
					.style('border-color', 'black')
					.style('padding', '5px');
			
			// Create interactive functions
			const showToolTip = m => { Tooltip.style('opacity', 1); };
			const getToolTipData = m => {
				let s = "<b>" + m.name +'</b> ('+m.continent+")<br /><br />";
				s += "Departures: " + m.departures + "<br />";
				s += "Expenditures: " + m.population + "<br />";
				s += "Population: " + m.population + "<br />";
				return s;
			}
			const mousemove = m => {
				Tooltip
					.html(getToolTipData(m))
					.style('left', (margin.left + d3.mouse(d3.event.currentTarget)[0] + 15) + 'px')
					.style('top', (margin.top + d3.mouse(d3.event.currentTarget)[1] + 15) + 'px')
					.style('background-color', continentColor(m.continent));
			};
			const hideToolTip = m => { Tooltip.style('opacity', 0); };

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
				.on('mouseover', showToolTip)
				.on('mousemove', mousemove)
				.on('mouseleave', hideToolTip);

			this.svg.append('text')
				.attr('x', width/2 - 100)
				.attr('y', height + margin.bottom)
				.attr('font-size', '1.3em')
				.text('Number of departures')

			this.svg.append('text')
				.attr('x', -height/2 - 5*margin.top)
				.attr('y', -margin.left/2 - 20)
				.attr('font-size', '1.3em')
				.attr('transform', "rotate(-90)")
				.text('Expenses')

			const legend = d3.select('#bubbleplot')
				.append('div')
					.attr('id', 'bubbleplot_legend')
					.style('position', 'absolute')
  				.style('padding', '10px')
					.style('border', 'solid 1px')
  				.style('border-radius', '5px')
  				.style('opacity', '0.9')
					.style('top', (margin.top) + 'px')
					.style('left', (margin.left+20) + 'px')
					.html(
						continents.sort()
						.map(c => "<span style=\"color:" + continentColor(c) + ";font-size:1.2em;\">" + c + "</span>")
						.join('<br />')
					)
		});
	}

	componentDidUpdate(oldProps) {
		// If a year changed
		if (oldProps.year != this.props.year) {
			// Get rid of previous chart
			d3.selectAll("#bubbleplot > *").remove();
			this.updatePlot();
		}
	}

	componentDidMount() {
		this.updatePlot();
  }

  render() {
    return (
			<div id={style.outbound_expense_section} class="container">
				<h2>Outbound/Expense graph for year {this.props.year}</h2>
				<div id="bubbleplot" style="position: relative;"></div>
			</div>
		)
	}
};

export default OutboundExpenseGraph;
