// TODO: getAllGenerations - разобрать что должен возвращаеть метод
//
import controller from './wheels.controller'
import templateUrl from './wheels.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.wheels',{
		url: '/make/:make/:model/:year',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    resolve: {
	    	list: ($stateParams,wheelsService) => {
	    		return wheelsService.getAllWheels($stateParams.make,$stateParams.model,$stateParams.year)
	    	},
	    	info: ($stateParams,wheelsService) => {
	    		return wheelsService.getAllGenerations($stateParams.make,$stateParams.model,$stateParams.year)
	    	}
	    }
	})
}
