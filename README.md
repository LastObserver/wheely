[![Dependency Status](https://david-dm.org/preboot/angular-webpack/status.svg)](https://david-dm.org/preboot/angular-webpack#info=dependencies)

This workflow serves as a starting point for building Angular 1.x applications using Webpack. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just yarn scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone the repo then edit `app.js` inside `/src/app/app.js`

```bash
$ git clone ssh://git@git.crtweb.ru:22681/pp/carbox.frontend.git
$ cd carbox.frontend
$ yarn install
$ yarn start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Dependencies](#dependencies)
* [Installing](#installing)
* [Running the app](#running-the-app)
* [Developing](#developing)
* [Testing](#testing)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `yarn` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `clone` this repo
* `yarn install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
yarn start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `yarn run build`
* build files and watch: `yarn start`

## Testing

* single run: `yarn test`
* live mode (TDD style): `yarn run test-watch`
