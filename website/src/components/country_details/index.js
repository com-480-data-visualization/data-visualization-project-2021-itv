import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router/match';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import style from './style.css';
import baseroute from '../../baseroute';

import outBoundRatioPerYearsImage from '../../assets/images/tourism-by-year.png';

import {getAllCountryCodes, getAllDepPerCapita, getCountryContinent, getDepPerCapitaByCountry, getDepPerCapitaByYear, getDepPerCapitaByContinent} from '../../data/utils';

const selectedCountryOpacity = 1;
const nonSelectedCountryOpacity = 0.3;

class CountryDetails extends Component {

	drawLineChartForContinent() {

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
			const opacity = (selectedCountryCode == countryCode) ? selectedCountryOpacity : nonSelectedCountryOpacity;
	
			// reduce the opacity of non-selected countries
			series.strokeOpacity = opacity;
			// points 
			var bullet = series.bullets.push(new am4charts.CircleBullet());
			bullet.circle.radius = 3;
			bullet.circle.opacity = opacity;
			bullet.circle.stroke = am4core.color("#fff");
	
			// line becomes thicker on mouse hover
			var segment = series.segments.template;
			segment.interactionsEnabled = true;
			var hs = segment.states.create("hover");
			hs.properties.strokeWidth = 8;
	
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
    if (this.chart) {
      this.chart.dispose();
    }
  }

	componentDidUpdate(oldProps) {

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
				newSelectedLine.strokeOpacity = selectedCountryOpacity;
			}
			if(oldProps.countryCode !== '') {
				let oldSelectedLine = findSeriesByCountryCode(oldProps.countryCode)
				if(oldSelectedLine !== undefined) {
					oldSelectedLine.strokeOpacity = nonSelectedCountryOpacity;
				}
			}
		}

		var chart = this.chart;

		if(oldProps.countryCode != this.props.countryCode) {
			if(this.props.continent != oldProps.continent) {
				// dispose the chart
				if(chart) {
					chart.dispose();
				}
				// draw the chart for the new continent
				this.drawLineChartForContinent();
			} else {
				// highlight the new line and hide the old selected one
				highlightSelectedCountry(oldProps, this.props);
			}
		}
	}

  render() {
		return (
			<div id="lineplot" style={{"width": "100%", "height": "500px", "padding-right": "10px"}}></div>
		)
	}
}

export default CountryDetails;
