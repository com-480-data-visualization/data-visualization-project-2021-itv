# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Biefer Julien | 241309 |
| Burgelin Clément | 249954 |
| Korukova Alexandera |  |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (23rd April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

__Amadeous switched the position of dataset and problematic to introduce the game before talking about the dataset. Is it ok?__

### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

Our project aims at providing visualisations of data from a multiplayer game, called "osu!" ([website](https://osu.ppy.sh/home)).

In osu!, players have to touch the more accurately possible, circles that appear and disappear in rythm with a music. Players can create "beatmaps" that are designated by a music and a particular combination of circles. These maps can be enriched by "mods" that allow users to play different version of the same map, in various conditions (without displaying the circles on the map: "hidden" mod). The score of players are evaluated per beatmap and mod according their reactivity, precision at aiming the circles and combo bonuses (as long as a player perform correctly, they are awarded with bonuses) amongst other parameters.

The team working around the game would like to change the difficulty rating of the beatmap/mod combination. Visualizations would help to identify and define new criteria for this evaluation.

### Dataset

> Find a dataset (or multiple) that you will explore. Assess the quality of the data it contains and how much preprocessing / data-cleaning it will require before tackling visualization. We recommend using a standard dataset as this course is not about scraping nor data processing.
>
> Hint: some good pointers for finding quality publicly available datasets ([Google dataset search](https://datasetsearch.research.google.com/), [Kaggle](https://www.kaggle.com/datasets), [OpenSwissData](https://opendata.swiss/en/), [SNAP](https://snap.stanford.edu/data/) and [FiveThirtyEight](https://data.fivethirtyeight.com/)), you could use also the DataSets proposed by the ENAC (see the Announcements section on Zulip).

The dataset we would be working on is splitted on two extracts: the top 10'000 players and an random sample of 10'000 players. Please note that this sampling is not actually completely random but is made according a special distribution to avoid having too much inactive players. Each extract is composed of several SQL tables representing the players, the beatmaps, the scores of players on these beatmaps with a mod and so on.

Data from the game can be found [here](https://data.ppy.sh/). Since these files are large and SQL exports, they are not directly exploitable from our Javascript code. In order to avoid every web client to download a large file to display visualization, a set of file has been imported and made available by Clément on a personal server. Our script will perform SQL queries on his server to get data for the visualization.

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

__TO BE COMPLETED__

### Related work

> - What others have already done with the data?
> - Why is your approach original?
> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).
> - In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

Since the futur visualisations will be used in a project lead by the team around the osu! game with whom Clément is in contact and since no other visualization have been braught to their attention, we can assume that there is not previous related work and assume that our approach is original. _Small part on the sources?_

## Milestone 2 (7th May, 5pm)

**10% of the final grade**


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

