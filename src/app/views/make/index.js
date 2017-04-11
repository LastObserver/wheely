import angular from 'angular';
import routes from './make.routes';

export default angular.module('Wheely.views.make', [])
  .config(routes)
  .name;
