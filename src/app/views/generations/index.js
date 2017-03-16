import angular from 'angular';
import routes from './generations.routes';

export default angular.module('Wheely.views.generations', [])
  .config(routes)
  .name;
