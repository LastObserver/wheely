import angular from 'angular';
import routes from './wheels.routes';

export default angular.module('Wheely.views.wheels', [])
  .config(routes)
  .name;
