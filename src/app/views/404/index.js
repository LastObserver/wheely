import angular from 'angular';
import routes from './404.routes';

export default angular.module('Wheely.views.notfound', [])
  .config(routes)
  .name;
