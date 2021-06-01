import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import * as d3 from "d3";

import style from './style.css';
import baseroute from '../../baseroute';

import worldMapImage from '../../assets/images/map.png';

import {getDepPerCapitaByYear} from '../../data/utils';

class WorldMap extends Component {
	componentDidMount() {

		getDepPerCapitaByYear('1999', (data) => {
			const name = data['name']
			const population = data['population']
			const departures = data['departures']
			const value = data['value']

			// Create map instance
			let map = am4core.create("chartdiv", am4maps.MapChart);

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
				*/
			polygonSeries.heatRules.push({
				"property": "fill",
				"target": polygonSeries.mapPolygons.template,
				"min": am4core.color("#ffffff"),
				"max": am4core.color("#0000ff"),
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
			heatLegend.minValue = 0
			heatLegend.maxValue = 2
			heatLegend.padding(10, 10, 10, 10)

			polygonSeries.mapPolygons.template.events.on("over", function(ev) {
				if (!isNaN(ev.target.dataItem.value)) {
					heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
				} else {
					heatLegend.valueAxis.hideTooltip();
				}
			});
			
			polygonSeries.mapPolygons.template.events.on("out", function(ev) {
				heatLegend.valueAxis.hideTooltip();
			});

			self.map = map;

		})
  }

	componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px"}}></div>
    );
	}
};

export default WorldMap;
