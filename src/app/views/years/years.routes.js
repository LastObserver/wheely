import controller from './years.controller'
import templateUrl from './years.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.years',{
		url: '/make/:make/:model',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    resolve: {
	    	list: ($stateParams,wheelsService) => {
	    		return wheelsService.getAllGenerations($stateParams.make,$stateParams.model)
	    	},
	    	makeSlug: ($stateParams) => {return $stateParams.make},
	    	modelSlug: ($stateParams) => {return $stateParams.model}
	    }
	})
}