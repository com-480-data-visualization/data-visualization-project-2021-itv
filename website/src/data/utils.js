import * as d3 from "d3";

import baseroute from '../baseroute';

// Baseroute is required for the links to be correct when hosted on Github Pages
const depPerCapitaUrl = baseroute + '/assets/data/dep_per_capita.csv';
const fullDataset = baseroute + '/assets/data/full_dataset.csv';

export function getDepPerCapitaByYear(year, f) {
  d3.csv(fullDataset).then(function(data) {
    let depPerCapita = []
    const popColName = year.concat('_pop')
    const depColName = year.concat('_dep')
    const dpcColName = year.concat('_dpc')
    for (var i = 0; i < data.length; i++) {
      depPerCapita.push({
        'id': data[i]['CountryCode2'],
        'name': data[i]['CountryName'],
        'value': data[i][dpcColName],
        'population': data[i][popColName].length != 0 ? parseInt(data[i][popColName]) : 0,
        'departures': data[i][depColName].length != 0 ? parseInt(data[i][depColName]) : 0,
      })
    }
    f(depPerCapita)
})}

// TODO: put getYears from world map into utils
export function getAllDepPerCapita(f) {
  d3.csv(fullDataset).then(function(data) {
    let depPerCapita = []
    for(var year = 1995; year < 2019; year++) {
      const y = year.toString();
      const dpcColname = y.concat('_dpc');
      depPerCapita.push({
        "year": y
      })
      for(var i = 0; i < data.length; i++) {
        if(data[i][dpcColname] !== "") {
          depPerCapita[depPerCapita.length-1][data[i]['CountryCode2']] = data[i][dpcColname]
        }
      }
    }
    f(depPerCapita)
  })
}

// 2-digit country code
export function getDepPerCapitaByCountry(countryCode, f) {
  d3.csv(fullDataset).then(function(data) {
    let depPerCapita = [];
    for(var i = 0; i < data.length; i++) {
      if(data[i]['CountryCode2'] === countryCode) {
        for(var year = 1995; year < 2019; year++) {
          const y = year.toString();
          const dpcColName = y.concat('_dpc');
          depPerCapita.push({
            'id': data[i]['CountryCode2'],
            'name': data[i]['CountryName'],
            'year': y 
          })
          if (data[i][dpcColName] !== "") {
            depPerCapita[depPerCapita.length-1]['value'] = data[i][dpcColName];
          } 
        }
        break;
      }
    }
    f(depPerCapita);
  })
}

export function getAllCountryCodes(f) {
  d3.csv(fullDataset).then(function(data) {
    let countryCodes = [];
    for(var i = 0; i < data.length; i++) {
      countryCodes.push({
        'code': data[i]['CountryCode2'],
        'name': data[i]['CountryName'],
        'continent': data[i]['Continent']
      })
    }
    f(countryCodes)
  })
}

export function getDepPerCapitaByContinent(continent, f) {
  d3.csv(fullDataset).then(function(data) {
    let depPerCapita = []
    for(var year = 1995; year < 2019; year++) {
      const y = year.toString();
      const dpcColName = y.concat('_dpc');
      depPerCapita.push({
        "year": y
      })
      for(var i = 0; i < data.length; i++) {
        if(data[i][dpcColName] != "" && data[i]['Continent'] === continent) {
          const dataIndex = depPerCapita.length-1
          depPerCapita[dataIndex][data[i]['CountryCode2']] = data[i][dpcColName]
          depPerCapita[dataIndex]['Continent'] = continent;
        }
      }
    }
    f(depPerCapita)
  })
}

export function getCountryContinent(countryCode, f) {
  d3.csv(fullDataset).then(function(data) {
    let continent = ""
    for(var i = 0; i < data.length; i++) {
      if(data[i]['CountryCode2'] === countryCode) {
        continent = data[i]['Continent'];
        break;
      }
    }
    f(continent);
  })
}

export function getDepExpPopByYear(year, callback) {
  d3.csv(fullDataset).then(data => {
    const popYear = year.toString() + '_pop';
    const expYear = year.toString() + '_exp';
    const depYear = year.toString() + '_dep';
    const dpcYear = year.toString() + '_dpc';
    
    let result = [];
    data.forEach(e => {
      result.push({
        'id': e.CountryCode2,
        'name': e.CountryName,
        'population': e[popYear].length != 0 ? parseFloat(e[popYear]) : 0,
        'departures': e[depYear].length != 0 ? parseFloat(e[depYear]) : 0,
        'expenditures': e[expYear].length != 0 ? parseFloat(e[expYear]) : 0,
        'departures_per_capita': e[dpcYear].length != 0 ? parseFloat(e[dpcYear]) : 0,
        'continent': e['Continent']
      })
    });
    callback(result);
  }).catch(err => {if (err) console.log(`Error while openning ${fullDataset}`, err) });
}