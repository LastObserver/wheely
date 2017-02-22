import controller from './layout.controller'
import templateUrl from './layout.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout',{
	    controller: controller,
	    controllerAs: '$ctrl',
	    templateUrl
	})
}