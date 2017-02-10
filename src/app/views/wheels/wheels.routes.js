import controller from './wheels.controller'
import templateUrl from './wheels.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.wheels',{
		url: '/make/:makeName/:modelName/:year',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl
	})
}