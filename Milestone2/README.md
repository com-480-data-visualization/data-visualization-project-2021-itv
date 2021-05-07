# Milestone 2 (7th May, 5pm)

**10% of the final grade**

## Visualisations  

### Beatmap visualisation
In order to be able to improve the beatmap difficulty evaluation system, the different beatmap features must be compared. The star plot below displays the comparison between the 1000 most popular and all beatmaps.  

![web-chart](../website/src/assets/images/web-chart.png)  

### PP scores visualisation  
The figure below displays the probability that the player reaches a certain score on a given beatmap. This plot may also be very useful to evaluate the difficulty of the beatmap. The user of our website will be able to select the beatmap (by ID) and get such a plot for this beatmap as well as other relevant information.  
![scores](../website/src/assets/images/scores.png)

### Player skill improvement
To build a new score evaluation system it is important to understand which skills the are more likely to be improved by the players. The skills which remain unchanged over time/number of games played should be considered as a bad metric for evaluation.  

![skills](../website/src/assets/images/skill-improvement.png)

## Tools
* __[D3.js](https://d3js.org/):__  
  * selectors  
  * `d3.starPlot()` for the star plot beatmaps features visualization
  * `d3.line()` for player skill improvement and score plots
* __[Preactjs](https://preactjs.com/):__  
  * frontend

## Useful lectures  
* Lecture 1.2 "Basic Web Development": basic html/css
* Lectures 4.2, 5,.2 - D3: interaction with DOM, visualizations
* Lecture 6.1 "Perception, Color": choose a color palette
* Lecture 11.1 "Tabular Data": star plot

## Possible improvements  

Interactive plots:
* the user can move the vertices of the web chart and see the values   
* the user can move the vertical bar in the scores plot to see the probability  