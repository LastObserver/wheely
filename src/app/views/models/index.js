import angular from 'angular'
import routes from './models.routes'

export default angular.module(`Wheely.views.models`, [])
  .config(routes)
  .name