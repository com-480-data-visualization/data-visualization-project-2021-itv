import * as d3 from "d3";

// import depPerCapita from '../assets/data/dep_per_capita.csv';
// import dummy from '../assets/data/dummy.csv';

export function getDepPerCapitaByYear(year, f) {
  d3.csv('../assets/data/dep_per_capita.csv').then(function(data) {
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
