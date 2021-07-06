
<h3 align="center">Ligner: User Interface</h3>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The UI so far consists of the login page plus a dashboard showing the most important stats as tiles.
Missing features are a registration dialog, a news stream, leaderboards and much more.


### Built With

* Node 13
* React.js (bootstrapped with [Create React App](https://github.com/facebook/create-react-app))

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

The following tools are required for building the application:
* Node 13: There are various ways to install this, one of the easiest is using [Snap](https://snapcraft.io/node)
* docker: Please check the [official installation instructions](https://classic.yarnpkg.com/en/docs/install).

### Installation
In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `docker build -t aimlesslyfree/ligner.ui:latest .`

Builds a production-ready docker image. Please see the ligner-deploy repository for detailed deployment instructions. 