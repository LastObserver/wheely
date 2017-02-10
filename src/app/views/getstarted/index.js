import angular from 'angular'
import routes from './getstarted.routes'

export default angular.module(`Wheely.views.getstarted`, [])
  .config(routes)
  .name