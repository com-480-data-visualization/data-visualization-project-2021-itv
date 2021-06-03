import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router/match';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import style from './style.css';
import baseroute from '../../baseroute';

import outBoundRatioPerYearsImage from '../../assets/images/tourism-by-year.png';

import {getAllCountryCodes, getAllDepPerCapita, getDepPerCapitaByCountry, getDepPerCapitaByYear} from '../../data/utils';

const selectedCountryOpacity = 1;
const nonSelectedCountryOpacity = 0.3;

class CountryDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			seriesIndex: undefined
		}
	}

	componentDidMount() {
		const selectedCountryCode = this.props.countryCode;

		am4core.useTheme(am4themes_animated);

		// create chart
		var chart = am4core.create("lineplot", am4charts.XYChart);
		this.chart = chart;

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

		getAllDepPerCapita((data) => {
			// bind data to the chart
			chart.data = data;

			// create X and Y axis
			var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
			categoryAxis.dataFields.category = "year";
			var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

			getAllCountryCodes((codes) => {
				for(var i = 0; i < codes.length; i++) {
					createSeries(codes[i]['code'], codes[i]['name'])
				}
				/* Create a cursor */
				chart.cursor = new am4charts.XYCursor();
				chart.cursor.maxTooltipDistance = -1;
			})
		})
	}

	findSeriesByCountryCode(countryCode) {
		for(var i = 0; i < this.chart.series.length; i++) {
			if(this.chart.series._values[i].id == countryCode) {
				return this.chart.series._values[i];
			}
		}
	}

	componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

	componentDidUpdate(oldProps) {
		if(oldProps.countryCode != this.props.countryCode) {
			let newSelectedLine = this.findSeriesByCountryCode(this.props.countryCode)
			if(newSelectedLine !== undefined) {
				newSelectedLine.strokeOpacity = selectedCountryOpacity;
			}
			if(oldProps.countryCode !== '') {
				let oldSelectedLine = this.findSeriesByCountryCode(oldProps.countryCode)
				if(oldSelectedLine !== undefined) {
					oldSelectedLine.strokeOpacity = nonSelectedCountryOpacity;
				}
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
