// TODO: $http cache настройки убрать в config

import angular from 'angular';

import angularCache from 'angular-cache';
import angularRouter from 'angular-ui-router';
import config from './app.config';
import run from './app.run'
import views from './views';
import services from './common/services';
import filters from './common/filters';
import components from './common/components';
import './stylesheets/application.styl';

angular.module('Wheely', [
  angularCache,
  angularRouter,
  views,
  services,
  filters,
  components,
])
  .config(config)
  .run(run);

angular.bootstrap(document.documentElement, ['Wheely'], { strictDi: true });
