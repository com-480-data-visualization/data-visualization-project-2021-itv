# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Biefer Julien | 241309 |
| Burgelin Clément | 249954 |
| Korukova Alexandera | 202842 |

[Milestone 1](#milestone-1-23rd-april-5pm) • [Milestone 2](#milestone-2-7th-may-5pm) • [Milestone 3](#milestone-3-4th-june-5pm)

## Milestone 1 (23rd April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

__Amadeous switched the position of dataset and problematic to introduce the game before talking about the dataset. Is it ok?__


### Dataset

The datasets we want to work with are samples the database of "osu!", a popular online free-to-win rhythm game. ([website](https://osu.ppy.sh/home))

While "osu!" provides multiple game-modes which are basically totally different games, we will only focus on the most played game-mode "osu!standard" (often refered as "osu!" itself).

In "osu!standard", you play beatmaps in which there are hit-circles appearing that should be aimed and clicked in rhythm with the music. There's a [wiki](https://osu.ppy.sh/wiki/en/Main_Page) of the game, and I recommend you to read the [osu!standard game-mode wiki page](https://osu.ppy.sh/wiki/en/Game_mode/osu%21) for more details of how the game works. Watching some osu! gameplay videos might also be a good idea.

The main developper provides samples at this address : [https://data.ppy.sh/](https://data.ppy.sh/).

Since the samples are very large SQL exports, in order to avoid having every web client to download a large file to display visualization, a set of file has been imported and made available by Clément on a personal server. We will use a simple backend on his server to query the data.

The following database samples are made available :
    - The osu_top dump contains the data of the 10k "best" active players (according to the current ranking criteria).
    - The osu_random dump contains the data of 10k uniformly sampled active players.
    - The osu_mlpp dump contains the data of random active players sampled from a special probability distribution where better player means higher probability.

Each sample is composed of several SQL tables, the most important ones being :
    - `osu_beatmaps` representing the beatmaps and `osu_beatmapsets` representing a set of beatmaps made on the same music.
    - `osu_user_stats` representing the sampled players and some statistics (like playtime) and their rank.
    - `osu_scores_high` representing the best score achieved by a players on each beatmap he played.

The data can mostly be used as is, but some simple preprocessing can allow more meaningfull visualizations and avoid re-calculations, as later explained.


### Problematic

In osu!, beatmaps are created by the community and verified by staff members. There are already more than 100k validated beatmaps. Due to the large and ever increasing amount of beatmaps, evaluating their difficulty can not be done subjectively and has to be automated.

For that purpose, as of 2021 and since 2014, the difficulty of beatmaps is evaluated using a traditionnal algorithm (called ppv2) based on the spacial and time distance of consecutive hit-circles and some form of accumulation of the difficulty across a whole beatmap.  
Based on that, scores are also given a difficulty value which is given in a unit called "pp" standing for "performance points".  
Each player is assigned a global pp value as a weighted sum (exponentially decreasing weight) of his scores ordered in descending pp values.  
More details can be found [in the wiki](https://osu.ppy.sh/wiki/en/Performance_points).

Even though the ppv2 algorithm is regularly improved, this algorithm is still highly unbalanced as there is a lot of aspects of the real difficulty of beatmap for which no one has yet found a good way of estimating them yet. This leads to inaccuracy in the ranking of players and tentative of abuse of that inaccuracy from players and beatmap creators.

To resolve that problem, there is various people working on improving the ppv2 system or creating new systems (and Clément is one of them).

The main objective of that project is to make data visualizations that provide insights regarding the difficulty of a score on a beatmap to help indentifying and evaluating difficulty criterias.  
In particular, we might want to display :
- Proportions of players with `x` pp that can do some score `s` (or better) on some beatmap `b`
- Relation between this proportions and the score pp value given by ppv2.
- Comparison of those proportions for different scores or different beatmaps.
- Relations observed between those statistics and various beatmap parameters. (length, bpm, etc...)
- Tendencies oberved for specific beatmap creators.


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

