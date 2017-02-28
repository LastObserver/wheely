import angular from 'angular'
import layout from './layout'
import getStarted from './getstarted'
import make from './make'
import models from './models'
import years from './years'
import wheels from './wheels'
import notfound from './404'

export default angular.module('Wheely.views', [
  layout,
  getStarted,
  make,
  models,
  years,
  wheels,
  notfound,
])
  .name
