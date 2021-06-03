import * as d3 from "d3";

// import depPerCapita from '../assets/data/dep_per_capita.csv';
// import dummy from '../assets/data/dummy.csv';

// TODO: for some reason it does not work with import
const depPerCapitaUrl = '../assets/data/dep_per_capita.csv';
const fullDataset = '../assets/data/full_dataset.csv';

export function getDepPerCapitaByYear(year, f) {
  d3.csv(depPerCapitaUrl).then(function(data) {
    let depPerCapita = []
    const popColName = year.concat('_pop')
    const depColName = year.concat('_dep')
    for (var i = 0; i < data.length; i++) {
      depPerCapita.push({
        'id': data[i]['CountryCode2'],
        'name': data[i]['CountryName'],
        'value': data[i][year],
        'population': data[i][popColName],
        'departures': data[i][depColName]
      })
    }
    f(depPerCapita)
})}

// TODO: put getYears from world map into utils
export function getAllDepPerCapita(f) {
  d3.csv(depPerCapitaUrl).then(function(data) {
    let depPerCapita = []
    for(var year = 1995; year < 2019; year++) {
      const y = year.toString();
      depPerCapita.push({
        "year": y
      })
      for(var i = 0; i < data.length; i++) {
        if(data[i][y] !== "") {
          depPerCapita[depPerCapita.length-1][data[i]['CountryCode2']] = data[i][y]
        }
      }
    }
    f(depPerCapita)
  })
}

// 2-digit country code
export function getDepPerCapitaByCountry(countryCode, f) {
  d3.csv(depPerCapitaUrl).then(function(data) {
    let depPerCapita = [];
    for(var i = 0; i < data.length; i++) {
      if(data[i]['CountryCode2'] === countryCode) {
        for(var year = 1995; year < 2019; year++) {
          const y = year.toString();
          depPerCapita.push({
            'id': data[i]['CountryCode2'],
            'name': data[i]['CountryName'],
            'year': y 
          })
          if (data[i][y] !== "") {
            depPerCapita[depPerCapita.length-1]['value'] = data[i][y];
          } 
        }
        break;
      }
    }
    f(depPerCapita);
  })
}

export function getAllCountryCodes(f) {
  d3.csv(depPerCapitaUrl).then(function(data) {
    let countryCodes = [];
    for(var i = 0; i < data.length; i++) {
      countryCodes.push({
        'code': data[i]['CountryCode2'],
        'name': data[i]['CountryName']
      })
    }
    f(countryCodes)
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