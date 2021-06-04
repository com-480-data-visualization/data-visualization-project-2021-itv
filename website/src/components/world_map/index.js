import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import Slider from '@material-ui/core/Slider';
import {MuiThemeProvider} from "@material-ui/core/styles";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import * as d3 from "d3";

import style from './style.css';
import baseroute from '../../baseroute';

import {getDepPerCapitaByYear} from '../../data/utils';
import { rgbToHsl } from '@amcharts/amcharts4/.internal/core/utils/Colors';

const marks = getYears()


function getYears() {
	let years = []
	for(var y = 1995; y < 2019; y++) {
		years.push({
			value: y,
			label: y.toString()
		})
	}
	return years
}

class DiscreteSlider extends Component {

	render() {
		return (
				<Slider
					defaultValue={this.props.value}
					value={this.props.value ? this.props.value : 2005}
					aria-labelledby="discrete-slider-always"
					step={1}
					min={marks[0].value}
					max={marks[marks.length-1].value}
					marks={marks}
					onChange={(event, value) => this.props.onChange(value)}
				/>
		);
	}
}

class Map extends Component {

	yearSelected() {

		// dispose the old chart to draw the new one
		this.disposeChart()

		// Create map instance
		let map = am4core.create("chartdiv", am4maps.MapChart);
		this.map = map;

		let selectNewCountry = this.props.changeCountry;

		const year = this.props.year ? this.props.year.toString() : '2005';

		getDepPerCapitaByYear(year, (data) => {
			const name = data['name']
			const population = data['population']
			const departures = data['departures']
			const value = data['value']

			// Set map definition
			map.geodata = am4geodata_worldLow;

			// Set projection
			map.projection = new am4maps.projections.Miller();

			// Create map polygon series
			let polygonSeries = new am4maps.MapPolygonSeries();
			polygonSeries.exclude = ["AQ"]; // exclude Antarctica
			map.series.push(polygonSeries);

			// Make map load polygon (like country names) data from GeoJSON
			polygonSeries.useGeodata = true;

			// Configure series
			let polygonTemplate = polygonSeries.mapPolygons.template;
			polygonTemplate.tooltipText = "{name}\nPopulation: {population}\nDepartures: {departures}\n Departures per capita: {value}";
			polygonTemplate.fill = am4core.color("#D3D3D3");

			// Create hover state and set alternative fill color
			let hs = polygonTemplate.states.create("hover");
			hs.properties.fill = am4core.color("#A9A9A9");

			polygonSeries.data = data;

			// Add heat rule
			/* TODO: for some reason heatRules do not interpolate between 
				min and max data values, this is why they are manually set (0 and 2)
				Answer: because of Hong Kong
				*/
			polygonSeries.heatRules.push({
				"property": "fill",
				"target": polygonSeries.mapPolygons.template,
				"min": am4core.color("#d8f3dc"),
				"max": am4core.color("#081c15"),
				// "dataField": "value",
				"logarithmic": false,
				"minValue": 0,
				"maxValue": 2

			});

			// Add heat legend
			var heatLegend = map.createChild(am4maps.HeatLegend);
			heatLegend.orientation = "vertical";
			heatLegend.series = polygonSeries;
			heatLegend.width = am4core.percent(100);
			heatLegend.minValue = 0;
			heatLegend.maxValue = 2;
			heatLegend.padding(10, 10, 10, 10);

			// display the tooltip when the mouse is over a given country
			polygonTemplate.events.on("over", function(ev) {
				if (!isNaN(ev.target.dataItem.value)) {
					heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
				} else {
					heatLegend.valueAxis.hideTooltip();
				}
			});
			
			polygonSeries.mapPolygons.template.events.on("out", function(ev) {
				heatLegend.valueAxis.hideTooltip();
			});

			polygonTemplate.events.on("hit", function(ev) {
				var data = ev.target.dataItem.dataContext;
				selectNewCountry(data.id);
			})

		})
	}

	disposeChart() {
    if (this.map) {
      this.map.dispose();
    }
	}

	componentDidUpdate(oldProps) {
		// this.disposeChart();
		// TODO: not sure this is optimal
		this.yearSelected();
	}

	componentDidMount() {
		this.yearSelected();
  }

	componentWillUnmount() {
		this.disposeChart();
  }

  render() {
    return (
      	<div id="chartdiv" class={style.map}></div>
    );  
	}
};

class WorldMap extends Component {

	render() {
		return (
			<div>
				<Map 
					year={this.props.year}
					changeCountry={this.props.onCountryChange}
				/>
				<DiscreteSlider
					value={this.props.year}
					onChange={this.props.onYearChange}
				/>
			</div>
		)
	}
}

export default WorldMap;
