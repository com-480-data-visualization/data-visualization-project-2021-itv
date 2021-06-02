import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router/match';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import style from './style.css';
import baseroute from '../../baseroute';

import outBoundRatioPerYearsImage from '../../assets/images/tourism-by-year.png';

import {getAllDepPerCapita, getDepPerCapitaByCountry, getDepPerCapitaByYear} from '../../data/utils';

class CountryDetails extends Component {

	componentDidMount() {
		getDepPerCapitaByCountry('BE', (data) => {
				// Create chart instance
				var chart = am4core.create("lineplot", am4charts.XYChart);

				// Bind data
				chart.data = data

				// Create axes
				var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
				categoryAxis.dataFields.category = "year";

				// Create value axis
				var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

				// Create series
				var series1 = chart.series.push(new am4charts.LineSeries());
				series1.dataFields.valueY = "value";
				series1.dataFields.categoryX = "year";
				series1.name = "Departures per capita";
				series1.strokeWidth = 3;
				series1.tensionX = 0.7;
				series1.bullets.push(new am4charts.CircleBullet());

				// Add legend
				chart.legend = new am4charts.Legend();

				self.chart = chart;
		})
	}

	componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
		return (
			<div id="lineplot" style={{"width": "100%", "height": "500px", "padding-right": "10px"}}></div>
		)
	}
}

export default CountryDetails;
