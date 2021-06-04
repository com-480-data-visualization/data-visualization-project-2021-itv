import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router/match';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import style from './style.css';
import baseroute from '../../baseroute';

import {getAllCountryCodes, getAllDepPerCapita, getCountryContinent, getDepPerCapitaByCountry, getDepPerCapitaByYear, getDepPerCapitaByContinent} from '../../data/utils';

// TODO: replace these by objects
const selectedCountryOpacity = 1;
const nonSelectedCountryOpacity = 0.3;

const selectedLineStyle = {
	strokeWidth: 8, 
	strokeOpacity: 1, 
	zIndex: 10
}

const nonSelectedLineStyle = {
	strokeWidth: 4, 
	strokeOpacity: 0.3, 
	zIndex: undefined
}

class CountryDetails extends Component {

	drawLineChartForContinent() {

		// dispose the old chart to draw the new one
		this.disposeChart();

		function toggleSeries(series, over) {
			series.segments.each(function(segment) {
				segment.isHover = over;
			});
		}

		function createSeries(countryCode, countryName) {

			var series = chart.series.push(new am4charts.LineSeries());
			// x and y values
			series.dataFields.valueY = countryCode;
			series.dataFields.categoryX = "year";
			// properties
			series.name = countryName;
			series.id = countryCode;
			// line width
			series.strokeWidth = 4;
			// do not display missing data
			series.connect = false;
	
			// define opacities for selected and non selected countries
			const lineStyle = (selectedCountryCode == countryCode) ? selectedLineStyle : nonSelectedLineStyle;
	
			// reduce the opacity of non-selected countries
			series.strokeOpacity = lineStyle.strokeOpacity;
			series.strokeWidth = lineStyle.strokeWidth;
			series.zIndex = lineStyle.zIndex;
			// points 
			var bullet = series.bullets.push(new am4charts.CircleBullet());
			bullet.circle.radius = 3;
			bullet.circle.opacity = lineStyle.strokeOpacity;
			bullet.circle.stroke = am4core.color("#fff");
	
			//line becomes thicker on mouse hover
			var segment = series.segments.template;
			segment.interactionsEnabled = true;
			// var hs = segment.states.create("hover");
			// hs.properties.strokeWidth = 6;
			// hs.properties.strokeOpacity = 0.5;
	
			// tooltip
			series.tooltipText = "{name}";
	
			// display tooltip for the closest line only
			series.tooltip.events.on("shown", function(ev) {
				toggleSeries(ev.target.targetSprite, true);
			});
			series.tooltip.events.on("hidden", function(ev) {
				if (ev.target.targetSprite) {
					toggleSeries(ev.target.targetSprite, false);
				}
				else {
					chart.series.each(function(series) {
						toggleSeries(series, false);
					});
				}
			});
	
			return series;
		}

		// create chart
		var chart = am4core.create("lineplot", am4charts.XYChart);
		this.chart = chart;

		const continent = this.props.continent;
		const selectedCountryCode = this.props.countryCode;

		getAllDepPerCapita((data) => {
			// bind data to the chart
			chart.data = data;

			// create X and Y axis
			var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
			categoryAxis.dataFields.category = "year";
			var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

			getAllCountryCodes((codes) => {
				for(var i = 0; i < codes.length; i++) {
					if(codes[i]['continent'] === continent) {
						createSeries(codes[i]['code'], codes[i]['name'])
					}
				}
				/* Create a cursor */
				chart.cursor = new am4charts.XYCursor();
				chart.cursor.maxTooltipDistance = -1;
			})
		})
	}

	componentDidMount() {
		am4core.useTheme(am4themes_animated);
		this.drawLineChartForContinent();
	}

	componentWillUnmount() {
		this.disposeChart();
  }

	componentDidUpdate(oldProps) {

		function changeLineStyle(line, style) {
			line.strokeWidth = style.strokeWidth;
			line.strokeOpacity = style.strokeOpacity;
			line.zIndex = style.zIndex;
			line.bulletsContainer.opacity = style.strokeOpacity;
			line.bulletsContainer.zIndex = style.zIndex;
		}

		function findSeriesByCountryCode(countryCode) {
			for(var i = 0; i < chart.series.length; i++) {
				if(chart.series._values[i].id == countryCode) {
					return chart.series._values[i];
				}
			}
		}

		function highlightSelectedCountry(oldProps, newProps) {
			let newSelectedLine = findSeriesByCountryCode(newProps.countryCode)
			if(newSelectedLine !== undefined) {
				// newSelectedLine.strokeOpacity = selectedCountryOpacity;
				changeLineStyle(newSelectedLine, selectedLineStyle);
			}
			if(oldProps.countryCode !== '') {
				let oldSelectedLine = findSeriesByCountryCode(oldProps.countryCode)
				if(oldSelectedLine !== undefined) {
					// oldSelectedLine.strokeOpacity = nonSelectedCountryOpacity;
					changeLineStyle(oldSelectedLine, nonSelectedLineStyle);
				}
			}
		}

		var chart = this.chart;

		if(oldProps.countryCode != this.props.countryCode) {
			if(this.props.continent != oldProps.continent) {
				// draw the chart for the new continent
				this.drawLineChartForContinent();
			} else {
				// highlight the new line and hide the old selected one
				highlightSelectedCountry(oldProps, this.props);
			}
		}
	}

	disposeChart() {
		if(this.chart) {
			this.chart.dispose();
		}
	}

  render() {
		return (
			<div class="container" >
				<h2 id="linechart">Departure per capita: {this.props.continent}</h2>
				<p>Here, year by year departure per capita ratio is displayed for the given country and the countries of the same continent</p>
				<p>To select another country, click on it on the <a href="#worldmap">world map above</a></p>
				<div id="lineplot" style={{"width": "100%", "height": "500px", "padding-right": "10px"}}></div>
			</div>
		)
	}
}

export default CountryDetails;
