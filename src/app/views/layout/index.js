import angular from 'angular'
import routes from './layout.routes'

export default angular.module(`Wheely.layout`, [])
  .config(routes)
  .name