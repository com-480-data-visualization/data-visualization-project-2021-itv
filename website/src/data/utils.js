import * as d3 from "d3";

// import depPerCapita from '../assets/data/dep_per_capita.csv';
// import dummy from '../assets/data/dummy.csv';

// TODO: for some reason it does not work with import
const depPerCapitaUrl = '../assets/data/dep_per_capita.csv';

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
    for(var i = 0; i < data.length; i++) {
      for(var year = 1995; year < 2019; year++) {
        const y = year.toString()
        depPerCapita.push({
          'id': data[i]['CountryCode2'],
          'name': data[i]['CountryName'],
          'year': y,
          'value': data[i][y]
        })
      }
    }
  })
}

// 2-digit country code
export function getDepPerCapitaByCountry(countryCode, f) {
  d3.csv(depPerCapitaUrl).then(function(data){
    let depPerCapita = []
    for(var i = 0; i < data.length; i++) {
      if(data[i]['CountryCode2'] === countryCode) {
        for(var year = 1995; year < 2019; year++) {
          const y = year.toString();
          depPerCapita.push({
            'id': data[i]['CountryCode2'],
            'name': data[i]['CountryName'],
            'year': y, 
            'value': data[i][y]
          })
        }
        break;
      }
    }
    f(depPerCapita);
  })
}
