# Data Visualization Project
## Milestone 2

### Introduction  

During the COVID-19 pandemic, when the majority of people were staying in their home to prevent the spread of the disease and the aircraft were grounded, some of us were dreaming of traveling again. Interested in some economical and demographical aspects, we wished to provide some insight about international tourism and how much countries contributed to it. On an other point of view, an ecological one, it could also be used to determine how much inhabitants of a country contribute to fill the air with carbon emissions and where efforts should be done to reach the emission level that were fixed.

### Problematic  


### Visualizations  

#### Our website

Our website ([available here](https://com-480-data-visualization.github.io/data-visualization-project-2021-itv/)), is build with Preact, a lightweight version of React. It is currently structured on 

We build our website automatically using Github Actions. For some unknown reason, the footer on the Github Pages hosted website is present twice on each page. Some link might not be working as well on the Github Pages website. It is not the case on our local build, we are investigating this issue. If we find so solution, we will probably host it elsewhere.

#### Home page  
The `Home` page of our website will display an interactive zoomable choropleth map of the world. The data displayed will be either about inbound tourism (https://tourismteacher.com/inbound-tourism/), outbound tourism ([definition](https://tourismteacher.com/outbound-tourism/)) or overall expenses for travel for each country. This theme will be selectable on the left corner (using a select field). The map will show countries with different colors depending on the value for the country for the selected theme. A slider at the bottom of the map will allow to select the year the user is interested in. When overing a country, a tooltip will display the country name as well as the real value used to define the color.

![Scheme of the choropleth map]()

We would like to make the countries clickable so that when a user select and click on a country, it is redirected later in the page where specific information about the country could be displayed. Three time-based line graphs (one per theme) or only one with possibility to select the themes to display will show the evolution of the inbound/outbound or expanses for a given country.

![Scheme of the time-based graph]()

Finally, it could be interesting to compare the countries we have data about on the expenses per number of out-going tourists. It could provide insight about the level of wealth (????) of countries and we might see clusters appear.

![Scheme of the expenses over outbound graph]()

#### About page

On the about page, we will describe the project, the context (Data Visualization class @ EPFL) as well as the dataset we used and its origin.

### Tools

* Javascript, HTML, CSS - basics
* __D3.js__ for interactions with DOM and visualizations
* [amCharts](https://www.amcharts.com/) for advanced maps
* __Preact__ for frontend

### Useful Lectures  
* Lecture 1.2 "*Basic Web Development*": basic knowledge about HTML, CSS and SVG  
* Lectures 2 and 3: "*Javascript 1 & 2*": basic knowledge about Javascript
* Lecture 4.2 "*Data Driven Documents*": selectors, data binding, reading data  
* Lecture 5.2 "*Interactive D3*": axes, events
* Lecture 6.1 "*Perception, Color*": choose the color palette for the plots  
* Lecture 7.2 "*Do's and Don'ts*": guidelines for the bar charts

### Possible enhancements

* Since the information displayed on the choropleth map will depend on the population of the countries, we could imagine to add a switch allowing the user to select either absolute or relative data, the latter being normalized by the number inhabitant for each country.
* It can be very interesting to add more information about the countries in the section dedicated to a specific country. Information such as demographics, culture, religion, money could be fetched (from WikiData for instance) and displayed.
* In the same vein as the previous point, for a given country, we could fetch information about the change in the political or religious regime or when wars took place in these country to explain the variations about the graphs.
