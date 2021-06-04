# Website for International Tourism Visualizations project

## Install and build

In order to run the website, you need to :

* Collect the source code (using `git clone` or downloading the zip file from the [project repo](https://github.io/com-480-data-visualization/data-visualization-project-2021-itv/)) from the main branch

* Go in the website folder and install the dependencies

  ```bash
  cd website
  npm install
  ```

* Run the _development server_ with hot reload with

  ```bash
  npm run dev
  ```

  OR

  To build the website to static render, you can run

  ```bash
  npm run build
  ```

  This will produce a _build_ folder that you can copy (or its content) to a webserver that will serve the static files.

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

Deployment on Github pages is obtained following [this guide](https://github.com/flameddd/blog/blob/master/2019-12-11%EF%BC%9AGithub%20Actions%20deploy%20Preactjs%20to%20Github%20Pages.md).

## Data

The data used for the visualizations are located under the _src/assets/data/_ folder. You can replace them with similar shape data if you want.

These files are created from the dataset we chose ([International Tourism Demographics](https://www.kaggle.com/ayushggarg/international-tourism-demographics)  and [World population](https://data.worldbank.org/indicator/SP.POP.TOTL) both from [The World Bank](http://www.worldbank.org/)).
